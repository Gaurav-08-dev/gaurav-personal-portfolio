"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";


const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-24 md:mt-40 w-full z-[20] gap-8 md:gap-0"
    >
      {/* Left: Text content */}
      <div className="h-full w-full flex flex-col gap-5 justify-center text-center md:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9] self-center md:self-start"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] pr-1">Welcome aboard!</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-full md:max-w-[600px] w-auto h-auto"
        >
          <span>
            Hey!
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              I&apos;m Gaurav{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-full md:max-w-[600px]"
        >
          I&apos;m a Frontend Engineer with experience in building webapps and currently learning MERN stack. Check out my projects and skills
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] self-center md:self-start"
          href="https://github.com/Gaurav-08-dev"
          target="_blank"
        >
          Learn More!
        </motion.a>
      </div>

      {/* Right: Illustration — smaller on mobile */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-6 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="w-[280px] h-[280px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px]"
        />
      </motion.div>
    </motion.div>

  );
};

export default HeroContent;
