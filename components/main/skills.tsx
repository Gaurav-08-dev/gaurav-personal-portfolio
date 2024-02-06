import { Frontend_skill } from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvide";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
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
    </section>
  );
};

export default Skills;
