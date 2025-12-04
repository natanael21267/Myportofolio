"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll untuk memberi efek blur & border
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup menu ketika klik di luar
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("scroll", close);
    return () => window.removeEventListener("scroll", close);
  }, [open]);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#Skills", label: "Skills" },
    { href: "#Journey", label: "Journey" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${isScrolled ? "bg-black/30 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <a href="#home" className="text-xl font-bold text-indigo-300">
          WN.
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-slate-300 text-sm">
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="hover:text-indigo-300 transition cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* BURGER BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-200 focus:outline-none"
        >
          {open ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* MOBILE MENU (ANIMATED) */}
      <div
        className={`md:hidden absolute w-full bg-black/40 backdrop-blur-xl border-b border-white/10 
                    transition-all duration-300 overflow-hidden
                    ${open ? "max-h-96 py-4" : "max-h-0"} `}
      >
        <div className="flex flex-col items-center gap-5 text-slate-200 text-sm">
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={() => setOpen(false)} // auto close
              className="hover:text-indigo-300 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
