import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const navItems = ["Feature", "Pricing", "Contact", "FAQ"];
  const [hovered, setHovered] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Handle clicks outside the dropdown menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the menu if click is outside the menu and not on the toggle button
      if (mobileOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    };

    // Add event listener when the menu is open
    if (mobileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
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
          ref={buttonRef}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-gray-800 p-1"
        >
          {mobileOpen ? <X size={24} className="sm:size-28" /> : <Menu size={24} className="sm:size-28" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full right-0 w-[40%] min-w-[240px] z-40 shadow-lg bg-white/95 backdrop-blur-xl overflow-hidden rounded-bl-2xl border-l border-b border-gray-200"
          >
            {/* Nav Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="flex flex-col text-secondary-900 font-semibold w-full
                        p-4 gap-4 text-base
                        sm:p-5 sm:gap-5 sm:text-lg
                        md:p-6 md:gap-6 md:text-lg"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.2 }}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-800 hover:text-secondaryDefault transition border-b border-gray-200 pb-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.2 }}
                className="bg-secondaryDefault text-white rounded-xl hover:bg-secondary-700 transition
                          mt-2 px-4 py-2 self-start
                          sm:mt-3
                          md:mt-4"
                onClick={() => setMobileOpen(false)}
              >
                Subscribe
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;