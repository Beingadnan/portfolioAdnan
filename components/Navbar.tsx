import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-[8%] py-6">
      <div className="flex items-center gap-2">
        <span className="text-[#0066FF]">&lt;/&gt;</span>
        <span className="text-xl">Developer X</span>
      </div>
      
      <div className="flex items-center gap-8">
        <Link href="/" className="text-white">Home</Link>
        <Link href="#about" className="text-white/80 hover:text-white transition-colors">About</Link>
        <Link href="#blog" className="text-white/80 hover:text-white transition-colors">Blog</Link>
        <Link href="#portfolio" className="text-white/80 hover:text-white transition-colors">Portfolio</Link>
        <Link href="#pages" className="text-white/80 hover:text-white transition-colors">Pages</Link>
        <Link href="#cart" className="text-white/80 hover:text-white transition-colors">Cart (0)</Link>
        <button className="ml-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;