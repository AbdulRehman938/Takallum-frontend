import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const logoVariants = {
  top: { x: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
  scrolled: { x: -40, transition: { type: "spring", stiffness: 80, damping: 20 } }
};

const navVariants = {
  top: { x: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
  scrolled: { x: 100, transition: { type: "spring", stiffness: 80, damping: 20 } }
};

const Header = () => {
  const navItems = ["Feature", "Pricing", "Contact", "FAQ"];
  const [hovered, setHovered] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 768px)").matches
      : true
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    mq.addEventListener ? mq.addEventListener("change", update) : mq.addListener(update);
    update();
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", update) : mq.removeListener(update);
    };
  }, []);

  const headerVariants = {
    top: {
      backgroundColor: "rgba(255,255,255,0.3)",
      backdropFilter: "blur(12px)",
      height: "4rem",
      transition: { type: "spring", stiffness: 200, damping: 28 },
    },
    scrolled: {
      backgroundColor: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(16px)",
      height: "4.5rem",
      transition: { type: "spring", stiffness: 180, damping: 24, delay: 0.05 },
    },
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const BlobButton = ({ label }) => (
    <button className="relative group px-6 py-2 font-bold uppercase text-secondary-900 rounded-full overflow-hidden transition-colors duration-500">
      <span className="absolute inset-0 rounded-full "></span>
      <span className="absolute inset-0 bg-secondary-200 rounded-full transition-all duration-300 ease-out group-hover:inset-[0px]"></span>
      {/* Blobs */}
      {[...Array(4)].map((_, i) => (
        <span
          key={i}
          className={`absolute top-0 h-full w-1/2 bg-secondary-900 rounded-full blur-sm transform translate-y-[150%] scale-125 transition-transform duration-500 ease-out group-hover:translate-y-0 group-hover:scale-110`}
          style={{ left: `${i * 30}%`, transitionDelay: `${i * 100}ms` }}
        />
      ))}
      <span className="relative z-10 group-hover:text-white transition-colors duration-500">
        {label}
      </span>
    </button>
  );

  return (
    <motion.header
      initial="top"
      animate={scrolled ? "scrolled" : "top"}
      variants={headerVariants}
      className="fixed top-0 left-0 z-50 w-full flex items-center px-6 border-b border-white/20"
    >
      <motion.div
        className={`w-full flex items-center ${scrolled && isDesktop ? "justify-center gap-4" : "justify-between"}`}
        layout
      >
        {/* Logo */}
        <motion.div
          layout
          variants={logoVariants}
          animate={isDesktop && scrolled ? "scrolled" : "top"}
          className="flex items-center h-full"
        >
          <img
            src="/logo.png"
            alt="logo"
            className="h-10 w-auto object-contain transition-transform duration-300"
          />
        </motion.div>

        {/* Desktop Navbar */}
        <motion.nav
          layout
          variants={navVariants}
          animate={isDesktop && scrolled ? "scrolled" : "top"}
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
                className="px-2 py-1 text-lg text-gray-700 text-primary-900 font-semibold hover:text-secondaryDefault hover:scale-105 transition-all"
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
                    className="absolute left-0 right-0 bottom-0 h-1 bg-primary-900"
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
          <BlobButton label="Subscribe" />
        </motion.nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center text-secondary-900">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-800">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="fixed top-0 right-0 h-screen w-full max-w-xs bg-white/95 backdrop-blur-xl shadow-xl z-50 flex flex-col p-6"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="self-end mb-6 text-gray-800 text-secondary-900"
              >
                <X size={28} />
              </button>

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
                <BlobButton label="Subscribe" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
