import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="h-[72px] flex items-center justify-between px-8 bg-white shadow-[0_2px_6px_rgba(20,20,20,0.04)] sticky top-0 z-10">
      <div className="logo flex items-center gap-3">
        <div className="w-9 h-9 rounded-md bg-[var(--brand-red)] flex items-center justify-center text-white font-bold">B</div>
        <div>
          <div className="font-extrabold">Bartile</div>
          <div className="text-xs text-[var(--muted)]">Your last roof, first.</div>
        </div>
      </div>
      <div className="font-semibold text-[#111]">3D Tile Configurator</div>
      <div className="flex gap-3 items-center">
        <button className="py-2.5 px-3.5 rounded-[9px] border border-transparent cursor-pointer font-semibold bg-[var(--brand-red)] text-white">Get a Quote</button>
        <button className="py-2.5 px-3.5 rounded-[9px] border border-[var(--brand-red)] cursor-pointer font-semibold bg-white text-[var(--brand-red)]">Find a Dealer</button>
      </div>
    </header>
  );
};

export default Header;
