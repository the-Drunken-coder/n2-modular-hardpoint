// Small depth-buffer renderer for environments without WebGL. Uses the same
// Three.js scene, camera and exported CAD triangles as the WebGL renderer.
// No image or alternate geometry is substituted. Transparent inspection is
// approximate; opaque geometry uses per-pixel depth, avoiding SVG painter gaps.
import * as THREE from 'three';
export class SoftwareRenderer {
  constructor(){this.domElement=document.createElement('canvas');this.ctx=this.domElement.getContext('2d',{alpha:false});if(!this.ctx)throw Error('2D canvas unavailable');this.background=[240,244,246];this.width=1;this.height=1;}
  setPixelRatio(){}
  setClearColor(color){const c=color.clone().convertLinearToSRGB();this.background=[c.r*255,c.g*255,c.b*255];}
  setSize(w,h){const ratio=Math.min(1,1000/w);this.width=Math.max(1,Math.round(w*ratio));this.height=Math.max(1,Math.round(h*ratio));this.domElement.width=this.width;this.domElement.height=this.height;this.buffer=this.ctx.createImageData(this.width,this.height);this.depth=new Float32Array(this.width*this.height);}
  dispose(){this.buffer=null;this.depth=null;}
  render(scene,camera){
    const w=this.width,h=this.height,pixels=this.buffer.data,zbuf=this.depth,bg=this.background;zbuf.fill(Infinity);
    for(let p=0;p<pixels.length;p+=4){pixels[p]=bg[0];pixels[p+1]=bg[1];pixels[p+2]=bg[2];pixels[p+3]=255;}
    scene.updateMatrixWorld();camera.updateMatrixWorld();camera.matrixWorldInverse.copy(camera.matrixWorld).invert();
    const projection=new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse),opaque=[],transparent=[];
    scene.traverseVisible(o=>{if(o.isMesh&&(o.geometry?.attributes?.position)&&o.material?.visible!==false)(o.material.transparent?transparent:opaque).push(o);});
    const point=new THREE.Vector3();transparent.sort((a,b)=>{a.getWorldPosition(point);const ad=point.distanceToSquared(camera.position);b.getWorldPosition(point);return point.distanceToSquared(camera.position)-ad;});
    for(const mesh of [...opaque,...transparent]){
      const geometry=mesh.geometry,pos=geometry.attributes.position.array,index=geometry.index?.array,mvp=new THREE.Matrix4().multiplyMatrices(projection,mesh.matrixWorld).elements,mw=mesh.matrixWorld.elements;
      const n=pos.length/3,screen=new Float64Array(n*4),world=new Float64Array(pos.length);
      for(let i=0;i<n;i++){const x=pos[3*i],y=pos[3*i+1],z=pos[3*i+2],cw=mvp[3]*x+mvp[7]*y+mvp[11]*z+mvp[15];screen[4*i+3]=cw;
        screen[4*i]=(mvp[0]*x+mvp[4]*y+mvp[8]*z+mvp[12])/cw*w*.5+w*.5;
        screen[4*i+1]=h*.5-(mvp[1]*x+mvp[5]*y+mvp[9]*z+mvp[13])/cw*h*.5;
        screen[4*i+2]=(mvp[2]*x+mvp[6]*y+mvp[10]*z+mvp[14])/cw;
        world[3*i]=mw[0]*x+mw[4]*y+mw[8]*z+mw[12];world[3*i+1]=mw[1]*x+mw[5]*y+mw[9]*z+mw[13];world[3*i+2]=mw[2]*x+mw[6]*y+mw[10]*z+mw[14];}
      const base=mesh.material.color.clone().convertLinearToSRGB(),alpha=mesh.material.opacity??1,nt=index?index.length:n;
      for(let t=0;t<nt;t+=3){const a=index?index[t]:t,b=index?index[t+1]:t+1,c=index?index[t+2]:t+2;
        if(screen[4*a+3]<=0||screen[4*b+3]<=0||screen[4*c+3]<=0)continue;
        const ax=screen[4*a],ay=screen[4*a+1],az=screen[4*a+2],bx=screen[4*b],by=screen[4*b+1],bz=screen[4*b+2],cx=screen[4*c],cy=screen[4*c+1],cz=screen[4*c+2];
        const area=(by-cy)*(ax-cx)+(cx-bx)*(ay-cy);if(Math.abs(area)<1e-10)continue;
        const loX=Math.max(0,Math.ceil(Math.min(ax,bx,cx))),hiX=Math.min(w-1,Math.floor(Math.max(ax,bx,cx))),loY=Math.max(0,Math.ceil(Math.min(ay,by,cy))),hiY=Math.min(h-1,Math.floor(Math.max(ay,by,cy)));if(loX>hiX||loY>hiY)continue;
        const ux=world[3*b]-world[3*a],uy=world[3*b+1]-world[3*a+1],uz=world[3*b+2]-world[3*a+2],vx=world[3*c]-world[3*a],vy=world[3*c+1]-world[3*a+1],vz=world[3*c+2]-world[3*a+2];
        const nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx,len=Math.sqrt(nx*nx+ny*ny+nz*nz)||1;
        const shade=.53+.47*Math.abs((.3*nx-.5*ny+.8124*nz)/len),r=255*base.r*shade,g=255*base.g*shade,blue=255*base.b*shade;
        const aDx=(by-cy)/area,aDy=(cx-bx)/area,bDx=(cy-ay)/area,bDy=(ax-cx)/area;
        let rowA=((by-cy)*(loX+.5-cx)+(cx-bx)*(loY+.5-cy))/area,rowB=((cy-ay)*(loX+.5-cx)+(ax-cx)*(loY+.5-cy))/area;
        for(let y=loY;y<=hiY;y++,rowA+=aDy,rowB+=bDy){let wa=rowA,wb=rowB;for(let x=loX;x<=hiX;x++,wa+=aDx,wb+=bDx){const wc=1-wa-wb;if(wa<-.00001||wb<-.00001||wc<-.00001)continue;const z=wa*az+wb*bz+wc*cz,di=y*w+x;if(z<-1||z>1||z>zbuf[di]+1e-7)continue;const pi=di*4;
          if(alpha>=.999){pixels[pi]=r;pixels[pi+1]=g;pixels[pi+2]=blue;zbuf[di]=z;}else{pixels[pi]=pixels[pi]*(1-alpha)+r*alpha;pixels[pi+1]=pixels[pi+1]*(1-alpha)+g*alpha;pixels[pi+2]=pixels[pi+2]*(1-alpha)+blue*alpha;}
        }}
      }
    }
    this.ctx.putImageData(this.buffer,0,0);
  }
}
