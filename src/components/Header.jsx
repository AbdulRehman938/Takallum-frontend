import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const navItems = ["Feature", "Pricing", "Contact", "FAQ"];
  const [hovered, setHovered] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // ✅ Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-16 flex justify-between items-center px-6 bg-white/30 backdrop-blur-md border-b border-white/20">
      {/* Logo */}
      <div className="flex items-center h-full">
        <img src="/logo.png" alt="logo" className="h-10 w-auto object-contain" />
      </div>

      {/* Desktop Navbar */}
      <nav
        className="hidden md:flex items-center gap-6 h-full"
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
              className="px-2 py-1 text-lg text-secondary-900 text-gray-700 font-semibold hover:text-secondaryDefault hover:scale-105 transition-all"
            >
              {item}
            </a>
            <AnimatePresence>
              {hovered === idx && (
                <motion.div
                  layoutId="slidebar"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="absolute left-0 right-0 bottom-0 h-1 bg-primaryDefault"
                />
              )}
            </AnimatePresence>
          </div>
        ))}
        <button
          className="ml-4 bg-secondaryDefault text-white px-4 py-2 rounded-xl hover:bg-secondary-700 transition"
          onMouseEnter={() => setHovered(null)}
        >
          Subscribe
        </button>
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center text-secondary-900">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-gray-800"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileOpen(false)}
            />
            {/* Slide drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="fixed top-0 right-0 h-screen w-full max-w-xs bg-white/95 backdrop-blur-xl shadow-xl z-50 flex flex-col p-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setMobileOpen(false)}
                className="self-end mb-6 text-gray-800 text-secondary-900"
              >
                <X size={28} />
              </button>

              {/* Nav Links */}
              <div className="flex flex-col text-secondary-900 gap-6 text-lg font-semibold">
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
                <button className="bg-secondaryDefault text-white px-4 py-2 rounded-xl hover:bg-secondary-700 transition">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
