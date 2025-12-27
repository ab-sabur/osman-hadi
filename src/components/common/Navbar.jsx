"use client";
import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "জীবনী", href: "/bio" },
    { name: "ছবি", href: "/gallery" },
    { name: "ভিডিও", href: "/videos" },
    { name: "উক্তি", href: "/quotes" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-in-out ${
          scrolled
            ? "bg-black/80 backdrop-blur-2xl py-3 border-b border-white/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          <Link
            href="/"
            className="group flex items-center gap-3 relative z-[250]"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              width={45}
              height={45}
              className="object-cover rounded-sm"
              src="/static/hadi.jpg"
            />
            <div>
              <h1 className="text-lg text-white font-black tracking-tighter leading-none">
                OSMAN HADI
              </h1>
              <p className="text-[10px] text-red-500 font-bold uppercase tracking-[0.2em]">
                Legacy Archive
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-black uppercase tracking-widest transition-all duration-300 relative group ${
                  pathname === link.href
                    ? "text-red-500"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-red-600 transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6 relative z-[250]">
            <Link
              href="/tribute"
              className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-red-700 hover:text-white transition-all"
            >
              শ্রদ্ধাঞ্জলি <ArrowRight size={14} />
            </Link>

            <button
              className="text-white p-2 hover:bg-white/10 rounded-full transition-colors lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* FULLSCREEN MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[200] bg-[#050000] transition-all duration-700 ease-[cubic-bezier(0.9,0,0.1,1)] ${
          mobileMenuOpen
            ? "translate-y-0 pointer-events-auto opacity-100"
            : "-translate-y-full pointer-events-none opacity-0"
        }`}
      >
        {/* TOP HEADER INSIDE MENU */}
        <div className="absolute top-0 w-full p-6 flex justify-between items-center lg:hidden">
          <div className="w-10 h-10 invisible" /> {/* Spacer */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-red-700/20 transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-red-900/5 blur-[120px] rounded-full" />

        <div className="h-full flex flex-col justify-center px-10">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  transitionDelay: mobileMenuOpen
                    ? `${(index + 1) * 100}ms`
                    : "0ms",
                  transform: mobileMenuOpen
                    ? "translateX(0)"
                    : "translateX(-20px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
                className="text-lg text-center font-black tracking-tighter uppercase transition-all duration-500 hover:text-red-700 text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
