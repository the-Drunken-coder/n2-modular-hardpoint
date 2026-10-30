import * as THREE from './vendor/three.module.js';

// A small CAD viewer renderer for environments without a WebGL context. It uses
// the exact scene transforms/camera and preserves picking through Three.js.
// Painter sorting is deliberately an illustration aid, not a geometric test.
export class SoftwareRenderer {
  constructor({canvas}) {
    this.domElement=canvas;
    this.context=canvas.getContext('2d',{alpha:true});
    if(!this.context)throw new Error('The browser could not create a drawing canvas.');
    this.isSoftwareRenderer=true;
    this.pixelRatio=1;
    this.width=1;
    this.height=1;
    this.needsRender=true;
    this._geometry=new WeakMap();
    this._palette=new Map();
    this._items=[];
    this._count=0;
    this._matrix=new THREE.Matrix4();
    this._viewProjection=new THREE.Matrix4();
    this._normal=new THREE.Matrix3();
    this.domElement.dataset.renderer='software';
  }
  setPixelRatio(ratio){this.pixelRatio=Math.min(ratio||1,1.5);this.setSize(this.width,this.height);}
  setClearColor(){}
  setSize(width,height){
    this.width=width;this.height=height;
    this.domElement.width=Math.round(width*this.pixelRatio);
    this.domElement.height=Math.round(height*this.pixelRatio);
    this.invalidate();
  }
  invalidate(){this.needsRender=true;}
  dispose(){this._items=[];this._palette.clear();}
  _data(geometry){
    let data=this._geometry.get(geometry);if(data)return data;
    const positions=geometry.getAttribute('position').array;
    const indices=geometry.index?.array;
    const count=(indices?.length||positions.length/3)/3;
    const normals=new Float32Array(count*3);
    for(let face=0;face<count;face++){
      const a=(indices?indices[face*3]:face*3)*3,b=(indices?indices[face*3+1]:face*3+1)*3,c=(indices?indices[face*3+2]:face*3+2)*3;
      const ux=positions[b]-positions[a],uy=positions[b+1]-positions[a+1],uz=positions[b+2]-positions[a+2];
      const vx=positions[c]-positions[a],vy=positions[c+1]-positions[a+1],vz=positions[c+2]-positions[a+2];
      const nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx,length=Math.hypot(nx,ny,nz)||1;
      normals[face*3]=nx/length;normals[face*3+1]=ny/length;normals[face*3+2]=nz/length;
    }
    data={positions,indices,normals,projected:new Float64Array(positions.length/3*4),distances:new Float64Array(positions.length/3)};
    this._geometry.set(geometry,data);return data;
  }
  _color(material,light=1){
    const color=material.color||new THREE.Color(0x999999);
    // Three material colours are linear; Canvas CSS colours are sRGB.
    const key=`${color.getHexString()}-${Math.round(light*48)}-${material.emissiveIntensity||0}`;
    if(this._palette.has(key))return this._palette.get(key);
    const toByte=x=>Math.round(255*Math.min(1,x<=.0031308?12.92*x:1.055*Math.pow(Math.max(0,x),1/2.4)-.055));
    const boost=(material.emissiveIntensity||0)*.10;
    const css=`rgb(${toByte(color.r*light+boost)},${toByte(color.g*light+boost)},${toByte(color.b*light+boost)})`;
    this._palette.set(key,css);return css;
  }
  _item(){let item=this._items[this._count];if(!item){item={points:new Float64Array(8)};this._items[this._count]=item;}this._count++;return item;}
  _project(object,data){
    const matrix=this._matrix.multiplyMatrices(this._viewProjection,object.matrixWorld).elements;
    const vertices=data.positions,projected=data.projected,distances=data.distances;
    const clipping=object.material.clippingPlanes?.[0];
    let px=0,py=0,pz=0,pw=0;
    if(clipping){
      const m=object.matrixWorld.elements,n=clipping.normal;
      px=n.x*m[0]+n.y*m[1]+n.z*m[2];py=n.x*m[4]+n.y*m[5]+n.z*m[6];pz=n.x*m[8]+n.y*m[9]+n.z*m[10];pw=n.x*m[12]+n.y*m[13]+n.z*m[14]+clipping.constant;
    }
    for(let i=0,j=0;i<vertices.length;i+=3,j+=4){
      const x=vertices[i],y=vertices[i+1],z=vertices[i+2];
      projected[j]=matrix[0]*x+matrix[4]*y+matrix[8]*z+matrix[12];
      projected[j+1]=matrix[1]*x+matrix[5]*y+matrix[9]*z+matrix[13];
      projected[j+2]=matrix[2]*x+matrix[6]*y+matrix[10]*z+matrix[14];
      projected[j+3]=matrix[3]*x+matrix[7]*y+matrix[11]*z+matrix[15];
      distances[j/4]=clipping?px*x+py*y+pz*z+pw:1;
    }
  }
  _mesh(object){
    const material=object.material;if(material.isShadowMaterial||material.visible===false||material.opacity<=.005)return;
    const data=this._data(object.geometry);this._project(object,data);
    const {indices,positions,normals,projected:p,distances:d}=data;
    const count=(indices?.length||positions.length/3)/3;
    this._normal.getNormalMatrix(object.matrixWorld);const normal=this._normal.elements;
    const halfWidth=this.width/2,halfHeight=this.height/2;
    for(let face=0;face<count;face++){
      const a=indices?indices[face*3]:face*3,b=indices?indices[face*3+1]:face*3+1,c=indices?indices[face*3+2]:face*3+2;
      if(d[a]<0&&d[b]<0&&d[c]<0)continue;
      const ia=a*4,ib=b*4,ic=c*4;
      if(p[ia+3]<=0||p[ib+3]<=0||p[ic+3]<=0)continue;
      const ax=p[ia]/p[ia+3],ay=p[ia+1]/p[ia+3],bx=p[ib]/p[ib+3],by=p[ib+1]/p[ib+3],cx=p[ic]/p[ic+3],cy=p[ic+1]/p[ic+3];
      if(Math.max(ax,bx,cx)<-1.08||Math.min(ax,bx,cx)>1.08||Math.max(ay,by,cy)<-1.08||Math.min(ay,by,cy)>1.08)continue;
      // Closed CAD solids can discard hidden back faces; cutaways and ghosted
      // bodies retain both sides so their interior surfaces remain visible.
      const facing=(bx-ax)*(cy-ay)-(by-ay)*(cx-ax);
      if(facing<=0&&material.opacity>.98&&!material.clippingPlanes?.length)continue;
      const item=this._item();item.kind=0;item.opacity=material.opacity??1;item.order=object.renderOrder||0;
      item.depth=(p[ia+2]/p[ia+3]+p[ib+2]/p[ib+3]+p[ic+2]/p[ic+3])/3;
      item.count=3;item.points[0]=halfWidth*(ax+1);item.points[1]=halfHeight*(1-ay);item.points[2]=halfWidth*(bx+1);item.points[3]=halfHeight*(1-by);item.points[4]=halfWidth*(cx+1);item.points[5]=halfHeight*(1-cy);
      if(d[a]<0||d[b]<0||d[c]<0){
        const vertices=[a,b,c],polygon=[];
        for(let j=0;j<3;j++){
          const current=vertices[j],next=vertices[(j+1)%3],i=current*4,k=next*4;
          if(d[current]>=0)polygon.push([p[i],p[i+1],p[i+2],p[i+3]]);
          if((d[current]>=0)!==(d[next]>=0)){
            const t=d[current]/(d[current]-d[next]);
            polygon.push([p[i]+(p[k]-p[i])*t,p[i+1]+(p[k+1]-p[i+1])*t,p[i+2]+(p[k+2]-p[i+2])*t,p[i+3]+(p[k+3]-p[i+3])*t]);
          }
        }
        item.count=polygon.length;polygon.forEach((v,j)=>{item.points[j*2]=halfWidth*(v[0]/v[3]+1);item.points[j*2+1]=halfHeight*(1-v[1]/v[3]);});
      }
      const x=normals[face*3],y=normals[face*3+1],z=normals[face*3+2];
      const nx=normal[0]*x+normal[3]*y+normal[6]*z,ny=normal[1]*x+normal[4]*y+normal[7]*z,nz=normal[2]*x+normal[5]*y+normal[8]*z;
      const key=Math.max(0,-nx*.43-ny*.54+nz*.72),fill=Math.max(0,nx*.78+ny*.21+nz*.50);
      const light=material.isMeshBasicMaterial?1:.38+key*.70+fill*.24+Math.max(0,nz)*.10;
      item.color=this._color(material,light);
    }
  }
  _lines(object){
    const material=object.material;if(material.visible===false||material.opacity<=.005)return;
    const data=this._data(object.geometry);this._project(object,data);
    const {indices,positions,projected:p,distances:d}=data,length=indices?.length||positions.length/3;
    const colors=object.geometry.getAttribute('color');const isGrid=object.isGridHelper;
    for(let i=0;i<length-1;i+=2){
      const a=indices?indices[i]:i,b=indices?indices[i+1]:i+1,ia=a*4,ib=b*4;
      if(d[a]<0&&d[b]<0||p[ia+3]<=0||p[ib+3]<=0)continue;
      let x1=p[ia],y1=p[ia+1],w1=p[ia+3],x2=p[ib],y2=p[ib+1],w2=p[ib+3];
      if(d[a]<0||d[b]<0){const t=d[a]/(d[a]-d[b]),x=x1+(x2-x1)*t,y=y1+(y2-y1)*t,w=w1+(w2-w1)*t;if(d[a]<0){x1=x;y1=y;w1=w;}else{x2=x;y2=y;w2=w;}}
      const item=this._item();item.kind=1;item.count=2;item.opacity=material.opacity??1;item.order=isGrid?-1:(object.renderOrder||0);
      item.depth=isGrid?2:(p[ia+2]/p[ia+3]+p[ib+2]/p[ib+3])/2-.000004;
      item.points[0]=(x1/w1+1)*this.width/2;item.points[1]=(1-y1/w1)*this.height/2;item.points[2]=(x2/w2+1)*this.width/2;item.points[3]=(1-y2/w2)*this.height/2;
      item.color=colors?`rgb(${Math.round(colors.getX(a)*255)},${Math.round(colors.getY(a)*255)},${Math.round(colors.getZ(a)*255)})`:this._color(material);item.width=isGrid?.6:.65;
    }
  }
  render(scene,camera){
    if(!this.needsRender)return;this.needsRender=false;
    scene.updateMatrixWorld();camera.updateMatrixWorld();
    this._viewProjection.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);this._count=0;
    scene.traverseVisible(object=>{if(object.isMesh)this._mesh(object);else if(object.isLineSegments)this._lines(object);});
    const visible=this._items.slice(0,this._count);
    visible.sort((a,b)=>{
      // Ghost overlays intentionally remain translucent above the retained model.
      if(a.order>=2||b.order>=2){const delta=Math.max(a.order,0)-Math.max(b.order,0);if(delta)return delta;}
      return b.depth-a.depth;
    });
    const ctx=this.context;ctx.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0);ctx.clearRect(0,0,this.width,this.height);ctx.lineJoin='round';
    let lastFill='',lastStroke='',lastAlpha=-1;
    for(const item of visible){
      if(item.opacity!==lastAlpha){ctx.globalAlpha=item.opacity;lastAlpha=item.opacity;}
      const p=item.points;ctx.beginPath();ctx.moveTo(p[0],p[1]);for(let i=1;i<item.count;i++)ctx.lineTo(p[i*2],p[i*2+1]);
      if(item.kind===1){if(lastStroke!==item.color){ctx.strokeStyle=item.color;lastStroke=item.color;}ctx.lineWidth=item.width;ctx.stroke();}
      else{ctx.closePath();if(lastFill!==item.color){ctx.fillStyle=item.color;lastFill=item.color;}ctx.fill();
        // Same-colour half-pixel edges close Canvas antialias seams between CAD
        // tessellation triangles without turning the model into a wireframe.
        if(item.opacity>.98){if(lastStroke!==item.color){ctx.strokeStyle=item.color;lastStroke=item.color;}ctx.lineWidth=.45;ctx.stroke();}
      }
    }
    ctx.globalAlpha=1;
    this.domElement.dataset.drawnTriangles=String(visible.filter(item=>item.kind===0).length);
  }
}
