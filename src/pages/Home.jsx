import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // 👈 detects enter/leave viewport
import Header from "../components/Header";
import { FaArrowRight } from "react-icons/fa";
import Mockup from "../components/Mockup";
import Activity from "../components/Activity";
import Connect from "../components/Connect";
import Claim from "../components/Claim";
import Footer from "../components/Footer";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3, // 30% of section visible
    triggerOnce: false, // 👈 allows forward & backward
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // 👈 roll back when leaving
    }
  }, [controls, inView]);

  return (
    <div className="bg-white text-white w-full min-h-screen flex flex-col gap-y-0 justify-center items-center overflow-x-hidden">
      <Header />

      <div className="flex flex-col gap-y-0">
        <motion.div
          ref={ref}
          id="hero"
          className="relative bg-gradient-to-t from-primary-200 to-white w-screen min-h-[50rem] flex justify-center items-center overflow-hidden"
          initial="hidden"
          animate={controls}
          variants={fadeUp}
        >
          {/* Circle at top */}
          <div
            id="circle"
            className="absolute left-[80%] top-20 -translate-x-1/2 bg-yellow-100 blur-3xl rounded-full w-[40vw] h-[40vw] md:w-[30vw] md:h-[30vw] z-10"
          ></div>

          {/* Blurred overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-primaryDefault/40 backdrop-blur-2xl z-20"></div>

          {/* Content */}
          <motion.div
            id="content"
            className="relative z-30 w-[100%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] flex flex-col gap-5 items-center text-center px-4"
            variants={fadeUp}
          >
            <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-[#ECAC44]">The Future</span> of{" "}
              <span className="text-[#35605A]">
                Arabic <br className="hidden sm:block" /> Learning
              </span>{" "}
              is Here
            </h1>

            <p className="text-gray text-sm sm:text-base md:text-lg">
              Designed for busy people: AI-driven, accessible, and personalized.
            </p>

            {/* CTA Button */}
            <button className="relative group overflow-hidden text-white bg-secondaryDefault py-3 px-6 lg:py-4 lg:px-8 rounded-3xl transition-all duration-200 ease-linear text-sm sm:text-base lg:text-lg">
              <span className="text-white font-bold relative z-10 transition-all duration-200 ease-linear group-hover:ml-8 flex items-center gap-2">
                Join the Beta -{" "}
                <span className="line-through text-gray/90">$129.99</span>
                <span className="font-bold text-white">$64.99</span>
              </span>
              {/* Arrow */}
              <span className="absolute top-0 left-0 h-full w-10 bg-primaryDefault rounded-r-full flex items-center justify-center transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-linear origin-left">
                <FaArrowRight className="text-white text-lg lg:text-xl" />
              </span>
            </button>

            <p className="text-gray text-xs sm:text-sm md:text-base">
              (⏰ 7-day free trial) • (✅ Money-back guarantee)
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ✅ Keep attached components untouched for now */}
      <Mockup />
      <Activity />
      <Connect />
      <Claim />
      <Footer />
    </div>
  );
};

export default Home;
