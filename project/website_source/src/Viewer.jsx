import React, {useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {SoftwareRenderer} from './SoftwareRenderer.js';
import {Button, ButtonGroup, Checkbox, Icon, Tag} from '@blueprintjs/core';
const clamp=v=>Math.max(0,Math.min(1,v));
const vec=(v,f=[0,0,0])=>new THREE.Vector3(...(Array.isArray(v)?v:f));

export default function Viewer({variant='N2',initialRelease=0,modelBase='downloads/cad',modelVersion=''}) {
  const host=useRef(null),sceneState=useRef(null);
  const [model,setModel]=useState(null),[error,setError]=useState(''),[ready,setReady]=useState(false);
  const [release,setRelease]=useState(initialRelease),[explode,setExplode]=useState(0);
  const [visible,setVisible]=useState({}),[transparent,setTransparent]=useState(false),[view,setView]=useState('Isometric'),[partsOpen,setPartsOpen]=useState(false),[playing,setPlaying]=useState(false);
  useEffect(()=>{if(!playing)return;const id=setInterval(()=>setRelease(v=>{if(v>=1){setPlaying(false);return 1;}return Math.min(1,v+.015);}),45);return()=>clearInterval(id);},[playing]);
  useEffect(()=>{
    const controller=new AbortController();
    setModel(null);setError('');setReady(false);setRelease(initialRelease);setExplode(0);setTransparent(false);setPlaying(false);
    fetch(`${modelBase}/${variant}/viewer.json?v=${encodeURIComponent(modelVersion)}`,{signal:controller.signal}).then(r=>{if(!r.ok)throw new Error(`Model file unavailable (${r.status}).`);return r.json();}).then(next=>{
      if(!Array.isArray(next.parts)||!next.parts.length)throw new Error('The CAD model has no mesh parts.');
      for(const p of next.parts){
        if(!p.id||!Array.isArray(p.positions)||p.positions.length%3||!Array.isArray(p.indices)||p.indices.length%3)throw new Error('Invalid CAD mesh data.');
        if(!p.positions.every(Number.isFinite)||!p.indices.every(n=>Number.isInteger(n)&&n>=0&&n<p.positions.length/3))throw new Error('Invalid mesh coordinates.');
        if(p.releasePositions&&(p.releasePositions.length!==p.positions.length||!p.releasePositions.every(Number.isFinite)))throw new Error('Release mesh topology does not match the retained model.');
      }
      setVisible(Object.fromEntries(next.parts.map(p=>[p.id,true])));setModel(next);
    }).catch(e=>{if(e.name!=='AbortError')setError(e.message);});
    return()=>controller.abort();
  },[variant,initialRelease,modelBase,modelVersion]);
  useEffect(()=>{
    if(!model||!host.current)return;
    let renderer,controls,frame,observer,dirty=true;const scene=new THREE.Scene(),container=host.current,resources=[];
    try{
      try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));renderer.domElement.dataset.renderer='webgl';}
      catch{renderer=new SoftwareRenderer();renderer.domElement.dataset.renderer='software';}
      renderer.setClearColor(new THREE.Color(0xf0f4f6),1);renderer.outputColorSpace=THREE.SRGBColorSpace;
      renderer.domElement.setAttribute('role','img');renderer.domElement.setAttribute('aria-label',`Rotatable variant ${variant} CAD. Drag to orbit; scroll to zoom. Keyboard camera and part controls follow.`);container.appendChild(renderer.domElement);
      const box=new THREE.Box3();for(const p of model.parts)for(let i=0;i<p.positions.length;i+=3)box.expandByPoint(new THREE.Vector3(p.positions[i],p.positions[i+1],p.positions[i+2]));
      const center=box.getCenter(new THREE.Vector3()),size=box.getSize(new THREE.Vector3()),scale=Math.max(size.x,size.y,size.z,1),distance=scale*2.25;
      const camera=new THREE.PerspectiveCamera(36,1,scale/1000,scale*100);camera.up.set(0,0,1);
      controls=new OrbitControls(camera,renderer.domElement);controls.target.copy(center);controls.enableDamping=true;controls.dampingFactor=.12;controls.minDistance=scale*.35;controls.maxDistance=scale*12;controls.screenSpacePanning=true;controls.addEventListener('start',()=>setView('Custom'));
      controls.addEventListener('change',()=>{dirty=true;});
      const presets={Isometric:[1.2,-1.6,1.15],Top:[0,.001,1],Front:[0,-1,.0001],Side:[1,0,.0001],Bottom:[0,.001,-1]};
      const setCamera=name=>{controls.target.copy(center);camera.position.copy(center).add(vec(presets[name]||presets.Isometric).normalize().multiplyScalar(distance));camera.up.set(0,0,1);controls.update();setView(name);};setCamera('Isometric');
      scene.add(new THREE.AmbientLight(0xffffff,.62));const key=new THREE.DirectionalLight(0xffffff,1.35);key.position.set(scale,-scale,scale*2);scene.add(key);const fill=new THREE.DirectionalLight(0xe0ebf4,.40);fill.position.set(-scale,scale,scale);scene.add(fill);
      const axes=new THREE.AxesHelper(scale*.22);axes.position.set(box.min.x-scale*.15,box.min.y-scale*.15,box.min.z);scene.add(axes);resources.push(axes.geometry,axes.material);
      const parts=model.parts.map(p=>{
        const pivot=vec(p.rotationPivot||p.releaseRotation?.pivot),positions=new Float32Array(p.positions);for(let i=0;i<positions.length;i+=3){positions[i]-=pivot.x;positions[i+1]-=pivot.y;positions[i+2]-=pivot.z;}
        const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));geometry.setIndex(p.indices);geometry.computeVertexNormals();geometry.computeBoundingSphere();
        const material=new THREE.MeshLambertMaterial({color:p.color||'#3a8191',side:THREE.DoubleSide}),mesh=new THREE.Mesh(geometry,material),edges=new THREE.LineSegments(new THREE.EdgesGeometry(geometry,34),new THREE.LineBasicMaterial({color:'#244654',transparent:true,opacity:.42}));
        const group=new THREE.Group();group.add(mesh,edges);group.position.copy(pivot);scene.add(group);return{data:p,pivot,geometry,material,edges,group};
      });
      const fitVisible=()=>{scene.updateMatrixWorld(true);const bounds=new THREE.Box3();for(const p of parts)if(p.group.visible)bounds.expandByObject(p.group);if(bounds.isEmpty())return;const mid=bounds.getCenter(new THREE.Vector3()),radius=bounds.getSize(new THREE.Vector3()).length()/2;const direction=camera.position.clone().sub(controls.target).normalize();const half=Math.min(THREE.MathUtils.degToRad(camera.fov/2),Math.atan(Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*camera.aspect));controls.target.copy(mid);camera.position.copy(mid).add(direction.multiplyScalar(Math.max(radius/Math.sin(half)*1.1,scale*.4)));controls.update();dirty=true;};
      sceneState.current={parts,setCamera,fitVisible,lastExplode:0,lastRelease:0,invalidate:()=>{dirty=true;}};
      const resize=()=>{const w=Math.max(1,container.clientWidth),h=Math.max(1,container.clientHeight);renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();dirty=true;};observer=new ResizeObserver(resize);observer.observe(container);resize();
      const draw=()=>{controls.update();if(dirty){renderer.render(scene,camera);dirty=false;}frame=requestAnimationFrame(draw);};draw();setReady(true);
    }catch(e){setError('The interactive view could not start in this browser. '+e.message);}
    return()=>{cancelAnimationFrame(frame);observer?.disconnect();controls?.dispose();for(const p of sceneState.current?.parts||[]){p.geometry.dispose();p.material.dispose();p.edges.geometry.dispose();p.edges.material.dispose();}for(const r of resources){if(Array.isArray(r))r.forEach(x=>x.dispose());else r?.dispose();}sceneState.current=null;renderer?.dispose?.();renderer?.domElement.remove();};
  },[model,variant]);
  useEffect(()=>{
    const state=sceneState.current;if(!state||!ready)return;const unlock=clamp(release*2),separate=clamp((release-.5)*2);
    for(const part of state.parts){const p=part.data;part.group.visible=visible[p.id]!==false&&!(p.visibleWhen==='retained'&&release>0);part.material.transparent=transparent;part.material.opacity=transparent ? 0.38 : 1;part.material.depthWrite=!transparent;part.material.needsUpdate=true;part.edges.material.opacity=transparent ? 0.66 : 0.42;
      if(p.releasePositions){const output=part.geometry.getAttribute('position');for(let i=0;i<p.positions.length;i++)output.array[i]=p.positions[i]+(p.releasePositions[i]-p.positions[i])*unlock-part.pivot.getComponent(i%3);output.needsUpdate=true;part.geometry.computeVertexNormals();part.geometry.computeBoundingSphere();part.edges.geometry.dispose();part.edges.geometry=new THREE.EdgesGeometry(part.geometry,34);}
      const translation=vec(p.explode).multiplyScalar(explode).add(vec(p.unlockTranslation).multiplyScalar(unlock)).add(vec(p.releaseTranslation).multiplyScalar(separate));
      let angle=(p.releaseRotation?.angle||0)*unlock;let axis=p.releaseRotation?.axis;
      if(p.keyframes?.length){const fs=p.keyframes;let a=fs[0],b=fs[fs.length-1];for(let i=0;i<fs.length-1;i++)if(fs[i].u<=release&&release<=fs[i+1].u){a=fs[i];b=fs[i+1];break;}const t=clamp((release-a.u)/(b.u-a.u||1));translation.add(vec(a.translation).lerp(vec(b.translation),t));angle=THREE.MathUtils.degToRad((a.angle_deg||0)+((b.angle_deg||0)-(a.angle_deg||0))*t);axis=p.rotationAxis;}
      part.group.position.copy(part.pivot).add(translation);part.group.quaternion.setFromAxisAngle(vec(axis,[0,0,1]).normalize(),angle);
    }
    if(explode!==state.lastExplode||(release===1&&state.lastRelease!==1))state.fitVisible();state.lastExplode=explode;state.lastRelease=release;state.invalidate();
  },[ready,model,release,explode,visible,transparent]);
  const reset=()=>{setPlaying(false);setRelease(0);setExplode(0);setTransparent(false);setVisible(Object.fromEntries((model?.parts||[]).map(p=>[p.id,true])));sceneState.current?.setCamera('Isometric');};
  const stateLabel=explode>0?'Exploded inspection':release===0?'Retained':release<.5?'Unlocking':release===.5?'Unlocked · still seated':release<1?'Separating':'Separated';
  return <div className="cad-viewer"><div className="viewer-toolbar"><div><span className="status-dot"/><strong>{model?.name||`Variant ${variant}`}</strong><span className="muted">Actual CAD · mm</span></div><Button small minimal icon="reset" onClick={reset} disabled={!ready}>Reset view</Button></div><div className="viewer-stage"><div className="viewer-canvas" ref={host}/>{!ready&&!error&&<div className="viewer-message" role="status"><Icon icon="cube" size={32}/><strong>Loading the 3D model…</strong></div>}{error&&<div className="viewer-message error" role="alert"><Icon icon="warning-sign" size={30}/><strong>3D view unavailable</strong><p>{error}</p><a href={`${modelBase}/${variant}/assembly.step`} download>Download the assembly STEP</a><span>Try a browser with WebGL enabled. No screenshot is being substituted for the interactive model.</span></div>}{ready&&<><div className="viewer-state"><Tag minimal intent="primary">{stateLabel}</Tag></div><div className="viewer-hint"><Icon icon="move" size={13}/>Drag to rotate · scroll to zoom · right-drag to pan</div><div className="viewer-axis-key"><b className="axis-x">X</b><b className="axis-y">Y</b><b className="axis-z">Z</b></div></>}</div><div className="viewer-controls"><div className="viewer-view-row"><span>Camera</span><ButtonGroup>{['Isometric','Top','Front','Side','Bottom'].map(name=><Button key={name} small minimal active={view===name} disabled={!ready} onClick={()=>sceneState.current?.setCamera(name)}>{name}</Button>)}</ButtonGroup><Button small minimal disabled={!ready} onClick={()=>sceneState.current?.fitVisible()}>Fit parts</Button><output className="camera-state" aria-live="polite">{view}</output></div><div className="viewer-sliders"><label><span>Explode parts <output>{Math.round(explode*100)}%</output></span><input type="range" min="0" max="1" step=".01" value={explode} aria-label="Explode parts" disabled={!ready} onChange={e=>{setPlaying(false);setExplode(Number(e.target.value));setRelease(0);}}/></label><label><span>Release sequence <output>{Math.round(release*100)}%</output></span><input type="range" min="0" max="1" step=".01" value={release} aria-label="Release sequence" disabled={!ready} onChange={e=>{setPlaying(false);setRelease(Number(e.target.value));setExplode(0);}}/></label></div><div className="viewer-states"><Button small icon={playing?'pause':'play'} disabled={!ready} onClick={()=>{if(!playing){setRelease(0);setExplode(0);}setPlaying(v=>!v);}}>{playing?'Pause':'Animate'}</Button><Button small active={release===0&&!explode} disabled={!ready} onClick={()=>{setPlaying(false);setRelease(0);setExplode(0);}}>1 · Retained</Button><Button small active={release===.5&&!explode} disabled={!ready} onClick={()=>{setPlaying(false);setRelease(.5);setExplode(0);}}>2 · Unlocked</Button><Button small active={release===1&&!explode} disabled={!ready} onClick={()=>{setPlaying(false);setRelease(1);setExplode(0);}}>3 · Separated</Button></div><div className="part-toolbar"><Button small minimal icon={partsOpen?'chevron-down':'chevron-right'} onClick={()=>setPartsOpen(v=>!v)}>Parts ({model?.parts?.length||0})</Button><Button small minimal disabled={!ready} onClick={()=>setVisible(Object.fromEntries((model?.parts||[]).map(p=>[p.id,true])))}>Show all</Button><Button small minimal disabled={!ready} onClick={()=>setVisible(Object.fromEntries((model?.parts||[]).map(p=>[p.id,p.kind!=='printed'])))}>Hide housing</Button><Button small minimal disabled={!ready} onClick={()=>setVisible(Object.fromEntries((model?.parts||[]).map(p=>[p.id,!p.standard])))}>Hide fasteners</Button><Checkbox className="see-through" checked={transparent} disabled={!ready} onChange={()=>setTransparent(v=>!v)}>See through</Checkbox></div>{partsOpen&&<div className="viewer-parts expanded">{(model?.parts||[]).map(p=><div className="part-item" key={p.id}><Checkbox checked={visible[p.id]!==false} onChange={()=>setVisible(v=>({...v,[p.id]:v[p.id]===false}))}><i style={{background:p.color||'#3a8191'}}/>{p.name||p.id}</Checkbox><button onClick={()=>setVisible(Object.fromEntries(model.parts.map(q=>[q.id,q.id===p.id])))} aria-label={'Isolate '+p.name}>Isolate</button><small>{p.kind||'printed'} · {p.id}{p.visibleWhen==='retained'?' · retained reference only':''}</small></div>)}</div>}<p className="viewer-note">Actual exported CAD. Actuator bodies are external interface models; model fidelity is listed below. Motion is prescribed geometry, not a force simulation. Unlocked means the retainer has moved; separated is an inspection position, not demonstrated ejection.</p></div></div>;
}
