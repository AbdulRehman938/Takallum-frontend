import React from 'react'

const Footer = () => {
  return (
    <div className="text-black w-[95%] mx-auto px-6 sm:px-10 lg:px-20 py-8 sm:py-12 bg-gray/20 rounded-t-3xl flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0">
      
      {/* Left: Logo + tagline */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <img
          src="public/logo.png"
          alt="logo"
          className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto"
        />
        <p className="text-gray/90 text-sm sm:text-base md:text-lg mt-2">
          Master Arabic. Understand the Qur'an.
        </p>
      </div>

      {/* Right: Links */}
      <div className="flex justify-center sm:justify-end w-full sm:w-auto">
        <ul className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-8 md:gap-10 text-gray/90 text-sm sm:text-base md:text-lg">
          <li className="cursor-pointer hover:text-black hover:scale-105 ease-in-out duration-300">Feature</li>
          <li className="cursor-pointer hover:text-black hover:scale-105 ease-in-out duration-300">Pricing</li>
          <li className="cursor-pointer hover:text-black hover:scale-105 ease-in-out duration-300">Contact</li>
          <li className="cursor-pointer hover:text-black hover:scale-105 ease-in-out duration-300">FAQ</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
