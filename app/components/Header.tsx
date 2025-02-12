"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div
      className={`max-w-[1600px] mx-auto fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl backdrop-blur-md  transition-all duration-300 ${
        isScrolled ? "w-[85%] h-[60px] bg-[#393E46]/60" : "w-[90%] h-[132px] bg-[#393E46]/30"
      }`}
    >
      <div className="flex justify-between items-center h-full px-6 md:px-8">
        {/* Logo */}
        <div
          className={`font-bold italic transition-all duration-300 text-white ${
            isScrolled ? "text-[18px]" : "text-[24px]"
          }`}
        >
          nofilDev.
        </div>

        {/* Desktop Navigation */}
        <div
          className={`hidden md:flex items-center uppercase transition-all duration-300 ${
            isScrolled ? "gap-[40px] text-sm" : "gap-[80px] text-base"
          }`}
        >
          <Link className="text-white/80 tracking-wider hover:text-[#00adb5] hover:bg-black/10 p-2 rounded-lg duration-300 ease-in-out" href="#home">home</Link>
          <Link className="text-white/80 tracking-wider hover:text-[#00adb5] hover:bg-black/10 p-2 rounded-lg duration-300 ease-in-out" href="#about">about me</Link>
          <Link className="text-white/80 tracking-wider hover:text-[#00adb5] hover:bg-black/10 p-2 rounded-lg duration-300 ease-in-out" href="#contact">contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden flex flex-col items-center gap-4 py-4 bg-[#393E46] text-white/70 rounded-2xl mt-2 ring-black/40 ring-1`}>
          <Link className="text-white/80 tracking-wider hover:text-[#00adb5] hover:bg-black/10 p-2 rounded-lg duration-300 ease-in-out" href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link className="text-white/80 tracking-wider hover:text-[#00adb5] hover:bg-black/10 p-2 rounded-lg duration-300 ease-in-out" href="#about" onClick={() => setMenuOpen(false)}>
            About Me
          </Link>
          <Link className="text-white/80 tracking-wider hover:text-[#00adb5] hover:bg-black/10 p-2 rounded-lg duration-300 ease-in-out" href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
