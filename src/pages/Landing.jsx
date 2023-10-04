import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Analytics from "../components/Analytics";
import Newsletter from "../components/Newsletter";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Cards />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Landing;
