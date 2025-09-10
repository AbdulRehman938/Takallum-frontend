import React from "react";
import { motion } from "framer-motion";
import { RiBookMarkedLine } from "react-icons/ri";
import { MdOutlineHeadphones } from "react-icons/md";
import { LuBookOpenText, LuBrain } from "react-icons/lu";

const Activity = () => {
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

    return (
        <div className="text-black w-full h-auto flex flex-col justify-between items-center px-4 sm:px-6 md:px-10 py-6">
            <div className="w-full h-auto flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                    Over 100 Activity Types{" "}
                    <span className="text-secondaryDefault">One App</span>
                </h1>

                <p className="font-semibold text-center text-gray text-sm sm:text-base md:text-lg">
                    From dictation to listening, picture matching to sentence reordering, <br />
                    Takallam adapts to every learning style.
                </p>

                <div className="w-full h-auto mt-6 sm:mt-8 md:mt-10 flex flex-col items-center gap-4 sm:gap-5 bg-white p-4 sm:p-6 md:p-8 rounded-lg">
                    {/* Image carousel */}
                    <div className="w-full h-auto lg:h-[200%] flex justify-center items-center bg-white overflow-hidden">
                        <motion.div
                            className="flex items-center h-full gap-1 w-full max-w-full justify-center"
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            {/* Left faded image - small on mobile, faded overlay */}
                            <div className="relative flex-shrink-0 w-[20%] lg:w-[10%] lg:min-w-[200px] lg:h-[90%] h-[120px] sm:h-[160px] md:h-[200px]">
                                <img
                                    src="/ActivityScreen.png"
                                    alt="activityscreen-left"
                                    className="object-contain bg-transparent h-full w-full"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-white/60"></div>
                            </div>

                            {/* Center image - larger on mobile, NO white cover; smaller on desktop */}
                            <div className="flex-shrink-0 w-[60%] lg:w-[15%] lg:min-w-[160px] lg:h-full h-[160px] sm:h-[200px] md:h-[240px] flex items-center">
                                <img
                                    src="/ActivityScreen.png"
                                    alt="activityscreen-center"
                                    className="object-contain bg-transparent h-full w-full"
                                />
                            </div>

                            {/* Right faded image - small on mobile, faded overlay */}
                            <div className="relative flex-shrink-0 w-[20%] lg:w-[10%] lg:min-w-[200px] lg:h-[90%] h-[120px] sm:h-[160px] md:h-[200px]">
                                <img
                                    src="/ActivityScreen.png"
                                    alt="activityscreen-right"
                                    className="object-contain bg-transparent h-full w-full"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-white/60"></div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Text & button */}
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black text-center">
                        Dictation Drill
                    </p>
                    <p className="text-gray text-sm sm:text-base md:text-lg text-center relative -top-4 sm:-top-6">
                        Listen and type what you hear
                    </p>
                    <button className="relative -top-2 sm:-top-4 w-[120px] sm:w-[150px] md:w-[200px] h-10 sm:h-12 md:h-[20%] p-2 bg-secondaryDefault text-white rounded-3xl hover:scale-105 hover:shadow-md hover:shadow-[#00000069] ease-in-out duration-300 text-sm sm:text-base md:text-lg">
                        Try for Free
                    </button>
                </div>
            </div>
            {/* SECOND SECTION */}
            <div
                id="second"
                className="w-[80%] h-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-10 py-6 bg-white rounded-lg mt-6 sm:mt-8 md:mt-10"
            >
                {/* Left content */}
                <div className="w-full md:w-[45%] flex flex-col gap-4 sm:gap-5 md:gap-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-center md:text-left">
                        Why Takallam Connects You to the{" "}
                        <span className="text-secondaryDefault">Qur'an</span>
                    </h1>

                    <div className="hidden md:grid md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6 md:mt-6">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="p-3 sm:p-4 md:p-5 border-2 border-gray/50 rounded-xl shadow-sm hover:scale-105 hover:shadow-secondary-500 hover:shadow-md ease-in-out duration-300 cursor-pointer"
                            >
                                {card.icon}
                                <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm md:text-sm">
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile carousel */}
                    <div className="md:hidden w-full overflow-x-hidden pb-4">
                        <motion.div
                            className="flex gap-4"
                            drag="x"
                            dragConstraints={{ left: -((cards.length - 1) * 280), right: 0 }}
                            style={{ width: `${cards.length * 280}px` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="inline-block w-[200px] sm:w-[220px] h-[240px] sm:h-[260px] p-2 sm:p-3 border-2 border-gray/50 rounded-xl shadow-sm hover:scale-105 hover:shadow-secondary-500 hover:shadow-md ease-in-out duration-300 cursor-pointer"
                                >
                                    {card.icon}
                                    <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs sm:text-sm">
                                        {card.desc}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Right content (image) */}
                <div className="w-full md:w-[40%] h-[280px] sm:h-[340px] md:h-[600px] flex justify-center items-center bg-gray-100 overflow-hidden mt-4 sm:mt-6 md:mt-36 rounded-3xl">
                    <img src="/public/Group 16.png" alt="group" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Activity;