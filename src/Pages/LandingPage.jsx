import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero Section/Hero";
import MusicWork from "../Components/Music Work Section/MusicWork";
import Community from "../Components/Community Section/Community";
import Discover from "../Components/Discover Section/Discover";
import Footer from "../Components/Footer Section/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MusicWork />
      <Community />
      <Discover />
      <Footer />
    </>
  );
};

export default LandingPage;
