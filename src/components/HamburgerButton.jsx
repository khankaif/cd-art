import React from 'react';

const HamburgerButton = ({ isOpen, onClick, color = 'light' }) => {
  if (isOpen) return null;

  const lineColors = color === 'dark' ? 'bg-[#0A0A0A]' : 'bg-white';
  const shadowClass = color === 'dark' ? 'drop-shadow-[0_1px_1px_rgba(255,255,255,0.1)]' : 'drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.4)]';

  return (
    <button
      onClick={onClick}
      className={`fixed top-6 left-6 sm:top-8 sm:left-8 md:left-12 z-40 flex flex-col gap-2.5 justify-center items-start group pointer-events-auto cursor-pointer p-5 -m-5 focus:outline-none transition-transform active:scale-95 duration-200 ${shadowClass}`}
      aria-label="Open Menu"
    >
      <span className={`w-8 md:w-8 h-[2px] ${lineColors} transition-all duration-300 ease-out group-hover:w-12 md:group-hover:w-14`} />
      <span className={`w-12 md:w-12 h-[2px] ${lineColors} transition-all duration-300 ease-out group-hover:w-8 md:group-hover:w-10`} />
    </button>
  );
};

export default HamburgerButton;
