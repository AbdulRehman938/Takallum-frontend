import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const navItems = ["Feature", "Pricing", "Contact", "FAQ"];
  const [hovered, setHovered] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // ✅ Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full flex justify-between items-center bg-white/30 backdrop-blur-md border-b border-white/20
                      h-14 px-4 
                      sm:h-14 sm:px-5
                      md:h-16 md:px-6
                      lg:h-16 lg:px-8
                      xl:h-20 xl:px-10
                      2xl:h-24 2xl:px-16">
      {/* Logo */}
      <div className="flex items-center h-full">
        <img src="/logo.png" alt="logo" className="h-8 w-auto object-contain
                                                  sm:h-8
                                                  md:h-10
                                                  lg:h-10
                                                  xl:h-12
                                                  2xl:h-14" />
      </div>

      {/* Desktop Navbar */}
      <nav
        className="hidden md:flex items-center h-full
                  md:gap-4 md:px-6
                  lg:gap-5 lg:px-10
                  xl:gap-6 xl:px-16
                  2xl:gap-8 2xl:px-20"
        onMouseLeave={() => setHovered(null)}
      >
        {navItems.map((item, idx) => (
          <div
            key={item}
            className="relative h-full flex items-center"
            onMouseEnter={() => setHovered(idx)}
          >
            <a
              href={`#${item.toLowerCase()}`}
              className="px-2 text-black py-1 font-semibold hover:text-secondaryDefault hover:scale-105 transition-all
                        text-sm text-gray-700
                        md:text-base
                        lg:text-lg
                        xl:text-lg
                        2xl:text-xl"
            >
              {item}
            </a>
            {hovered === idx && (
              <div className="absolute left-0 right-0 bottom-0 h-1 bg-primaryDefault transition-opacity duration-300 opacity-100" />
            )}
          </div>
        ))}
        <button
          className="ml-2 bg-secondaryDefault text-white rounded-xl hover:bg-secondary-700 transition
                    px-3 py-1.5 text-sm
                    md:ml-3 md:px-3 md:py-1.5 md:text-sm
                    lg:ml-4 lg:px-4 lg:py-2 lg:text-base
                    xl:ml-5 xl:px-5 xl:py-2.5 xl:text-lg
                    2xl:ml-6 2xl:px-6 2xl:py-3 2xl:text-xl"
          onMouseEnter={() => setHovered(null)}
        >
          Subscribe
        </button>
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center text-secondary-900">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-gray-800 p-1"
        >
          {mobileOpen ? <X size={24} className="sm:size-28" /> : <Menu size={24} className="sm:size-28" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileOpen(false)}
          />
          {/* Slide drawer */}
          <div className="fixed top-0 right-0 h-screen shadow-xl z-50 flex flex-col transition-transform duration-300 translate-x-0
                        w-[280px] p-4 bg-white/95 backdrop-blur-xl
                        sm:w-[320px] sm:p-5
                        md:max-w-xs md:p-6">
            {/* Close Button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="self-end mb-4 text-gray-800
                        sm:mb-5
                        md:mb-6"
            >
              <X size={24} className="sm:size-28" />
            </button>

            {/* Nav Links */}
            <div className="flex flex-col text-secondary-900 font-semibold
                          gap-4 text-base
                          sm:gap-5 sm:text-lg
                          md:gap-6 md:text-lg">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-800 hover:text-secondaryDefault transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-secondaryDefault text-white rounded-xl hover:bg-secondary-700 transition
                              mt-2 px-4 py-2
                              sm:mt-3
                              md:mt-4">
                Subscribe
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;