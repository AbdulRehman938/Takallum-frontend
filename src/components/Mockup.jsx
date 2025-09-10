import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight, FaRegCompass } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { LucidePuzzle, LucideRocket } from "lucide-react";

const tabs = [
    {
        id: 1,
        title: "Personalised Lessons",
        heading: "Perfect Your\nPronunciation",
        description:
            "Record your voice and get instant AI feedback on clarity, rhythm, and vowel sounds. Practice until it's perfect.",
        button: "Try This Feature",
        image: "/App Screen.jpg",
    },
    {
        id: 2,
        title: "AI Generated Review",
        heading: "Review Smarter with AI",
        description:
            "Get AI-driven insights, highlights, and review sessions tailored for your progress.",
        button: "Start Reviewing",
        image: "/App Screen.jpg",
    },
    {
        id: 3,
        title: "AI Conversations",
        heading: "Practice Real Conversations",
        description:
            "Talk with AI in real situations. Get instant feedback and confidence in your speech.",
        button: "Start Conversation",
        image: "/App Screen.jpg",
    },
    {
        id: 4,
        title: "AI Pronunciations",
        heading: "Perfect Your Pronunciation",
        description:
            "Record your voice and get instant AI feedback on clarity, rhythm, and vowel sounds.",
        button: "Try This Feature",
        image: "/App Screen.jpg",
    },
];

// Animation variants
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Mockup = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabsViewportRef = useRef(null);
    const cardsViewportRef = useRef(null);
    const [tabSlideWidth, setTabSlideWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 0
    );
    const [cardsSlideWidth, setCardsSlideWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 0
    );

    const slideGap = tabSlideWidth < 768 ? 12 : 200;

    // Animate section when in view
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    useEffect(() => {
        const measure = () => {
            if (tabsViewportRef.current) {
                setTabSlideWidth(tabsViewportRef.current.clientWidth);
            }
            if (cardsViewportRef.current) {
                setCardsSlideWidth(cardsViewportRef.current.clientWidth);
            }
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    return (
        <motion.div
            ref={ref}
            className="text-black w-full md:w-[90vw] h-auto md:h-[130rem] px-4 sm:px-6 md:px-10 mt-16 md:mt-28 flex flex-col justify-between items-center md:gap-28 relative"
            initial="hidden"
            animate={controls}
            variants={fadeUp}
        >


            {/* Top Section */}
            <div
                id="top"
                className="w-full h-auto md:h-[45%] flex flex-col justify-start items-center gap-6 md:gap-10"
            >
                <motion.div
                    className="w-auto inline-flex px-4 py-2 bg-[#ebebeb] text-gray rounded-3xl text-xs sm:text-sm md:text-base lg:text-lg"
                    variants={fadeUp}
                >
                    🔥Artificial Intelligence Learning
                </motion.div>

                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center"
                    variants={fadeUp}
                >
                    Learn with AI That{" "}
                    <span className="text-secondaryDefault">Adapts to You</span>
                </motion.h1>

                <motion.p
                    className="text-center text-gray font-medium text-sm sm:text-base md:text-xl lg:text-2xl"
                    variants={fadeUp}
                >
                    Experience personalized learning that evolves with your <br /> progress
                    and learning style
                </motion.p>

                {/* Tabs + slider stay untouched */}
                <div
                    id="mover"
                    className="w-full sm:w-11/12 md:w-[80%] mt-8 md:mt-10 h-auto md:h-[80%] flex flex-col items-center"
                >
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 md:mb-8 bg-gray/10 px-2 sm:px-4 py-2 rounded-3xl lg:gap-4">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(index)}
                                className={`relative overflow-hidden px-3 py-2 sm:px-5 sm:py-3 rounded-2xl font-medium transition-all duration-200 text-sm md:text-base lg:text-lg ${activeTab === index
                                        ? "bg-secondaryDefault text-white hover:text-white"
                                        : "bg-secondary-100 text-gray-600 hover:bg-secondary-900 hover:text-white"
                                    }`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    {/* Animated content slider (untouched) */}
                    <div
                        ref={tabsViewportRef}
                        className="overflow-hidden w-[80%] cursor-grab active:cursor-grabbing select-none"
                    >
                        <motion.div
                            className="flex w-full"
                            style={{ gap: slideGap }}
                            drag="x"
                            dragConstraints={{
                                left:
                                    -((tabs.length - 1) * (tabSlideWidth + slideGap)) -
                                    (tabSlideWidth < 768 ? 8 : 0),
                                right: 0,
                            }}
                            animate={{
                                x:
                                    -activeTab * (tabSlideWidth + slideGap) -
                                    (tabSlideWidth < 768 && activeTab > 0 ? 8 : 0),
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {tabs.map((tab) => (
                                <div
                                    key={tab.id}
                                    className="flex-shrink-0 w-full flex flex-col md:flex-row items-center gap-8 md:gap-32 overflow-hidden justify-center"
                                    style={{ width: tabSlideWidth }}
                                >
                                    {/* Phone mockup */}
                                    <div className="w-56 h-[420px] md:w-[280px] md:h-[550px] lg:w-[360px] lg:h-[620px] bg-black rounded-[2rem] overflow-hidden shadow-lg flex-none">
                                        <img
                                            src={tab.image}
                                            alt={tab.title}
                                            className="w-full h-full object-fill bg-transparent"
                                        />
                                    </div>

                                    {/* Text */}
                                    <div className="flex flex-col items-center md:items-start gap-4 md:gap-5 text-center md:text-left px-2 md:px-0 flex-1 min-w-0 md:max-w-[420px] lg:max-w-[520px]">
                                        <h2 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold">
                                            {tab.heading}
                                        </h2>
                                        <p className="text-gray text-sm sm:text-base md:text-lg lg:text-xl whitespace-pre-line">
                                            {tab.description}
                                        </p>
                                        <button className="group relative overflow-hidden px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-secondaryDefault text-white rounded-2xl transition duration-200 hover:bg-secondary-700 flex items-center gap-2 text-sm md:text-base lg:text-lg">
                                            {tab.button}
                                            <FaArrowRight className="text-white text-lg md:text-xl transition-transform duration-200 group-hover:translate-x-1" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom section stays untouched */}
            <div
                id="fill"
                className="relative w-full h-auto md:h-[45%] flex flex-col justify-start items-center gap-5 bg-transparent rounded-t-[2rem] top-[-10rem] md:pt-10 pb-10 overflow-visible"
            >
                <div id="fill" className="relative w-full h-auto md:h-[45%] flex flex-col justify-start items-center gap-5 md:mt-[15rem] bg-transparent rounded-t-[2rem] pt-8 md:pt-10 pb-10 overflow-visible">
                    {/* Black circle background behind fill content */}
                    <div className="h-[95%] w-[98%] absolute bottom-1 bg-secondary-100 opacity-60 blur-3xl -z-1"></div>
                    <div className="h-[50%] w-[25%] absolute opacity-60 -z-1 bg-yellow-100 rounded-full right-[5rem] bottom-[20rem] blur-3xl"></div>
                    {/* Top badge */}
                    <div className="w-auto inline-flex px-4 py-2 bg-[#f8f8f8] text-[#ECAC44] relative z-10 rounded-3xl text-xs sm:text-sm md:text-base font-medium">
                        ⚡ AI Powered Adaptive Learning
                    </div>

                    {/* Main heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center relative z-10 leading-tight">
                        It's Like Having a Private Tutor <span className="text-[#35605A]">in<br />Your Pocket</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-center relative z-10 text-gray font-medium text-sm sm:text-base md:text-lg lg:text-xl mt-3 md:mt-4 mb-6 md:mb-8 px-4">
                        Experience personalized learning that adapts to your unique needs and learning style
                    </p>

                    {/* Cards: mobile slider, desktop grid */}
                    {/* Mobile slider */}
                    <div
                        ref={cardsViewportRef}
                        className="block md:hidden overflow-x-hidden overflow-y-visible bg-transparent w-full cursor-grab active:cursor-grabbing select-none mt-8 px-2"
                    >
                        <motion.div
                            className="flex w-full gap-4"
                            drag="x"
                            dragConstraints={{ left: -(3 * cardsSlideWidth * 0.8), right: 0 }}
                            animate={{ x: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {/* 4 slides, each 80% of viewport width */}
                            {[0, 1, 2, 3].map((i) => (
                                <div key={i} className="flex-shrink-0 flex flex-col items-center" style={{ width: cardsSlideWidth * 0.8 }}>
                                    {/* Icon outside card */}
                                    {i === 0 && (
                                        <div className="relative z-20 w-24 h-24 bg-white rounded-full flex border border-gray items-center justify-center shadow-lg mb-2">
                                            <FaRegCompass className="w-12 h-12 text-[#ECAC44]" />
                                        </div>
                                    )}
                                    {i === 1 && (
                                        <div className="relative z-20 w-24 h-24 bg-white rounded-full flex border border-gray items-center justify-center shadow-lg mb-2">
                                            <LuBrain className="w-12 h-12 text-[#ECAC44]" />
                                        </div>
                                    )}
                                    {i === 2 && (
                                        <div className="relative z-20 w-24 h-24 bg-white rounded-full flex border border-gray items-center justify-center shadow-lg mb-2">
                                            <LucidePuzzle className="w-12 h-12 text-[#ECAC44]" />
                                        </div>
                                    )}
                                    {i === 3 && (
                                        <div className="relative z-20 w-24 h-24 bg-white rounded-full flex border border-gray items-center justify-center shadow-lg mb-2">
                                            <LucideRocket className="w-12 h-12 text-[#ECAC44]" />
                                        </div>
                                    )}
                                    {/* Card */}
                                    <div className="group relative bg-transparent hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer hover:shadow-xl mx-auto max-w-sm -mt-10">
                                        <div className="relative z-10 bg-transparent rounded-3xl shadow-sm border border-gray-100">
                                            <div className="relative overflow-hidden bg-transparent rounded-3xl p-6 pt-16 h-auto min-h-[15rem] flex flex-col">
                                                <div className="absolute bottom-0 left-0 w-full h-[calc(100%+4rem)] bg-[#ECAC44] origin-bottom scale-y-0 group-hover:scale-y-100 group-active:scale-y-100 transition-transform duration-700 ease-in-out z-0 rounded-t-3xl" />
                                                <div className="relative z-10">
                                                    {i === 0 && (
                                                        <>
                                                            <h3 className="text-lg font-bold text-black mb-3">Learn at Your Own Pace</h3>
                                                            <p className="text-gray text-sm leading-relaxed">
                                                                Achieve your goals with lessons tailored to your proficiency level, interests, and time commitment.
                                                            </p>
                                                        </>
                                                    )}
                                                    {i === 1 && (
                                                        <>
                                                            <h3 className="text-lg font-bold text-black mb-3">AI Insights</h3>
                                                            <p className="text-gray text-sm leading-relaxed">
                                                                Smarter review sessions with tailored insights that help you focus on what matters most.
                                                            </p>
                                                        </>
                                                    )}
                                                    {i === 2 && (
                                                        <>
                                                            <h3 className="text-lg font-bold text-black mb-3">Real Conversations</h3>
                                                            <p className="text-gray text-sm leading-relaxed">
                                                                Practice with AI in realistic contexts and get confident feedback instantly.
                                                            </p>
                                                        </>
                                                    )}
                                                    {i === 3 && (
                                                        <>
                                                            <h3 className="text-lg font-bold text-black mb-3">Accelerate Progress</h3>
                                                            <p className="text-gray text-sm leading-relaxed">
                                                                Push your learning speed with personalized, AI-driven pathways designed for rapid growth.
                                                            </p>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Desktop grid */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl mt-8 md:mt-12 px-2 md:px-0">
                        {/* Card 1 */}
                        <div className="group relative hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer hover:shadow-xl">
                            <div
                                className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 z-20 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex border border-gray items-center justify-center shadow-lg transition-colors duration-700 group-hover:bg-[#ECAC44]"
                            >
                                <FaRegCompass className="w-12 h-12 md:w-16 md:h-16 text-[#ECAC44] group-hover:text-white transition-colors duration-700" />
                            </div>
                            <div className="relative bg-white rounded-3xl p-6 md:p-8 pt-16 md:pt-20 shadow-sm border border-gray-100 h-auto md:h-96 flex flex-col overflow-hidden">
                                <div className="absolute bottom-0 left-0 w-full h-[calc(100%+4rem)] bg-[#ECAC44] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-in-out z-0 rounded-t-3xl" />
                                <div className="relative z-10">
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-3 md:mb-4">Learn at Your Own Pace</h3>
                                    <p className="text-gray text-sm md:text-base lg:text-lg leading-relaxed">
                                        Achieve your goals with lessons tailored to your proficiency level, interests, and time commitment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer hover:shadow-xl">
                            <div
                                className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 z-20 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex border border-gray items-center justify-center shadow-lg transition-colors duration-700 group-hover:bg-[#ECAC44]"
                            >
                                <LuBrain className="w-12 h-12 md:w-16 md:h-16 text-[#ECAC44] group-hover:text-white transition-colors duration-700" />
                            </div>
                            <div className="relative bg-white rounded-3xl p-6 md:p-8 pt-16 md:pt-20 shadow-sm border border-gray-100 h-auto md:h-96 flex flex-col overflow-hidden">
                                <div className="absolute bottom-0 left-0 w-full h-[calc(100%+4rem)] bg-[#ECAC44] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-in-out z-0 rounded-t-3xl" />
                                <div className="relative z-10">
                                    <h3 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4">AI Insights</h3>
                                    <p className="text-gray text-sm md:text-base leading-relaxed">
                                        Smarter review sessions with tailored insights that help you focus on what matters most.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer hover:shadow-xl">
                            <div
                                className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 z-20 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex border border-gray items-center justify-center shadow-lg transition-colors duration-700 group-hover:bg-[#ECAC44]"
                            >
                                <LucidePuzzle className="w-12 h-12 md:w-16 md:h-16 text-[#ECAC44] group-hover:text-white transition-colors duration-700" />
                            </div>
                            <div className="relative bg-white rounded-3xl p-6 md:p-8 pt-16 md:pt-20 shadow-sm border border-gray-100 h-auto md:h-96 flex flex-col overflow-hidden">
                                <div className="absolute bottom-0 left-0 w-full h-[calc(100%+4rem)] bg-[#ECAC44] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-in-out z-0 rounded-t-3xl" />
                                <div className="relative z-10">
                                    <h3 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4">Real Conversations</h3>
                                    <p className="text-gray text-sm md:text-base leading-relaxed">
                                        Practice with AI in realistic contexts and get confident feedback instantly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="group relative hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer hover:shadow-xl">
                            <div
                                className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 z-20 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex border border-gray items-center justify-center shadow-lg transition-colors duration-700 group-hover:bg-[#ECAC44]"
                            >
                                <LucideRocket className="w-12 h-12 md:w-16 md:h-16 text-[#ECAC44] group-hover:text-white transition-colors duration-700" />
                            </div>
                            <div className="relative bg-white rounded-3xl p-6 md:p-8 pt-16 md:pt-20 shadow-sm border border-gray-100 h-auto md:h-96 flex flex-col overflow-hidden">
                                <div className="absolute bottom-0 left-0 w-full h-[calc(100%+4rem)] bg-[#ECAC44] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-in-out z-0 rounded-t-3xl" />
                                <div className="relative z-10">
                                    <h3 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4">Accelerate Progress</h3>
                                    <p className="text-gray text-sm md:text-base leading-relaxed">
                                        Push your learning speed with personalized, AI-driven pathways designed for rapid growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Mockup;