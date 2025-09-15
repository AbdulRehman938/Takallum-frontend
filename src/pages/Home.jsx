import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Mockup from "../components/Mockup";
import Activity from "../components/Activity";
import Connect from "../components/Connect";
import Claim from "../components/Claim";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-white text-white w-full min-h-screen overflow-x-hidden relative">
      <Header />

      {/* Hero Component - Fixed with lowest z-index */}
      <div className="fixed top-0 left-0 w-full z-0" style={{ height: "100vh" }}>
        <Hero />
      </div>

      {/* Spacer to push main content below fixed hero (smaller on mobile) */}
      <div className="h-[42vh] sm:h-[50vh] md:h-[100vh]"></div>

      {/* Wrapper div */}
      <div
        id="wrapper"
        className="bg-white flex flex-col items-center justify-center w-full relative z-10 transform-gpu will-change-transform"
      >
        <Mockup />
        <Activity />
        <Connect />
        <Claim />
        <Footer />
      </div>
    </div>
  );
};

export default Home;