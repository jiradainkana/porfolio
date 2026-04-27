import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/80 to-[#020617]/90 backdrop-blur-xl border-b border-green-500/20"></div>

      <div className="relative max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-white">

        {/* LOGO */}
        <h1 className="font-bold text-xl tracking-wide">
          <span className="text-white">Jira</span>
          <span className="text-green-500">dain</span>
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">

          <li>
            <a href="#about" className="relative hover:text-green-400 transition">
              A propos
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 hover:w-full"></span>
            </a>
          </li>

          <li>
            <a href="#services" className="relative hover:text-green-400 transition">
              Services
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 hover:w-full"></span>
            </a>
          </li>

          <li>
            <a href="#projects" className="relative hover:text-green-400 transition">
              Mes réalisations
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 hover:w-full"></span>
            </a>
          </li>

          <li>
            <a href="#contact" className="relative hover:text-green-400 transition">
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 hover:w-full"></span>
            </a>
          </li>

        </ul>

        {/* CTA desktop */}
        <a
          href="#contact"
          className="hidden md:block bg-green-500/10 border border-green-500 text-green-400 px-5 py-2 rounded-lg hover:bg-green-500 hover:text-black transition"
        >
          Contactez-moi
        </a>

        {/* HAMBURGER BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-green-500"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* 📱 MOBILE MENU */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#020617] border-t border-green-500/20 px-6 py-6">

          <ul className="flex flex-col gap-6 text-gray-300 font-medium">

            <li><a href="#about" onClick={() => setOpen(false)} className="hover:text-green-400">A propos</a></li>
            <li><a href="#services" onClick={() => setOpen(false)} className="hover:text-green-400">Services</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)} className="hover:text-green-400">Mes réalisations</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)} className="hover:text-green-400">Contact</a></li>

          </ul>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-block w-full text-center bg-green-500 text-black px-5 py-3 rounded-lg font-medium hover:bg-green-400 transition"
          >
            Contactez-moi
          </a>

        </div>
      )}

    </nav>
  );
};

export default Navbar;