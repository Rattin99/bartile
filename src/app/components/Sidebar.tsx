import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-[300px] bg-[var(--bg)] rounded-[var(--radius)] p-5 shadow-[var(--shadow)] h-[760px] overflow-auto" aria-label="Configurator Controls">
      <div className="mb-[18px]">
        <h4 className="m-0 mb-2.5 text-[var(--brand-red)] text-xs tracking-wider">Tile Profiles</h4>
        <div className="flex flex-col gap-2.5">
          <label className="flex gap-2.5 items-center p-2 rounded-[9px] bg-white border border-[rgba(0,0,0,0.04)]">
            <img src="/tiles/black.jpg" alt="New England Slate" className="w-[72px] h-12 object-cover rounded-md bg-gradient-to-br from-[#eee] to-[#ddd]" />
            <span className="font-semibold text-[#333]">New England Slate</span>
          </label>
          <label className="flex gap-2.5 items-center p-2 rounded-[9px] bg-white border border-[rgba(0,0,0,0.04)]">
            <img src="/tiles/pink.jpg" alt="Split Timber" className="w-[72px] h-12 object-cover rounded-md bg-gradient-to-br from-[#eee] to-[#ddd]" />
            <span className="font-semibold text-[#333]">Split Timber</span>
          </label>
          <label className="flex gap-2.5 items-center p-2 rounded-[9px] bg-white border border-[rgba(0,0,0,0.04)]">
            <img src="/tiles/red.jpg" alt="Sierra Mission" className="w-[72px] h-12 object-cover rounded-md bg-gradient-to-br from-[#eee] to-[#ddd]" />
            <span className="font-semibold text-[#333]">Sierra Mission</span>
          </label>
          <label className="flex gap-2.5 items-center p-2 rounded-[9px] bg-white border border-[rgba(0,0,0,0.04)]">
            <img src="/tiles/white.jpg" alt="European" className="w-[72px] h-12 object-cover rounded-md bg-gradient-to-br from-[#eee] to-[#ddd]" />
            <span className="font-semibold text-[#333]">European</span>
          </label>
          <label className="flex gap-2.5 items-center p-2 rounded-[9px] bg-white border border-[rgba(0,0,0,0.04)]">
            <img src="/tiles/black.jpg" alt="Legendary Slate" className="w-[72px] h-12 object-cover rounded-md bg-gradient-to-br from-[#eee] to-[#ddd]" />
            <span className="font-semibold text-[#333]">Legendary Slate</span>
          </label>
          <label className="flex gap-2.5 items-center p-2 rounded-[9px] bg-white border border-[rgba(0,0,0,0.04)]">
            <img src="/tiles/pink.jpg" alt="Legendary Split Timber" className="w-[72px] h-12 object-cover rounded-md bg-gradient-to-br from-[#eee] to-[#ddd]" />
            <span className="font-semibold text-[#333]">Legendary Split Timber</span>
          </label>
          <label className="flex gap-2.5 items-center p-2 rounded-[9px] bg-white border border-[rgba(0,0,0,0.04)]">
            <img src="/tiles/red.jpg" alt="Yorkshire" className="w-[72px] h-12 object-cover rounded-md bg-gradient-to-br from-[#eee] to-[#ddd]" />
            <span className="font-semibold text-[#333]">Yorkshire</span>
          </label>
        </div>
      </div>

      <div className="mb-[18px]">
        <h4 className="m-0 mb-2.5 text-[var(--brand-red)] text-xs tracking-wider">Colors</h4>
        <div className="flex flex-wrap gap-2" aria-hidden="false">
          <div className="w-9 h-9 rounded-md border border-[rgba(0,0,0,0.06)] shadow-[0_2px_6px_rgba(0,0,0,0.06)]" style={{ background: '#3b3b3b' }}></div>
          <div className="w-9 h-9 rounded-md border border-[rgba(0,0,0,0.06)] shadow-[0_2px_6px_rgba(0,0,0,0.06)]" style={{ background: '#6b3119' }}></div>
          <div className="w-9 h-9 rounded-md border border-[rgba(0,0,0,0.06)] shadow-[0_2px_6px_rgba(0,0,0,0.06)]" style={{ background: '#8b6f4a' }}></div>
          <div className="w-9 h-9 rounded-md border border-[rgba(0,0,0,0.06)] shadow-[0_2px_6px_rgba(0,0,0,0.06)]" style={{ background: '#b29a7e' }}></div>
          <div className="w-9 h-9 rounded-md border border-[rgba(0,0,0,0.06)] shadow-[0_2px_6px_rgba(0,0,0,0.06)]" style={{ background: '#4a6b3b' }}></div>
          <div className="w-9 h-9 rounded-md border border-[rgba(0,0,0,0.06)] shadow-[0_2px_6px_rgba(0,0,0,0.06)]" style={{ background: '#2d5f83' }}></div>
          <div className="w-9 h-9 rounded-md border border-[rgba(0,0,0,0.06)] shadow-[0_2px_6px_rgba(0,0,0,0.06)]" style={{ background: '#7b2b2b' }}></div>
          <div className="w-9 h-9 rounded-md border border-[rgba(0,0,0,0.06)] shadow-[0_2px_6px_rgba(0,0,0,0.06)]" style={{ background: '#d1c7be' }}></div>
        </div>
        <div className="mt-2.5"><button className="py-2 px-2.5 bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-yellow)] text-white rounded-lg font-bold cursor-pointer">Blend (700+)</button></div>
      </div>

      <div className="mb-[18px]">
        <h4 className="m-0 mb-2.5 text-[var(--brand-red)] text-xs tracking-wider">Textures</h4>
        <div className="flex gap-2 flex-wrap">
          <div className="py-2 px-2.5 bg-white rounded-[10px] border border-[rgba(0,0,0,0.06)] cursor-pointer font-semibold">Straight Brushed</div>
          <div className="py-2 px-2.5 bg-white rounded-[10px] border border-[rgba(0,0,0,0.06)] cursor-pointer font-semibold">Swirl Brushed</div>
          <div className="py-2 px-2.5 bg-white rounded-[10px] border border-[rgba(0,0,0,0.06)] cursor-pointer font-semibold">Cobbled</div>
          <div className="py-2 px-2.5 bg-white rounded-[10px] border border-[rgba(0,0,0,0.06)] cursor-pointer font-semibold">Vintage</div>
        </div>
      </div>

      <div className="mb-[18px]">
        <h4 className="m-0 mb-2.5 text-[var(--brand-red)] text-xs tracking-wider">Tile Edges</h4>
        <div className="flex gap-2 items-center">
          <div className="w-[60px] h-9 bg-gradient-to-br from-[#eee] to-[#ddd] rounded-md flex items-center justify-center text-xs text-[#666]">Straight</div>
          <div className="w-[60px] h-9 bg-gradient-to-br from-[#eee] to-[#ddd] rounded-md flex items-center justify-center text-xs text-[#666]">Newcastle</div>
          <div className="w-[60px] h-9 bg-gradient-to-br from-[#eee] to-[#ddd] rounded-md flex items-center justify-center text-xs text-[#666]">Manchester</div>
          <div className="w-[60px] h-9 bg-gradient-to-br from-[#eee] to-[#ddd] rounded-md flex items-center justify-center text-xs text-[#666]">Ruffcut</div>
        </div>
      </div>

      <div className="mb-[18px]">
        <h4 className="m-0 mb-2.5 text-[var(--brand-red)] text-xs tracking-wider">Layout</h4>
        <div className="flex gap-2 flex-wrap">
          <div className="py-2 px-2.5 bg-white rounded-[10px] border border-[rgba(0,0,0,0.06)] cursor-pointer font-semibold">Straight</div>
          <div className="py-2 px-2.5 bg-white rounded-[10px] border border-[rgba(0,0,0,0.06)] cursor-pointer font-semibold">Cottage</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
