import React from 'react';

const Preview: React.FC = () => {
  return (
    <aside className="w-[380px] bg-[var(--card)] rounded-[var(--radius)] p-[18px] shadow-[var(--shadow)] h-[760px] flex flex-col gap-3" aria-label="Installed Preview">
      <h3 className="m-0 mt-1.5">See Your Roof Installed</h3>
      <div className="flex-1 rounded-[10px] bg-gradient-to-b from-[#fafafa] to-[#f3f3f3] flex items-center justify-center relative overflow-hidden" role="img" aria-label="Isometric house preview">
        <div className="absolute bottom-[8%] left-[8%] w-[80%] h-[80%] flex items-end justify-center">
          <div className="w-[86%] h-[46%] bg-repeating-linear-gradient-[90deg,#d6cfc6,#d6cfc6_12px,#cfc6bb_12px,#cfc6bb_24px] rounded-md shadow-[0_8px_30px_rgba(10,10,10,0.06)] -skew-x-20"></div>
        </div>
      </div>
      <div className="flex gap-2.5 items-center">
        <div className="flex-1 text-[var(--muted)]">House style</div>
        <div className="flex gap-1.5">
          <div className="py-2 px-2.5 bg-white rounded-[10px] border border-[rgba(0,0,0,0.06)] cursor-pointer font-semibold">Modern</div>
          <div className="py-2 px-2.5 bg-white rounded-[10px] border border-[rgba(0,0,0,0.06)] cursor-pointer font-semibold">Cottage</div>
          <div className="py-2 px-2.5 bg-white rounded-[10px] border border-[rgba(0,0,0,0.06)] cursor-pointer font-semibold">Farmhouse</div>
        </div>
      </div>
      <div className="mt-1.5"><div className="py-3 px-3.5 rounded-[10px] bg-[var(--brand-red)] text-white text-center font-bold">Full Screen Preview</div></div>
    </aside>
  );
};

export default Preview;
