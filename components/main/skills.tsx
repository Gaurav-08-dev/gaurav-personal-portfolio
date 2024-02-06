import { Frontend_skill } from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvide";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />
      <div
        className="flex 
      flex-row justify-around 
      flex-wrap mt-4 gap-5 items-center"
      >
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            height={image.height}
            width={image.width}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div
          className="w-full h-full z-[-10] opacity-50 absolute flex items-center justify-center bg-cover"
        >
          <video
            className="w-full h-full"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
