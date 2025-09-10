import React, { useState } from "react"
import { FaHeart } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx"
import { TiTick } from "react-icons/ti"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

// ✅ Reusable animation wrapper
const AnimatedBlock = ({ children, direction = "up", delay = 0 }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.15 })

  React.useEffect(() => {
    if (inView) controls.start("visible")
    else controls.start("hidden")
  }, [inView, controls])

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  )
}

const Connect = () => {
  const [activeTab, setActiveTab] = useState("tutor")

  return (
    <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* --- Top Section --- */}
      <AnimatedBlock direction="up">
        <div className="w-full bg-white rounded-xl p-6 lg:w-[100rem] lg:p-12 flex flex-col lg:flex-row items-start gap-8 lg:gap-[20rem]">
          {/* Right: text */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-start gap-4 text-black">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm bg-red-50 text-red-600 px-3 py-1 rounded-full">
              <FaHeart className="text-red-600" />
              Understand the Qur&apos;an
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Connect with <span className="text-secondaryDefault">Sacred Texts</span>
            </h2>

            <p className="text-gray text-sm sm:text-base md:text-lg max-w-[640px]">
              Build your Arabic foundation through the Qur&apos;an and Hadith translation to master grammar naturally
            </p>

            <div className="mt-3 sm:mt-4 flex flex-col gap-4 max-w-[640px]">
              <div>
                <span className="inline-block bg-secondary-100 text-secondaryDefault px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm">
                  Sacred Texts
                </span>
                <h4 className="font-semibold text-base sm:text-lg md:text-2xl mt-2">
                  Learn Arabic Through the Qur&apos;an &amp; Hadith
                </h4>
                <p className="text-gray text-xs sm:text-sm md:text-base">
                  Translate real verses and sayings — right from Level 1. Build fluency while deepening your spiritual understanding.
                </p>
              </div>

              <div>
                <span className="inline-block bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm">
                  Grammar Made Simple
                </span>
                <h4 className="font-semibold text-base sm:text-lg md:text-2xl mt-2">
                  Master Grammar, Naturally
                </h4>
                <p className="text-gray text-xs sm:text-sm md:text-base">
                  From verb conjugation to sentence formation — we blend structured grammar drills with fun, interactive learning.
                </p>
              </div>
            </div>
          </div>

          {/* Left: image */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 z-10 flex justify-center lg:justify-start items-center bg-gradient-to-t from-[#fefced] to-[#deede6] rounded-2xl p-6 relative overflow-hidden">
            <div
              id="black-overlay"
              className="absolute inset-x-0 bottom-0 z-40 rounded-b-2xl pointer-events-none h-[100%] bg-gradient-to-b from-transparent to-[#fefced]"
            />
            <div className="w-full max-w-[900px] bg-transparent rounded-3xl p-6 sm:p-8 flex items-center justify-center">
              <img
                src="public/App Screen (1).png"
                alt="mockup"
                className="relative z-10 w-[70%] sm:w-[60%] md:w-[55%] lg:w-[50%] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </AnimatedBlock>

      {/* --- Bottom Section --- */}
      <AnimatedBlock direction="up" delay={0.2}>
        <div id="bottom" className="w-full mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-black">
              Smarter Than a Textbook, <br /> <span className="text-secondaryDefault">Cheaper</span> Than a Tutor.
            </h2>
            <p className="text-center text-gray mt-3 max-w-2xl mx-auto">
              Get an AI-powered Arabic learning system that adapts to your pace, tracks progress, and teaches Qur&apos;anic comprehension
            </p>

            {/* --- rest of your comparison table & tabs stay the same --- */}
          </div>
        </div>
      </AnimatedBlock>
    </div>
  )
}

export default Connect
