import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHeart } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { TiTick } from 'react-icons/ti'

// Animation variants for parent container
const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      when: 'beforeChildren',
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.12,
      staggerDirection: -1,
      when: 'afterChildren',
    }
  }
};

// Animation variants for children
const childVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.7 } },
  exit: { opacity: 0, x: 60, transition: { type: "spring", duration: 0.5 } }
};

const Connect = () => {
  const [activeTab, setActiveTab] = useState("tutor")

  // Animation controls for top and bottom sections
  const topControls = useAnimation();
  const bottomControls = useAnimation();
  const [topRef, topInView] = useInView({ threshold: 0.2, triggerOnce: false });
  const [bottomRef, bottomInView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (topInView) topControls.start("visible");
    else topControls.start("exit");
  }, [topInView, topControls]);

  useEffect(() => {
    if (bottomInView) bottomControls.start("visible");
    else bottomControls.start("exit");
  }, [bottomInView, bottomControls]);

  return (
    <div className="w-full max-w-[1800px] mx-auto px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-6 sm:py-8 md:py-10">
      {/* --- Top Section --- */}
      <motion.div
        ref={topRef}
        initial="hidden"
        animate={topControls}
        variants={parentVariants}
        className="w-[95%] sm:w-[90%] md:w-[95%] mx-auto bg-white rounded-xl p-4 xs:p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 lg:gap-10 xl:gap-16"
      >
        {/* Right: text */}
        <motion.div
          variants={childVariants}
          className="w-full lg:w-[55%] order-1 lg:order-2 flex flex-col items-start gap-3 sm:gap-4 text-black self-center"
        >
          <motion.span variants={childVariants} className="inline-flex items-center gap-2 text-xs sm:text-sm bg-red-50 text-red-600 px-3 py-1 rounded-full">
            <FaHeart className="text-red-600" />
            Understand the Qur'an
          </motion.span>

          <motion.h2 variants={childVariants} className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            Connect with <span className="text-secondaryDefault">Sacred Texts</span>
          </motion.h2>

          <motion.p variants={childVariants} className="text-gray text-xs xs:text-sm sm:text-base md:text-base lg:text-lg w-full">
            Build your Arabic foundation through the Qur'an and Hadith translation to master grammar naturally
          </motion.p>

          <motion.div variants={childVariants} className="mt-2 xs:mt-3 sm:mt-4 flex flex-col gap-2 xs:gap-3 sm:gap-4 md:gap-5 w-full">
            <motion.div variants={childVariants}>
              <span className="inline-block bg-secondary-100 text-secondaryDefault px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs">Sacred Texts</span>
              <h4 className="font-semibold text-sm xs:text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl mt-2">Learn Arabic Through the Qur&apos;an & Hadith</h4>
              <p className="text-gray text-xs sm:text-sm">Translate real verses and sayings — right from Level 1. Build fluency while deepening your spiritual understanding.</p>
            </motion.div>
            <motion.div variants={childVariants}>
              <span className="inline-block bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs">Grammar Made Simple</span>
              <h4 className="font-semibold text-sm xs:text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl mt-2">Master Grammar, Naturally</h4>
              <p className="text-gray text-xs sm:text-sm">From verb conjugation to sentence formation — we blend structured grammar drills with fun, interactive learning.</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Left: image */}
        <motion.div
          variants={childVariants}
          className="w-full lg:w-[45%] order-2 lg:order-1 z-10 flex justify-center lg:justify-start items-center bg-gradient-to-t from-[#fefced] to-[#deede6] rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 relative overflow-hidden h-auto lg:h-full"
        >
          <div
            id="black-overlay"
            className="absolute inset-x-0 bottom-0 z-40 rounded-b-2xl pointer-events-none h-[100%] bg-gradient-to-b from-transparent to-[#fefced]"
          />
          <div className="w-full h-full bg-transparent rounded-3xl p-1 xs:p-2 sm:p-3 md:p-3 flex items-center justify-center">
            <img
              src="/App Screen (1).png"
              alt="mockup"
              className="relative z-10 h-auto max-h-[350px] xs:max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-full w-auto max-w-[70%] xs:max-w-[60%] sm:max-w-[50%] md:max-w-[45%] lg:max-w-[80%] xl:max-w-[70%] object-contain rounded-lg"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* --- Bottom Section --- */}
      <motion.div
        ref={bottomRef}
        initial="hidden"
        animate={bottomControls}
        variants={parentVariants}
        id="bottom"
        className="w-full mt-10 xs:mt-12 sm:mt-14 md:mt-16 lg:mt-20"
      >
        <motion.div variants={childVariants} className="max-w-5xl xl:max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10">
          <motion.h2 variants={childVariants} className="text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black">
            Smarter Than a Textbook, <br className="sm:block hidden" />{" "}
            <span className="text-secondaryDefault">Cheaper</span> Than a Tutor.
          </motion.h2>
          <motion.p variants={childVariants} className="text-center text-gray mt-2 xs:mt-3 sm:mt-4 max-w-xl sm:max-w-2xl mx-auto text-xs xs:text-sm sm:text-base md:text-lg">
            Get an AI-powered Arabic learning system that adapts to your pace, tracks progress, and teaches Qur'anic comprehension
          </motion.p>
        </motion.div>

        {/* ---- Desktop: 3-column comparison ---- */}
        <motion.div
          variants={childVariants}
          className="hidden md:flex relative mt-8 md:mt-10 lg:mt-12 xl:mt-16"
        >
          <div className="bg-gray/10 text-black rounded-2xl shadow-xl flex justify-between h-auto md:h-[32rem] lg:h-[36rem] xl:h-[38rem] items-center w-full px-3 md:px-4 lg:px-6 xl:px-8 py-4 md:py-6 lg:py-8">
            {/* Features */}
            <motion.div variants={childVariants} className="h-full w-[35%] md:w-[33%] py-4 md:py-6 pl-2 md:pl-4 lg:pl-6">
              <h1 className="font-bold text-lg md:text-xl lg:text-2xl">Feature</h1>
              <ul className="flex flex-col gap-0 mt-6 md:mt-8 lg:mt-10">
                <li className="font-semibold text-black text-sm md:text-base lg:text-lg border-b-2 w-full border-b-gray/30 py-4 md:py-5 lg:py-6">Cost</li>
                <li className="font-semibold text-black text-sm md:text-base lg:text-lg border-b-2 w-full border-b-gray/30 py-4 md:py-5 lg:py-6">Adapts to you in real-time</li>
                <li className="font-semibold text-black text-sm md:text-base lg:text-lg border-b-2 w-full border-b-gray/30 py-4 md:py-5 lg:py-6">24/7 Access</li>
                <li className="font-semibold text-black text-sm md:text-base lg:text-lg border-b-2 w-full border-b-gray/30 py-4 md:py-5 lg:py-6">Personalised Flashcards</li>
                <li className="font-semibold text-black text-sm md:text-base lg:text-lg w-full py-4 md:py-5 lg:py-6">Qur'anic Focus</li>
              </ul>
            </motion.div>

            {/* Private Tutor */}
            <motion.div variants={childVariants} className="h-full w-[35%] md:w-[37%] py-4 md:py-6">
              <h1 className="font-bold text-lg md:text-xl lg:text-2xl pl-2 md:pl-3 lg:pl-4">
                Private Tutor <br />{" "}
                <span className="text-sm md:text-base font-bold text-gray/70">Traditional Approach</span>
              </h1>
              <ul className="flex flex-col gap-0 md:mt-1 lg:mt-2">
                <li className="font-semibold text-black/50 text-sm md:text-base lg:text-lg border-b-2 border-b-gray/30 py-4 md:py-5 lg:py-6 pl-2 md:pl-3 lg:pl-4 flex items-center">
                  <RxCross2 className="text-red-500 text-lg md:text-xl lg:text-2xl p-1 rounded-full bg-red-200 mr-2" /> $10+<span>/hour</span>
                </li>
                <li className="font-semibold text-black/50 text-sm md:text-base lg:text-lg border-b-2 border-b-gray/30 py-4 md:py-5 lg:py-6 pl-2 md:pl-3 lg:pl-4 flex items-center">
                  <RxCross2 className="text-red-500 text-lg md:text-xl lg:text-2xl p-1 rounded-full bg-red-200 mr-2" /> No
                </li>
                <li className="font-semibold text-black/50 text-sm md:text-base lg:text-lg border-b-2 border-b-gray/30 py-4 md:py-5 lg:py-6 pl-2 md:pl-3 lg:pl-4 flex items-center">
                  <RxCross2 className="text-red-500 text-lg md:text-xl lg:text-2xl p-1 rounded-full bg-red-200 mr-2" /> Limited
                </li>
                <li className="font-semibold text-black/50 text-sm md:text-base lg:text-lg border-b-2 border-b-gray/30 py-4 md:py-5 lg:py-6 pl-2 md:pl-3 lg:pl-4 flex items-center">
                  <RxCross2 className="text-red-500 text-lg md:text-xl lg:text-2xl p-1 rounded-full bg-red-200 mr-2" /> Limited
                </li>
                <li className="font-semibold text-black/50 text-sm md:text-base lg:text-lg w-full py-4 md:py-5 lg:py-6 pl-2 md:pl-3 lg:pl-4 flex items-center">
                  <RxCross2 className="text-yellow-500 text-lg md:text-xl lg:text-2xl p-1 rounded-full bg-yellow-100 mr-2" /> Rarely
                </li>
              </ul>
            </motion.div>

            {/* Smart Learning */}
            <motion.div variants={childVariants} className="h-[105%] drop-shadow-xl w-[30%] py-4 md:py-6 lg:py-8 bg-white rounded-3xl">
              <div className="font-bold text-base md:text-lg lg:text-xl pl-2 md:pl-3 lg:pl-4 flex items-center gap-1 md:gap-2">
                <img src="public/logo.png" alt="logo" className="w-6 h-6 md:w-7 md:h-7" />
                <h1>Smart Learning System</h1>
              </div>
              <ul className="flex flex-col gap-0 mt-6 md:mt-8 lg:mt-10 pr-2 md:pr-3 lg:pr-4">
                <li className="font-semibold text-black/50 text-sm md:text-base lg:text-lg w-full py-4 md:py-5 lg:py-6 pl-2 md:pl-3 lg:pl-4 flex items-center">
                  <TiTick className="text-secondaryDefault text-lg md:text-xl lg:text-2xl p-1 rounded-full bg-secondary-200 mr-2" /> $6.99<span>/month</span>
                </li>
                <li className="font-semibold text-black/50 text-sm md:text-base lg:text-lg w-full py-4 md:py-5 lg:py-6 pl-2 md:pl-3 lg:pl-4 flex items-center">
                  <TiTick className="text-secondaryDefault text-lg md:text-xl lg:text-2xl p-1 rounded-full bg-secondary-200 mr-2" /> Yes
                </li>
                <li className="font-semibold text-black/50 text-sm md:text-base lg:text-lg w-full py-4 md:py-5 lg:py-6 pl-2 md:pl-3 lg:pl-4 flex items-center">
                  <TiTick className="text-secondaryDefault text-lg md:text-xl lg:text-2xl p-1 rounded-full bg-secondary-200 mr-2" /> Anytime, Anywhere
                </li>
                <li className="font-semibold text-black/50 text-sm md:text-base lg:text-lg w-full py-4 md:py-5 lg:py-6 pl-2 md:pl-3 lg:pl-4 flex items-center">
                  <TiTick className="text-secondaryDefault text-lg md:text-xl lg:text-2xl p-1 rounded-full bg-secondary-200 mr-2" /> Personalized
                </li>
                <li className="font-semibold text-black/50 text-sm md:text-base lg:text-lg w-full py-4 md:py-5 lg:py-6 pl-2 md:pl-3 lg:pl-4 flex items-center">
                  <TiTick className="text-secondaryDefault text-lg md:text-xl lg:text-2xl p-1 rounded-full bg-secondary-200 mr-2" /> Built from Day One
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* ---- Mobile: Tabs ---- */}
        <motion.div
          variants={childVariants}
          className="md:hidden mt-8 xs:mt-10 px-3"
        >
          {/* Tabs */}
          <div className="flex justify-center gap-4 xs:gap-6 border-b border-gray-300 pb-2">
            <button
              onClick={() => setActiveTab("tutor")}
              className={`pb-2 text-xs xs:text-sm text-black font-semibold ${activeTab === "tutor" ? "text-secondaryDefault border-b-2 border-secondaryDefault" : "text-gray-500"}`}
            >
              Private Tutor
            </button>
            <button
              onClick={() => setActiveTab("smart")}
              className={`pb-2 text-xs xs:text-sm text-black font-semibold flex items-center gap-1 ${activeTab === "smart" ? "text-secondaryDefault border-b-2 border-secondaryDefault" : "text-gray-500"}`}
            >
              <img src="public/logo.png" alt="logo" className="w-4 h-4 xs:w-5 xs:h-5" />
              Smart Learning
            </button>
          </div>

          {/* Panel */}
          <div className="mt-4 xs:mt-6 bg-gray/10 rounded-2xl shadow-md p-3 xs:p-5 flex">
            {/* Features */}
            <div className="w-1/2 text-black">
              <h1 className="font-bold text-sm xs:text-base sm:text-lg">Features</h1>
              <ul className="flex flex-col gap-3 xs:gap-4 mt-3 xs:mt-5 text-xs xs:text-sm">
                <li className="border-b border-b-gray/20 pb-2">Cost</li>
                <li className="border-b border-b-gray/20 pb-2">Adapts in real-time</li>
                <li className="border-b border-b-gray/20 pb-2">24/7 Access</li>
                <li className="border-b border-b-gray/20 pb-2">Flashcards</li>
                <li>Qur'anic Focus</li>
              </ul>
            </div>

            {/* Active column */}
            <div className="w-1/2">
              {activeTab === "tutor" ? (
                <>
                  <h1 className="font-bold text-sm xs:text-base sm:text-lg text-gray-700">Private Tutor</h1>
                  <ul className="flex flex-col gap-3 xs:gap-4 mt-3 xs:mt-5 text-xs xs:text-sm text-black">
                    <li className="flex items-center border-b border-b-gray/20 pb-2">
                      <RxCross2 className="text-red-500 text-base xs:text-lg p-0.5 rounded-full bg-red-100 mr-1.5 xs:mr-2" /> $10+<span className="text-[10px] xs:text-xs">/hr</span>
                    </li>
                    <li className="flex items-center border-b border-b-gray/20 pb-2">
                      <RxCross2 className="text-red-500 text-base xs:text-lg p-0.5 rounded-full bg-red-100 mr-1.5 xs:mr-2" /> No
                    </li>
                    <li className="flex items-center border-b border-b-gray/20 pb-2">
                      <RxCross2 className="text-red-500 text-base xs:text-lg p-0.5 rounded-full bg-red-100 mr-1.5 xs:mr-2" /> Limited
                    </li>
                    <li className="flex items-center border-b border-b-gray/20 pb-2">
                      <RxCross2 className="text-red-500 text-base xs:text-lg p-0.5 rounded-full bg-red-100 mr-1.5 xs:mr-2" /> Limited
                    </li>
                    <li className="flex items-center">
                      <RxCross2 className="text-yellow-500 text-base xs:text-lg p-0.5 rounded-full bg-yellow-100 mr-1.5 xs:mr-2" /> Rarely
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <h1 className="font-bold text-sm xs:text-base sm:text-lg flex items-center gap-1">
                    <img src="public/logo.png" alt="logo" className="w-4 h-4 xs:w-5 xs:h-5" />
                    Smart Learning
                  </h1>
                  <ul className="flex flex-col gap-3 xs:gap-4 mt-3 xs:mt-5 text-xs xs:text-sm text-black">
                    <li className="flex items-center border-b border-b-gray/20 pb-2">
                      <TiTick className="text-secondaryDefault text-base xs:text-lg p-0.5 rounded-full bg-secondary-200 mr-1.5 xs:mr-2" /> $6.99<span className="text-[10px] xs:text-xs">/mo</span>
                    </li>
                    <li className="flex items-center border-b border-b-gray/20 pb-2">
                      <TiTick className="text-secondaryDefault text-base xs:text-lg p-0.5 rounded-full bg-secondary-200 mr-1.5 xs:mr-2" /> Yes
                    </li>
                    <li className="flex items-center border-b border-b-gray/20 pb-2">
                      <TiTick className="text-secondaryDefault text-base xs:text-lg p-0.5 rounded-full bg-secondary-200 mr-1.5 xs:mr-2" /> Anytime
                    </li>
                    <li className="flex items-center border-b border-b-gray/20 pb-2">
                      <TiTick className="text-secondaryDefault text-base xs:text-lg p-0.5 rounded-full bg-secondary-200 mr-1.5 xs:mr-2" /> Personalized
                    </li>
                    <li className="flex items-center">
                      <TiTick className="text-secondaryDefault text-base xs:text-lg p-0.5 rounded-full bg-secondary-200 mr-1.5 xs:mr-2" /> Built in
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Connect