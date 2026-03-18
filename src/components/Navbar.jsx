import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <div className="max-w-[640px] w-full px-6 py-8 flex justify-between items-center bg-black/50 backdrop-blur-md">
        <a href="/" className="text-zinc-100 font-medium text-sm tracking-tight">Brandon Wang</a>
        <div className="flex gap-6">
          <a href="#work" className="text-zinc-500 hover:text-zinc-100 text-sm transition-colors">Work</a>
          <a href="#chat" className="text-zinc-500 hover:text-zinc-100 text-sm transition-colors">Chat</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;