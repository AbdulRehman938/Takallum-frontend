import React, { useState, useRef, useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBullseye, FaCheck } from 'react-icons/fa'

const testimonials = [
    {
        name: 'Hasan Ibrahim',
        subtitle: 'Beta user, Bangladesh',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        quote:
            "Finally, an app that teaches Arabic like we actually use it. The pronunciation feedback is incredible!",
    },
    {
        name: 'Aisha Khan',
        subtitle: 'Beta user, Pakistan',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        quote:
            "I improved my listening and speaking quickly — the AI conversations feel natural and the corrections are precise.",
    },
    {
        name: 'Omar Ali',
        subtitle: 'Beta user, Egypt',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        quote: "Lessons adapt to me — it feels like a personal tutor in my pocket.",
    },
    {
        name: 'Fatima Hassan',
        subtitle: 'Beta user, UAE',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        quote: "The interactive lessons make learning fun and engaging every day.",
    },
    {
        name: 'Ahmed Mahmoud',
        subtitle: 'Beta user, Morocco',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        quote: "Perfect for busy professionals - I can learn anywhere, anytime.",
    },
]

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

const Claim = () => {
    const [index, setIndex] = useState(0)
    const viewportRef = useRef(null)
    const [slideWidth, setSlideWidth] = useState(0)

    // Animation controls for whole section
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

    useEffect(() => {
        if (inView) controls.start("visible");
        else controls.start("exit");
    }, [inView, controls]);

    useEffect(() => {
        const measure = () => {
            if (viewportRef.current) setSlideWidth(viewportRef.current.clientWidth)
        }
        measure()
        window.addEventListener('resize', measure)
        return () => window.removeEventListener('resize', measure)
    }, [])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={parentVariants}
            className="w-full min-h-screen flex flex-col items-center py-8 lg:py-24 px-4 text-black bg-gray-50"
        >
            <motion.div variants={childVariants} className="max-w-7xl w-full">
                <motion.h2
                    variants={childVariants}
                    className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 lg:mb-12 px-2"
                >
                    See what Takallum <span className="text-green-600">users</span> saying
                </motion.h2>

                {/* Desktop testimonials slider */}
                <motion.div variants={childVariants} className="hidden lg:block">
                    <div ref={viewportRef} className="relative bg-white rounded-2xl mb-16 p-8 md:p-12 overflow-hidden min-h-[400px] shadow-lg">
                        <div
                            className="flex z-10 transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${index * (slideWidth + 40)}px)` }}
                        >
                            {testimonials.map((t, i) => (
                                <motion.div
                                    key={i}
                                    variants={childVariants}
                                    className="min-w-full flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-10 p-6 pr-20 pl-20"
                                >
                                    <div className="w-full md:w-1/3 flex flex-row items-center md:items-start gap-4">
                                        <img src={t.avatar} alt={t.name} className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-md" />
                                        <div className="text-left mt-5">
                                            <div className="font-semibold text-lg">{t.name}</div>
                                            <div className="text-sm text-gray-600 mt-1">{t.subtitle}</div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-2/3">
                                        <blockquote className="text-base md:text-2xl leading-snug">"{t.quote}"</blockquote>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 z-30 flex items-center justify-center gap-3 p-2 bg-white bg-opacity-95 rounded-full shadow-lg">
                            {testimonials.map((_, i) => (
                                <div
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    className={`h-2 rounded-full ${i === index ? 'bg-secondaryDefault w-40' : 'bg-secondary-300 w-4'} cursor-pointer transition-all duration-200`}
                                    style={{ transitionProperty: 'width, background-color' }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Mobile testimonial */}
                <motion.div
                    variants={childVariants}
                    className="lg:hidden bg-white rounded-2xl p-6 mb-8 shadow-lg mx-2"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <img
                            src={testimonials[0].avatar}
                            alt={testimonials[0].name}
                            className="w-12 h-12 rounded-full object-cover shadow-md"
                        />
                        <div>
                            <div className="font-semibold text-base">{testimonials[0].name}</div>
                            <div className="text-sm text-gray-600">{testimonials[0].subtitle}</div>
                        </div>
                    </div>
                    <blockquote className="text-sm leading-relaxed text-center">
                        "{testimonials[0].quote}"
                    </blockquote>
                </motion.div>

                {/* Claim Box Section */}
                <motion.div variants={childVariants} className="flex justify-center">
                    <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg bg-gradient-to-b from-[#bedccd] to-[#fbfbec] rounded-3xl lg:rounded-[3rem] p-2 lg:p-[8px] border-b-[5rem] lg:border-b-[6rem] border-[#fbfbec] shadow-2xl">
                        <div className="w-full h-full rounded-2xl lg:rounded-[2.5rem] bg-white flex flex-col items-center justify-center p-6 lg:p-8 relative">
                            <div className="absolute -top-2 -left-2 lg:-top-4 lg:-left-8 bg-orange-500 text-white px-3 py-1 lg:px-4 lg:py-2 rounded-full text-sm lg:text-lg font-medium shadow-lg">
                                🔥50% Off
                            </div>

                            <div className="px-3 lg:px-4 py-2 lg:py-3 rounded-full bg-gray-100 flex items-center gap-2 lg:gap-3 mb-6 lg:mb-8">
                                <span className="text-sm lg:text-lg text-gray-600">🎯 Limited Time Beta Offer</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 mb-6 lg:mb-8">
                                <div className="text-2xl lg:text-4xl xl:text-5xl font-extrabold text-gray/40 line-through">$129.99</div>
                                <div className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-black">$64.99</div>
                                <div className="text-lg lg:text-2xl xl:text-3xl text-gray-600">One Year Access</div>
                            </div>

                            <div className="w-full space-y-3 lg:space-y-0 lg:flex lg:flex-wrap lg:justify-center lg:gap-3 mb-6 lg:mb-8">
                                <div className="flex items-center gap-3 lg:inline-flex lg:gap-2 bg-gray-100 rounded-full px-4 lg:px-3 py-3 lg:py-2 lg:w-auto lg:justify-center shadow-sm">
                                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0">
                                        <FaCheck className="w-3 h-3" />
                                    </span>
                                    <span className="text-gray-700 text-sm lg:text-xs xl:text-sm">Beta Access</span>
                                </div>

                                <div className="flex items-center gap-3 lg:inline-flex lg:gap-2 bg-gray-100 rounded-full px-4 lg:px-3 py-3 lg:py-2 lg:w-auto lg:justify-center shadow-sm">
                                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0">
                                        <FaCheck className="w-3 h-3" />
                                    </span>
                                    <span className="text-gray-700 text-sm lg:text-xs xl:text-sm">7 Day Free Trial Included</span>
                                </div>

                                <div className="flex items-center gap-3 lg:inline-flex lg:gap-2 bg-gray-100 rounded-full px-4 lg:px-3 py-3 lg:py-2 lg:w-auto lg:justify-center shadow-sm">
                                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0">
                                        <FaCheck className="w-3 h-3" />
                                    </span>
                                    <span className="text-gray-700 text-sm lg:text-xs xl:text-sm">Money Back Guaranteed</span>
                                </div>
                            </div>
                        </div>

                        <button className="bg-green-700 hover:bg-green-800 w-[95%] mx-auto block rounded-2xl lg:rounded-3xl mt-3 px-5 py-4 lg:py-5 text-white font-semibold cursor-pointer hover:scale-95 transition-all duration-300 hover:shadow-xl text-base lg:text-lg">
                            Claim Your Spot
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Claim