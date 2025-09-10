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
    <div className="bg-white text-white w-full min-h-screen flex flex-col gap-y-0 justify-center items-center overflow-x-hidden">
      <Header />

      <div className="flex flex-col gap-y-0">
        <Hero />
      </div>

      <Mockup />
      <Activity />
      <Connect />
      <Claim />
      <Footer />
    </div>
  );
};

export default Home;
