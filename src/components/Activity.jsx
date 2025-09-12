import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RiBookMarkedLine } from "react-icons/ri";
import { MdOutlineHeadphones } from "react-icons/md";
import { LuBookOpenText, LuBrain } from "react-icons/lu";

// Animation variants for parent container
const parentVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            when: 'beforeChildren',
        }
    },
    exit: {
        transition: {
            staggerChildren: 0.08,
            staggerDirection: -1,
            when: 'afterChildren',
        }
    }
};

// Animation variants for children
const childVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.4 } },
    exit: { opacity: 0, x: 60, transition: { type: "spring", duration: 1.25 } } // smoother scroll-out
};

const cards = [
    {
        icon: <RiBookMarkedLine className="bg-[#fdf7ec] text-yellow-600 h-12 w-12 p-2 rounded-xl mb-5" />,
        title: "Designed for a Deeper Connection with the Qur'an",
        desc: "Master authentic Arabic through the Qur'an, Hadith, and their true meaning.",
    },
    {
        icon: <MdOutlineHeadphones className="bg-[#fdf7ec] text-yellow-600 h-12 w-12 p-2 rounded-xl mb-5" />,
        title: "Trains Your Ears, Not Just Your Eyes",
        desc: "Understand Arabic in prayer, in tarāwīḥ, and in daily life.",
    },
    {
        icon: <LuBookOpenText className="bg-[#fdf7ec] text-yellow-600 h-12 w-12 p-2 rounded-xl mb-5" />,
        title: "Adapts to You Like a Real Tutor",
        desc: "Takallam's AI shapes every lesson around what you know and what you don't.",
    },
    {
        icon: <LuBrain className="bg-[#fdf7ec] text-yellow-600 h-12 w-12 p-2 rounded-xl mb-5" />,
        title: "A Structured Curriculum That Builds Fluency",
        desc: "Each lesson progresses from vocabulary to conversation, building fluency by design.",
    },
];

const Activity = () => {
    const topControls = useAnimation();
    const secondControls = useAnimation();
    const [topRef, topInView] = useInView({ threshold: 0.2, triggerOnce: false });
    const [secondRef, secondInView] = useInView({ threshold: 0.2, triggerOnce: false });

    useEffect(() => {
        topControls.start(topInView ? "visible" : "exit");
    }, [topInView, topControls]);

    useEffect(() => {
        secondControls.start(secondInView ? "visible" : "exit");
    }, [secondInView, secondControls]);

    return (
        <div className="text-black w-full max-w-[1800px] mx-auto px-2 xs:px-4 sm:px-6 lg:px-12 xl:px-20 py-10 md:py-16 lg:py-20 flex flex-col justify-between items-center mt-6 sm:mt-10 md:mt-16">
            {/* Top Section */}
            <motion.div
                ref={topRef}
                initial={topInView ? "visible" : "hidden"}
                animate={topControls}
                variants={parentVariants}
                className="w-full h-auto flex flex-col items-center gap-4 xs:gap-6 sm:gap-8 md:gap-10"
            >
                <motion.h1
                    variants={childVariants}
                    className="text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center px-2 xs:px-4"
                >
                    Over 100 Activity Types{" "}
                    <span className="text-secondaryDefault">One App</span>
                </motion.h1>

                <motion.p
                    variants={childVariants}
                    className="font-semibold text-center text-gray text-xs xs:text-sm sm:text-base md:text-lg px-1 xs:px-2"
                >
                    From dictation to listening, picture matching to sentence reordering, <br className="hidden xs:block" />
                    Takallam adapts to every learning style.
                </motion.p>

                <motion.div
                    variants={childVariants}
                    className="w-full h-auto mt-8 xs:mt-10 sm:mt-12 md:mt-16 flex flex-col items-center gap-2 xs:gap-4 sm:gap-5 bg-white p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl"
                >
                    {/* Image carousel */}
                    <motion.div
                        variants={childVariants}
                        className="w-full h-auto flex justify-center items-center bg-white overflow-hidden my-6 sm:my-8 md:my-10"
                    >
                        <div className="flex items-center h-full justify-center gap-2 sm:gap-4">
                            {/* Left faded image */}
                            <div className="relative flex-shrink w-[60px] xs:w-[70px] sm:w-[90px] md:w-[110px] lg:w-[130px]
      h-[180px] sm:h-[270px] md:h-[390px] lg:h-[495px] xl:h-[630px] 2xl:h-[750px]">
                                <img src="/ActivityScreen.png" alt="activityscreen-left" className="object-contain h-full w-full" />
                                <div className="pointer-events-none absolute inset-0 bg-white/60"></div>
                            </div>

                            {/* Center image (unchanged) */}
                            <div className="flex-shrink-0 w-[140px] xs:w-[180px] sm:w-[260px] md:w-[320px] lg:w-[380px]
      h-[180px] sm:h-[270px] md:h-[390px] lg:h-[495px] xl:h-[630px] 2xl:h-[750px] flex items-center">
                                <img src="/ActivityScreen.png" alt="activityscreen-center" className="object-contain h-full w-full" />
                            </div>

                            {/* Right faded image */}
                            <div className="relative flex-shrink w-[60px] xs:w-[70px] sm:w-[90px] md:w-[110px] lg:w-[130px]
      h-[180px] sm:h-[270px] md:h-[390px] lg:h-[495px] xl:h-[630px] 2xl:h-[750px]">
                                <img src="/ActivityScreen.png" alt="activityscreen-right" className="object-contain h-full w-full" />
                                <div className="pointer-events-none absolute inset-0 bg-white/60"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text & button */}
                    <motion.p
                        variants={childVariants}
                        className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black text-center mt-4 sm:mt-6"
                    >
                        Dictation Drill
                    </motion.p>
                    <motion.p
                        variants={childVariants}
                        className="text-gray text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-center mt-2 sm:mt-3 mb-4 sm:mb-6"
                    >
                        Listen and type what you hear
                    </motion.p>
                    <motion.button
                        variants={childVariants}
                        className="w-[130px] xs:w-[150px] sm:w-[180px] md:w-[220px] h-10 xs:h-12 sm:h-14 md:h-[50px] p-2 bg-secondaryDefault text-white rounded-3xl hover:scale-105 hover:shadow-md hover:shadow-[#00000069] ease-in-out duration-300 text-xs xs:text-sm sm:text-base md:text-lg"
                    >
                        Try for Free
                    </motion.button>
                </motion.div>
            </motion.div>
            {/* SECOND SECTION */}
            <motion.div
                ref={secondRef}
                initial={secondInView ? "visible" : "hidden"}
                animate={secondControls}
                variants={parentVariants}
                id="second"
                className="w-full max-w-7xl mx-auto h-auto flex flex-col lg:flex-row justify-between items-center px-4 xs:px-6 sm:px-8 md:px-10 py-8 xs:py-10 sm:py-12 md:py-14 bg-white rounded-xl mt-10 xs:mt-14 md:mt-20"
            >
                {/* Left content */}
                <div className="w-full lg:w-[45%] flex flex-col gap-4 xs:gap-5 sm:gap-6 md:gap-8">
                    <motion.h1
                        variants={childVariants}
                        className="text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug text-center lg:text-left px-2 xs:px-0"
                    >
                        Why Takallam Connects You to the{" "}
                        <span className="text-secondaryDefault">Qur'an</span>
                    </motion.h1>
                    {/* Desktop/Laptop grid */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-8 mt-4">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                variants={childVariants}
                                className="p-4 border-2 border-gray/50 rounded-xl shadow-sm hover:scale-105 hover:shadow-secondary-500 hover:shadow-md ease-in-out duration-300 cursor-pointer flex flex-col items-center"
                            >
                                {card.icon}
                                <h3 className="font-semibold text-base lg:text-lg mb-2 text-center">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-base text-center">
                                    {card.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    {/* Tablet grid */}
                    <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6 mt-4">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                variants={childVariants}
                                className="p-3 sm:p-4 border-2 border-gray/50 rounded-xl shadow-sm hover:scale-105 hover:shadow-secondary-500 hover:shadow-md ease-in-out duration-300 cursor-pointer flex flex-col items-center"
                            >
                                {card.icon}
                                <h3 className="font-semibold text-sm md:text-base mb-1 md:mb-2 text-center">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 text-xs md:text-sm text-center">
                                    {card.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    {/* Mobile carousel */}
                    <div className="md:hidden w-full overflow-x-hidden pb-4">
                        <motion.div
                            className="flex gap-4"
                            drag="x"
                            dragConstraints={{ left: -((cards.length - 1) * 220), right: 0 }}
                            style={{ width: `${cards.length * 220}px` }}
                            transition={{ type: "spring", stiffness: 60, damping: 30 }}
                        >
                            {cards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    variants={childVariants}
                                    className="w-[170px] xs:w-[200px] h-[220px] xs:h-[240px] p-2 xs:p-3 border-2 border-gray/50 rounded-xl shadow-sm hover:scale-105 hover:shadow-secondary-500 hover:shadow-md ease-in-out duration-300 cursor-pointer flex flex-col items-center"
                                >
                                    {card.icon}
                                    <h3 className="font-semibold text-sm xs:text-base mb-1 xs:mb-2 text-center">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs xs:text-sm text-center">
                                        {card.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
                {/* Right content (image) */}
                <motion.div
                    variants={childVariants}
                    className="w-full lg:w-[50%] h-[180px] xs:h-[220px] sm:h-[320px] md:h-[400px] lg:h-[600px] flex justify-center items-center bg-gray-100 overflow-hidden mt-4 lg:mt-28 lg:ml-10 rounded-3xl"
                >
                    <img src="/Group 16.png" alt="group" className="w-full h-full object-cover" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Activity;
