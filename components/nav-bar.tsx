"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Arogya Aura"
            width={100}
            height={100}
            className="w-8 h-8 rounded-xl"
          />

          <span className="text-(--brand-primary) text-2xl font-bold tracking-tight">
            Arogya Aura
          </span>
        </Link>

        {/* CENTER: LINKS (Desktop) */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link href="#" className="hover:text-black transition">
            Product
          </Link>
          <Link href="#" className="hover:text-black transition">
            How it Works
          </Link>
          <Link href="#" className="hover:text-black transition">
            Features
          </Link>
        </div>

        {/* RIGHT: BUTTON (Desktop) */}
        <div className="hidden md:flex">
          <Link href="/buy">
            <Button className="bg-(--brand-primary) text-white p-5 rounded-xl hover:opacity-90 transition-all">Buy Now</Button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 bg-white border-t border-gray-200 flex flex-col gap-4 text-sm font-medium text-gray-700">
          <Link href="#" onClick={() => setOpen(false)}>
            Product
          </Link>
          <Link href="#" onClick={() => setOpen(false)}>
            How it Works
          </Link>
          <Link href="#" onClick={() => setOpen(false)}>
            Features
          </Link>

        <div className="hidden md:flex">
          <Link href="/buy">
            <Button onClick={()=>setOpen(false)} className="bg-(--brand-primary) text-white px-6 py-2 p-5-90 transition-all">Buy Now</Button>
          </Link>
        </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
