'use client';

import Image from 'next/image';

const Navbar = () => {
  return (
    <div className=" bg-[#122733]
    ">
    <header className="flex items-center justify-between px-6 md:px-12 h-16">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="ChatApp" width={100} height={100} />
       
      </div>

      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-lg border border-slate-600 text-white hover:bg-slate-800 transition">
          Login
        </button>
        <button className="px-4 py-2 rounded-lg bg-sky-500 text-black font-semibold hover:bg-sky-400 transition">
          Sign Up
        </button>
      </div>
    </header>
    </div>
  );
};

export default Navbar;
