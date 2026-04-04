import React from "react";
import Particle from "../Particle";
import HeroSection from "./HeroSection";
import IntroductionSection from "./IntroductionSection";

function Home() {
  return (
    <main id="home" className="home-main">
      <Particle />
      <HeroSection />
      <IntroductionSection />
    </main>
  );
}

export default Home;