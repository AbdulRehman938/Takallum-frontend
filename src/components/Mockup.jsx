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

const childVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.4 } },
    exit: { opacity: 0, x: 60, transition: { type: "spring", duration: 0.8 } }
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

    const gapBetweenSlides = "mt-0";  // Removed negative margins to position mockups lower
    const slideGap = tabSlideWidth < 768 ? 40 : 240;

    // Framer Motion animation controls for top/bottom sections
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
        <div className="
            text-black w-full
            xs:w-[99vw]
            sm:w-[98vw]
            md:w-[90vw]
            h-auto
            px-2 xs:px-4 sm:px-6 md:px-10
            mt-10 xs:mt-14 sm:mt-16 md:mt-28
            flex flex-col justify-between items-center
            xs:gap-14 sm:gap-20 md:gap-28
            relative
        ">
            {/* Top Section */}
            <motion.div
                ref={topRef}
                initial="hidden"
                animate={topControls}
                variants={parentVariants}
                id="top"
                className="
                    w-full
                    h-auto
                    flex flex-col justify-start items-center
                    gap-6 xs:gap-8 sm:gap-10 md:gap-14
                "
            >
                <motion.div
                    variants={childVariants}
                    className="w-auto inline-flex px-4 py-2 bg-[#ebebeb] text-gray rounded-3xl text-[clamp(0.65rem,0.6rem+0.6vw,1rem)]">
                    🔥Artificial Intelligence Learning
                </motion.div>

                <motion.h1
                    variants={childVariants}
                    className="text-[clamp(1.5rem,1.25rem+2vw,3.75rem)] font-bold text-black text-center"
                >
                    Learn with AI That{" "}
                    <span className="text-secondaryDefault">Adapts to You</span>
                </motion.h1>

                <motion.p
                    variants={childVariants}
                    className="text-center text-gray font-medium text-[clamp(0.9rem,0.7rem+1vw,1.5rem)]"
                >
                    Experience personalized learning that evolves with your <br /> progress
                    and learning style
                </motion.p>

                {/* Tabs + slider */}
                <motion.div
                    variants={childVariants}
                    id="mover"
                    className="w-full xs:w-11/12 sm:w-10/12 md:w-[80%] mt-8 md:mt-10 h-auto flex flex-col items-center"
                >
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-5 mb-8 md:mb-10 bg-gray/10 px-2 xs:px-3 sm:px-4 py-2 rounded-3xl lg:gap-5">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(index)}
                                className={`
                                    relative overflow-hidden
                                    px-2 py-1
                                    xs:px-3 xs:py-2
                                    sm:px-5 sm:py-3
                                    rounded-2xl font-medium
                                    transition-all duration-200
                                    text-xs xs:text-sm md:text-base lg:text-lg
                                    ${activeTab === index
                                        ? "bg-secondaryDefault text-white hover:text-white"
                                        : "bg-secondary-100 text-gray-600 hover:bg-secondary-900 hover:text-white"
                                    }
                                `}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    {/* Animated content slider */}
                    <div
                        ref={tabsViewportRef}
                        className="overflow-hidden w-[95vw] xs:w-[90vw] sm:w-[80vw] md:w-[80%] cursor-grab active:cursor-grabbing select-none"
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
                            {tabs.map((tab, idx) => (
                                <motion.div
                                    key={tab.id}
                                    variants={childVariants}
                                    id={idx === 0 ? "child1" : "child2"}
                                    className={`
                                        flex-shrink-0 w-full flex flex-col md:flex-row items-center justify-center
                                        gap-12 xs:gap-14 sm:gap-16 md:gap-20 lg:gap-24
                                        ${idx !== 0 ? gapBetweenSlides : ""}
                                        py-4 sm:py-6 md:py-8
                                    `}
                                    style={{ width: tabSlideWidth }}
                                >
                                    {/* Phone mockup */}
                                    <motion.div
                                        variants={childVariants}
                                        className="
                                            w-[clamp(10rem,9rem+7vw,24rem)]
                                            h-[clamp(18rem,18rem+12vw,50rem)]
                                            bg-black rounded-[2rem]
                                            overflow-hidden shadow-lg flex-none
                                            transition-all duration-300
                                            mt-6 md:mt-8
                                        "
                                    >
                                        <img
                                            src={tab.image}
                                            alt={tab.title}
                                            className="w-full h-full object-fill bg-transparent"
                                        />
                                    </motion.div>
                                    {/* Text */}
                                    <motion.div
                                        variants={childVariants}
                                        className={`
                                            flex flex-col items-center md:items-start
                                            ${idx === 0 ? "gap-6 xs:gap-8 md:gap-10" : "gap-0"}
                                            text-center md:text-left px-2 md:px-0 flex-1 min-w-0 md:max-w-[clamp(11rem,10rem+7vw,24rem)] lg:max-w-[clamp(11rem,10rem+7vw,24rem)]
                                            mt-4 md:mt-6
                                        `}
                                    >
                                        <motion.h2 variants={childVariants} className="text-[clamp(1.2rem,1.1rem+2vw,2.75rem)] font-extrabold whitespace-pre-line mb-3 sm:mb-4">
                                            {tab.heading}
                                        </motion.h2>
                                        <motion.p variants={childVariants} className="text-gray text-[clamp(0.85rem,0.75rem+1vw,1.35rem)] mb-4 sm:mb-6">
                                            {tab.description}
                                        </motion.p>
                                        <motion.button
                                            variants={childVariants}
                                            className="
                                                group relative overflow-hidden
                                                px-4 py-2
                                                xs:px-6 xs:py-2
                                                md:px-8 md:py-3
                                                lg:px-10 lg:py-4
                                                bg-secondaryDefault text-white
                                                rounded-2xl transition duration-200
                                                hover:bg-secondary-700 flex items-center justify-center
                                                gap-2 w-full sm:w-auto sm:min-w-[180px] md:min-w-[200px]
                                                text-xs xs:text-sm md:text-base lg:text-lg mt-2 sm:mt-4
                                            "
                                        >
                                            {tab.button}
                                            <FaArrowRight className="text-white text-base md:text-xl transition-transform duration-200 group-hover:translate-x-1" />
                                        </motion.button>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom section */}
            <motion.div
                ref={bottomRef}
                initial="hidden"
                animate={bottomControls}
                variants={parentVariants}
                id="fill"
                className="
                    relative w-full
                    h-auto
                    flex flex-col justify-start items-center
                    bg-transparent rounded-t-[2rem]
                    top-[4rem] xs:top-[-10rem] sm:top-[-4rem] md:top-[2rem]
                    pt-10 xs:pt-12 sm:pt-14 md:pt-16 pb-10 overflow-visible
                "
            >
                {/* Black circle background behind fill content */}
                <div className="h-[95%] w-[98%] absolute bottom-1 bg-secondary-100 opacity-60 blur-3xl -z-1"></div>
                <div className="h-[50%] w-[25%] absolute opacity-60 -z-1 bg-yellow-100 rounded-full right-[5rem] bottom-[20rem] blur-3xl"></div>
                {/* Top badge */}
                <motion.div
                    variants={childVariants}
                    className="w-auto inline-flex px-4 py-2 bg-[#f8f8f8] text-[#ECAC44] relative z-10 rounded-3xl text-[clamp(0.65rem,0.6rem+0.6vw,1rem)] font-medium mt-2 sm:mt-3 md:mt-4"
                >
                    ⚡ AI Powered Adaptive Learning
                </motion.div>

                {/* Main heading */}
                <motion.h1
                    variants={childVariants}
                    className="text-[clamp(1.2rem,1rem+2vw,3.75rem)] font-bold text-black text-center relative z-10 leading-tight mt-2"
                >
                    It's Like Having a Private Tutor <span className="text-[#35605A]">in<br />Your Pocket</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={childVariants}
                    className="text-center relative z-10 text-gray font-medium text-[clamp(0.8rem,0.7rem+1vw,1.25rem)] mt-1 mb-4 px-4"
                >
                    Experience personalized learning that adapts to your unique needs and learning style
                </motion.p>

                {/* Cards: mobile slider, desktop grid */}
                {/* Mobile slider */}
                <motion.div
                    variants={childVariants}
                    id="child1"
                    ref={cardsViewportRef}
                    className="block md:hidden overflow-x-hidden overflow-y-visible bg-transparent w-full cursor-grab active:cursor-grabbing select-none mt- px-2"
                >
                    <motion.div
                        className="flex w-full gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-10"
                        drag="x"
                        dragConstraints={{ left: -(3 * cardsSlideWidth * 0.8), right: 0 }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {[0, 1, 2, 3].map((i) => (
                            <motion.div key={i} variants={childVariants} className="flex-shrink-0 flex flex-col items-center" style={{ width: cardsSlideWidth * 0.7 }}>
                                {/* Icon outside card */}
                                {i === 0 && (
                                    <div className="relative z-20 w-16 h-16 xs:w-20 xs:h-20 bg-white rounded-full flex border border-gray items-center justify-center shadow-lg mb-2">
                                        <FaRegCompass className="w-8 h-8 xs:w-10 xs:h-10 text-[#ECAC44]" />
                                    </div>
                                )}
                                {i === 1 && (
                                    <div className="relative z-20 w-16 h-16 xs:w-20 xs:h-20 bg-white rounded-full flex border border-gray items-center justify-center shadow-lg mb-2">
                                        <LuBrain className="w-8 h-8 xs:w-10 xs:h-10 text-[#ECAC44]" />
                                    </div>
                                )}
                                {i === 2 && (
                                    <div className="relative z-20 w-16 h-16 xs:w-20 xs:h-20 bg-white rounded-full flex border border-gray items-center justify-center shadow-lg mb-2">
                                        <LucidePuzzle className="w-8 h-8 xs:w-10 xs:h-10 text-[#ECAC44]" />
                                    </div>
                                )}
                                {i === 3 && (
                                    <div className="relative z-20 w-16 h-16 xs:w-20 xs:h-20 bg-white rounded-full flex border border-gray items-center justify-center shadow-lg mb-2">
                                        <LucideRocket className="w-8 h-8 xs:w-10 xs:h-10 text-[#ECAC44]" />
                                    </div>
                                )}
                                {/* Card */}
                                <motion.div variants={childVariants} className="group relative bg-transparent hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer hover:shadow-xl mx-auto max-w-sm -mt-10">
                                    <div className="relative z-10 bg-transparent rounded-3xl shadow-sm border border-gray-100 mx-2">
                                        <div className="relative overflow-hidden bg-transparent rounded-3xl p-3 xs:p-4 sm:p-5 md:p-6 pt-14 h-auto min-h-[10rem] xs:min-h-[12rem] flex flex-col gap-3 xs:gap-4 sm:gap-5">
                                            <div className="absolute bottom-0 left-0 w-full h-[calc(100%+4rem)] bg-[#ECAC44] origin-bottom scale-y-0 group-hover:scale-y-100 group-active:scale-y-100 transition-transform duration-700 ease-in-out z-0 rounded-t-3xl" />
                                            <div className="relative z-10">
                                                {i === 0 && (
                                                    <>
                                                        <h3 className="text-sm xs:text-base font-bold text-black mb-2">Learn at Your Own Pace</h3>
                                                        <p className="text-gray text-xs leading-relaxed">
                                                            Achieve your goals with lessons tailored to your proficiency level, interests, and time commitment.
                                                        </p>
                                                    </>
                                                )}
                                                {i === 1 && (
                                                    <>
                                                        <h3 className="text-sm xs:text-base font-bold text-black mb-2">AI Insights</h3>
                                                        <p className="text-gray text-xs leading-relaxed">
                                                            Smarter review sessions with tailored insights that help you focus on what matters most.
                                                        </p>
                                                    </>
                                                )}
                                                {i === 2 && (
                                                    <>
                                                        <h3 className="text-sm xs:text-base font-bold text-black mb-2">Real Conversations</h3>
                                                        <p className="text-gray text-xs leading-relaxed">
                                                            Practice with AI in realistic contexts and get confident feedback instantly.
                                                        </p>
                                                    </>
                                                )}
                                                {i === 3 && (
                                                    <>
                                                        <h3 className="text-sm xs:text-base font-bold text-black mb-2">Accelerate Progress</h3>
                                                        <p className="text-gray text-xs leading-relaxed">
                                                            Push your learning speed with personalized, AI-driven pathways designed for rapid growth.
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Desktop grid */}
                <div id="child2" className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 w-full max-w-6xl mt-8 md:mt-12 px-2 md:px-0">
                    {/* Card 1 */}
                    <motion.div variants={childVariants} className="group relative hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer hover:shadow-xl m-2 sm:m-3 md:m-4">
                        <div
                            className="absolute -top-10 md:-top-14 left-1/2 -translate-x-1/2 z-20 w-20 h-20 md:w-28 md:h-28 bg-white rounded-full flex border-4 border-secondary-200 items-center justify-center shadow-lg transition-colors duration-700 group-hover:bg-[#ECAC44]"
                        >
                            <FaRegCompass className="w-10 h-10 md:w-12 md:h-12 text-[#ECAC44] group-hover:text-white transition-colors duration-700" />
                        </div>
                        <div className="relative bg-white rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 pt-16 md:pt-20 shadow-sm h-auto md:h-72 lg:h-80 flex flex-col gap-2 xs:gap-3 sm:gap-4 overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-full h-[calc(100%+4rem)] bg-[#ECAC44] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-in-out z-0 rounded-t-3xl" />
                            <div className="relative z-10">
                                <h3 className="text-base md:text-lg lg:text-xl font-bold text-black mb-2 md:mb-3">Learn at Your Own Pace</h3>
                                <p className="text-gray text-xs md:text-sm lg:text-base leading-relaxed">
                                    Achieve your goals with lessons tailored to your proficiency level, interests, and time commitment.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div variants={childVariants} className="group relative hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer hover:shadow-xl m-2 sm:m-3 md:m-4">
                        <div
                            className="absolute -top-10 md:-top-14 left-1/2 -translate-x-1/2 z-20 w-20 h-20 md:w-28 md:h-28 bg-white rounded-full flex border-4 border-secondary-200 items-center justify-center shadow-lg transition-colors duration-700 group-hover:bg-[#ECAC44]"
                        >
                            <LuBrain className="w-10 h-10 md:w-12 md:h-12 text-[#ECAC44] group-hover:text-white transition-colors duration-700" />
                        </div>
                        <div className="relative bg-white rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 pt-16 md:pt-20 shadow-sm h-auto md:h-72 lg:h-80 flex flex-col gap-2 xs:gap-3 sm:gap-4 overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-full h-[calc(100%+4rem)] bg-[#ECAC44] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-in-out z-0 rounded-t-3xl" />
                            <div className="relative z-10">
                                <h3 className="text-base md:text-lg font-bold text-black mb-2 md:mb-3">AI Insights</h3>
                                <p className="text-gray text-xs md:text-sm leading-relaxed">
                                    Smarter review sessions with tailored insights that help you focus on what matters most.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div variants={childVariants} className="group relative hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer hover:shadow-xl m-2 sm:m-3 md:m-4">
                        <div
                            className="absolute -top-10 md:-top-14 left-1/2 -translate-x-1/2 z-20 w-20 h-20 md:w-28 md:h-28 bg-white rounded-full flex border-4 border-secondary-200 items-center justify-center shadow-lg transition-colors duration-700 group-hover:bg-[#ECAC44]"
                        >
                            <LucidePuzzle className="w-10 h-10 md:w-12 md:h-12 text-[#ECAC44] group-hover:text-white transition-colors duration-700" />
                        </div>
                        <div className="relative bg-white rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 pt-16 md:pt-20 shadow-sm h-auto md:h-72 lg:h-80 flex flex-col gap-2 xs:gap-3 sm:gap-4 overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-full h-[calc(100%+4rem)] bg-[#ECAC44] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-in-out z-0 rounded-t-3xl" />
                            <div className="relative z-10">
                                <h3 className="text-base md:text-lg font-bold text-black mb-2 md:mb-3">Real Conversations</h3>
                                <p className="text-gray text-xs md:text-sm leading-relaxed">
                                    Practice with AI in realistic contexts and get confident feedback instantly.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div variants={childVariants} className="group relative hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer hover:shadow-xl m-2 sm:m-3 md:m-4">
                        <div
                            className="absolute -top-10 md:-top-14 left-1/2 -translate-x-1/2 z-20 w-20 h-20 md:w-28 md:h-28 bg-white rounded-full flex border-4 border-secondary-200 items-center justify-center shadow-lg transition-colors duration-700 group-hover:bg-[#ECAC44]"
                        >
                            <LucideRocket className="w-10 h-10 md:w-12 md:h-12 text-[#ECAC44] group-hover:text-white transition-colors duration-700" />
                        </div>
                        <div className="relative bg-white rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 pt-16 md:pt-20 shadow-sm h-auto md:h-72 lg:h-80 flex flex-col gap-2 xs:gap-3 sm:gap-4 overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-full h-[calc(100%+4rem)] bg-[#ECAC44] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-in-out z-0 rounded-t-3xl" />
                            <div className="relative z-10">
                                <h3 className="text-base md:text-lg font-bold text-black mb-2 md:mb-3">Accelerate Progress</h3>
                                <p className="text-gray text-xs md:text-sm leading-relaxed">
                                    Push your learning speed with personalized, AI-driven pathways designed for rapid growth.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Mockup;