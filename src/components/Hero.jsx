import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Variants for enter/exit directions
const variantsArr = [
  { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -60 } },
  { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 60 } },
  { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 60 } },
  { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -60 } },
];

const thresholdVal = 0.6;

const Hero = () => {
  // (Removed Lenis smooth scrolling)

  // Utility hook for controlling visibility with inView
  const useAnimatedControl = () => {
    const [ref, inView] = useInView({ threshold: thresholdVal, triggerOnce: false });
    const controls = useAnimation();
    useEffect(() => {
      if (inView) controls.start("visible");
      else controls.start("exit");
    }, [inView, controls]);
    return [ref, controls];
  };

  const [refH1, controlsH1] = useAnimatedControl();
  const [refP1, controlsP1] = useAnimatedControl();
  const [refBtn, controlsBtn] = useAnimatedControl();
  const [refP2, controlsP2] = useAnimatedControl();

  // Additional subtle parallax on scroll for the whole content block
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div
      id="hero"
      ref={heroRef}
      className="
        relative bg-gradient-to-t from-primary-200 to-white w-screen
        flex justify-center items-center overflow-hidden
        pt-16 md:pt-20
        min-h-[22rem] xs:min-h-[28rem] sm:min-h-[32rem] md:min-h-[45rem] lg:min-h-[50rem]
      "
    >
      {/* Circle at top */}
      <div
        id="circle"
        className="
          absolute left-[70%] sm:left-[75%] md:left-[80%] top-24 -translate-x-1/2
          bg-yellow-100 blur-3xl rounded-full
          w-[60vw] h-[60vw] sm:w-[50vw] sm:h-[50vw] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw] z-10
        "
      ></div>

      {/* Blurred overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-primaryDefault/40 backdrop-blur-2xl z-20"></div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="
          relative z-30 w-[95%] xs:w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]
          flex flex-col gap-3 sm:gap-4 md:gap-5 items-center text-center
          px-3 sm:px-4 md:px-6
        "
      >
        <motion.h1
          ref={refH1}
          initial="hidden"
          animate={controlsH1}
          variants={variantsArr[0]}
          transition={{ type: "spring", duration: 1.2, bounce: 0.2 }}
          className="text-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
        >
          <span className="text-[#ECAC44]">The Future</span> of{" "}
          <span className="text-[#35605A]">
            Arabic <br className="hidden xs:block" /> Learning
          </span>{" "}
          is Here
        </motion.h1>

        <motion.p
          ref={refP1}
          initial="hidden"
          animate={controlsP1}
          variants={variantsArr[1]}
          transition={{ type: "spring", duration: 1.2, bounce: 0.2 }}
          className="text-gray text-xs xs:text-sm sm:text-base md:text-lg mt-1 sm:mt-2"
        >
          Designed for busy people: AI-driven, accessible, and personalized.
        </motion.p>

        <motion.button
          ref={refBtn}
          initial="hidden"
          animate={controlsBtn}
          variants={variantsArr[2]}
          transition={{ type: "spring", duration: 1.2, bounce: 0.2 }}
          className="
            relative group overflow-hidden text-white bg-secondaryDefault
            py-2 px-4 xs:py-2.5 xs:px-5 sm:py-3 sm:px-6 lg:py-4 lg:px-8
            mt-2 sm:mt-3 md:mt-4 rounded-3xl
            transition-all duration-200 ease-linear text-xs xs:text-sm sm:text-base lg:text-lg
          "
        >
          <span className="text-white font-bold relative z-10 flex items-center gap-1 xs:gap-1.5 sm:gap-2 group-hover:scale-105 sm:group-hover:scale-105 md:group-hover:scale-105 transition-all duration-200">
            Join the Beta - <span className="line-through text-gray/90">$129.99</span>
            <span className="font-bold text-white">$64.99</span>
          </span>
        
        </motion.button>

        <motion.p
          ref={refP2}
          initial="hidden"
          animate={controlsP2}
          variants={variantsArr[3]}
          transition={{ type: "spring", duration: 1.2, bounce: 0.2 }}
          className="text-gray text-[10px] xs:text-xs sm:text-sm md:text-base mt-1 sm:mt-2"
        >
          (⏰ 7-day free trial) • (✅ Money-back guarantee)
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;
