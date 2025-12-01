import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-7 px-8 py-[18px] bg-[#1e1e1e] text-white rounded-[var(--radius)] max-w-[1280px] mx-auto">
      <div className="flex justify-between max-w-[1280px] mx-auto">
        <div>Warranty | Download Brochure | Spec Sheets</div>
        <div>Contact Us</div>
      </div>
    </footer>
  );
};

export default Footer;
