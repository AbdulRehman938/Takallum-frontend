import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { TiTick } from 'react-icons/ti'

const Connect = () => {
  const [activeTab, setActiveTab] = useState("tutor")

  return (
    <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* --- Top Section --- */}
      <div className="w-full bg-white rounded-xl p-6 lg:w-[100rem] lg:p-12 flex flex-col lg:flex-row items-start gap-8 lg:gap-[20rem]">
        {/* Right: text */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-start gap-4 text-black">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm bg-red-50 text-red-600 px-3 py-1 rounded-full">
            <FaHeart className="text-red-600" />
            Understand the Qur'an
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Connect with <span className="text-secondaryDefault">Sacred Texts</span>
          </h2>

          <p className="text-gray text-sm sm:text-base md:text-lg max-w-[640px]">
            Build your Arabic foundation through the Qur'an and Hadith translation to master grammar naturally
          </p>

            <div className="mt-3 sm:mt-4 flex flex-col gap-4 max-w-[640px]">
                        <div>
                            <span className="inline-block bg-secondary-100 text-secondaryDefault px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm">Sacred Texts</span>
                            <h4 className="font-semibold text-base sm:text-lg md:text-2xl mt-2">Learn Arabic Through the Qur&apos;an & Hadith</h4>
                            <p className="text-gray text-xs sm:text-sm md:text-base">Translate real verses and sayings — right from Level 1. Build fluency while deepening your spiritual understanding.</p>
                        </div>

                        <div>
                            <span className="inline-block bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-sm">Grammar Made Simple</span>
                            <h4 className="font-semibold text-base sm:text-lg md:text-2xl mt-2">Master Grammar, Naturally</h4>
                            <p className="text-gray text-xs sm:text-sm md:text-base">From verb conjugation to sentence formation — we blend structured grammar drills with fun, interactive learning.</p>
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
              src="/App Screen (1).png"
              alt="mockup"
              className="relative z-10 w-[70%] sm:w-[60%] md:w-[55%] lg:w-[50%] object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* --- Bottom Section --- */}
      <div id="bottom" className="w-full mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-black">
            Smarter Than a Textbook, <br />{" "}
            <span className="text-secondaryDefault">Cheaper</span> Than a Tutor.
          </h2>
          <p className="text-center text-gray mt-3 max-w-2xl mx-auto">
            Get an AI-powered Arabic learning system that adapts to your pace, tracks progress, and teaches Qur'anic comprehension
          </p>

          {/* ---- Desktop: 3-column comparison ---- */}
          <div className="hidden md:flex relative mt-12">
            <div className="bg-gray/10 text-black rounded-2xl shadow-lg flex justify-between h-[33rem] items-center w-full">
              {/* Features */}
              <div className="h-full w-[33.4%] py-10 pl-10">
                <h1 className="font-bold text-3xl">Feature</h1>
                <ul className="flex flex-col gap-7 mt-20">
                  <li className="font-semibold text-black text-xl border-b-2 w-full border-b-gray/30 pb-5">Cost</li>
                  <li className="font-semibold text-black text-xl border-b-2 w-full border-b-gray/30 pb-5">Adapts to you in real-time</li>
                  <li className="font-semibold text-black text-xl border-b-2 w-full border-b-gray/30 pb-5">24/7 Access</li>
                  <li className="font-semibold text-black text-xl border-b-2 w-full border-b-gray/30 pb-5">Personalised Flashcards</li>
                  <li className="font-semibold text-black text-xl w-full pb-5">Qur'anic Focus</li>
                </ul>
              </div>

              {/* Private Tutor */}
              <div className="h-full w-[42%] py-10">
                <h1 className="font-bold text-3xl pl-10">
                  Private Tutor <br />{" "}
                  <span className="text-lg font-bold text-gray/70">Traditional Approach</span>
                </h1>
                <ul className="flex flex-col gap-7 mt-[2.8rem]">
                  <li className="font-semibold text-black/50 text-xl border-b-2 border-b-gray/30 pb-[1.1rem] pl-10 flex">
                    <RxCross2 className="text-red-500 text-3xl p-1 rounded-full bg-red-200 mr-3" /> $10+<span>/hour</span>
                  </li>
                  <li className="font-semibold text-black/50 text-xl border-b-2 border-b-gray/30 pb-[1.1rem] pl-10 flex">
                    <RxCross2 className="text-red-500 text-3xl p-1 rounded-full bg-red-200 mr-3" /> No
                  </li>
                  <li className="font-semibold text-black/50 text-xl border-b-2 border-b-gray/30 pb-[1.15rem] pl-10 flex">
                    <RxCross2 className="text-red-500 text-3xl p-1 rounded-full bg-red-200 mr-3" /> Limited
                  </li>
                  <li className="font-semibold text-black/50 text-xl border-b-2 border-b-gray/30 pb-[1.1rem] pl-10 flex">
                    <RxCross2 className="text-red-500 text-3xl p-1 rounded-full bg-red-200 mr-3" /> Limited
                  </li>
                  <li className="font-semibold text-black/50 text-xl w-full pl-10 flex">
                    <RxCross2 className="text-yellow-500 text-3xl p-1 rounded-full bg-yellow-100 mr-3" /> Rarely
                  </li>
                </ul>
              </div>

              {/* Smart Learning */}
              <div className="h-[110%] drop-shadow-2xl w-[28%] py-10 bg-white rounded-3xl">
                <div className="font-bold text-xl pl-10">
                  <img src="public/logo.png" alt="logo" />
                  <h1>Smart Learning System</h1>
                </div>
                <ul className="flex flex-col gap-7 mt-[2.4rem] pr-10">
                  <li className="font-semibold text-black/50 text-xl w-full pb-[1.1rem] pl-10 flex">
                    <TiTick className="text-secondaryDefault text-3xl p-1 rounded-full bg-secondary-200 mr-3" /> $6.99<span>/month</span>
                  </li>
                  <li className="font-semibold text-black/50 text-xl w-full pb-[1.1rem] pl-10 flex">
                    <TiTick className="text-secondaryDefault text-3xl p-1 rounded-full bg-secondary-200 mr-3" /> Yes
                  </li>
                  <li className="font-semibold text-black/50 text-xl w-full pb-[1.15rem] pl-10 flex">
                    <TiTick className="text-secondaryDefault text-3xl p-1 rounded-full bg-secondary-200 mr-3" /> Anytime, Anywhere
                  </li>
                  <li className="font-semibold text-black/50 text-xl w-full pb-[1.15rem] pl-10 flex">
                    <TiTick className="text-secondaryDefault text-3xl p-1 rounded-full bg-secondary-200 mr-3" /> Anytime, Anywhere
                  </li>
                  <li className="font-semibold text-black/50 text-xl w-full pl-10 flex">
                    <TiTick className="text-secondaryDefault text-3xl p-1 rounded-full bg-secondary-200 mr-3" /> Built from Day One
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ---- Mobile: Tabs ---- */}
          <div className="md:hidden mt-10">
            {/* Tabs */}
            <div className="flex justify-center gap-6 border-b border-gray-300 pb-2">
              <button
                onClick={() => setActiveTab("tutor")}
                className={`pb-2 text-sm text-black font-semibold ${activeTab === "tutor" ? "text-secondaryDefault border-b-2 border-secondaryDefault" : "text-gray-500"}`}
              >
                Private Tutor
              </button>
              <button
                onClick={() => setActiveTab("smart")}
                className={`pb-2 text-sm text-black font-semibold flex items-center gap-1 ${activeTab === "smart" ? "text-secondaryDefault border-b-2 border-secondaryDefault" : "text-gray-500"}`}
              >
                <img src="public/logo.png" alt="logo" className="w-5 h-5" />
                Smart
              </button>
            </div>

            {/* Panel */}
            <div className="mt-6 bg-gray/10 rounded-2xl shadow-md p-6 flex">
              {/* Features */}
              <div className="w-1/2 text-black">
                <h1 className="font-bold text-lg">Features</h1>
                <ul className="flex flex-col gap-4 mt-6 text-sm">
                  <li>Cost</li>
                  <li>Adapts in real-time</li>
                  <li>24/7 Access</li>
                  <li>Flashcards</li>
                  <li>Qur'anic Focus</li>
                </ul>
              </div>

              {/* Active column */}
              <div className="w-1/2">
                {activeTab === "tutor" ? (
                  <ul className="flex flex-col gap-4 mt-[2.4rem] text-sm text-black">
                    <li className="flex items-center"><RxCross2 className="text-red-500 mr-2" /> $10+/hr</li>
                    <li className="flex items-center"><RxCross2 className="text-red-500 mr-2" /> No</li>
                    <li className="flex items-center"><RxCross2 className="text-red-500 mr-2" /> Limited</li>
                    <li className="flex items-center"><RxCross2 className="text-red-500 mr-2" /> Limited</li>
                    <li className="flex items-center"><RxCross2 className="text-yellow-500 mr-2" /> Rarely</li>
                  </ul>
                ) : (
                  <ul className="flex flex-col gap-4 mt-[2.4rem] text-sm text-black">
                    <li className="flex items-center"><TiTick className="text-secondaryDefault mr-2" /> $6.99/mo</li>
                    <li className="flex items-center"><TiTick className="text-secondaryDefault mr-2" /> Yes</li>
                    <li className="flex items-center"><TiTick className="text-secondaryDefault mr-2" /> Anytime</li>
                    <li className="flex items-center"><TiTick className="text-secondaryDefault mr-2" /> Anywhere</li>
                    <li className="flex items-center"><TiTick className="text-secondaryDefault mr-2" /> Built in</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect
