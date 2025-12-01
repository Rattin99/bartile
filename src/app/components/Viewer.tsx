'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, Stage } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/models/house.glb');
  return <primitive object={scene} />;
}

const Viewer: React.FC = () => {
  return (
    <section className="flex-1 bg-[var(--card)] rounded-[var(--radius)] p-5 shadow-[var(--shadow)] min-h-[760px] flex flex-col items-center" aria-label="3D Model Viewer">
      <div className="w-full flex items-center justify-between mb-3.5">
        <div>
          <div className="text-sm text-[var(--muted)]">Model Preview</div>
          <div className="font-extrabold text-xl">Roof Tile — New England Slate • Charcoal • Straight Brushed</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="text-sm text-[var(--muted)]">Lighting</div>
          <div className="w-3 h-3 bg-[var(--brand-yellow)] rounded-full"></div>
        </div>
      </div>

      <div className="flex-1 w-full rounded-[10px] bg-gradient-to-b from-white to-[#f2f2f2] flex items-center justify-center relative overflow-hidden">
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [0, 0, 10] }}>
          <Stage environment="city" intensity={0.6}>
            <Model />
          </Stage>
          <OrbitControls makeDefault />
        </Canvas>
      </div>

      <div className="flex gap-2 p-3.5 items-center w-full">
        <div className="w-11 h-11 rounded-full bg-white border border-[rgba(0,0,0,0.04)] flex items-center justify-center shadow-[0_3px_10px_rgba(0,0,0,0.04)] cursor-pointer" title="Rotate">&#x21B6;</div>
        <div className="w-11 h-11 rounded-full bg-white border border-[rgba(0,0,0,0.04)] flex items-center justify-center shadow-[0_3px_10px_rgba(0,0,0,0.04)] cursor-pointer" title="Zoom">&#x1F50D;</div>
        <div className="w-11 h-11 rounded-full bg-white border border-[rgba(0,0,0,0.04)] flex items-center justify-center shadow-[0_3px_10px_rgba(0,0,0,0.04)] cursor-pointer" title="Pan">&#x2724;</div>
        <div className="ml-auto flex gap-2 items-center">
          <div className="text-[var(--muted)]">Env</div>
          <div className="py-2 px-2.5 bg-white rounded-[10px] border border-[rgba(0,0,0,0.06)] cursor-pointer font-semibold">Day</div>
          <div className="py-2 px-2.5 bg-white rounded-[10px] border border-[rgba(0,0,0,0.06)] cursor-pointer font-semibold">Dusk</div>
        </div>
      </div>
    </section>
  );
};

export default Viewer;
