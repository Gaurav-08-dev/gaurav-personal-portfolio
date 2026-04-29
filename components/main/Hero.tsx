import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full" id="about-me">
      {/* Video background — hidden on mobile to save bandwidth and avoid layout issues */}
      <video
        autoPlay
        muted
        loop
        className="hidden md:block rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
