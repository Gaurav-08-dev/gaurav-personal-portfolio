import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";


const Navbar = () => {
  return (
    <div
      className="w-full 
    h-[65px] fixed top-0 shadow-[#2A0E61]/50 bg-[#03001417] 
    backdrop-blur-md z-50 px-10"
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto
        flex flex-row items-center
        "
        >
          <Image
            src="/glaxy.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          {/* <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Gaurav Singh
          </span> */}
        </a>

        <div
          className="w-[500px] h-full flex 
        flex-row items-center justify-between md:mr-20"
        >
          <div
            className="flex items-center justify-between w-full h-auto border border-[#7842f861] bg=[#0300145e] mr-[15px] px-[20px]
            py-[10px] rounded-full text-gray-200
            "
          >
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.href} key={social.name} title={social.name} target="_blank">
              {social.name === "Linkedin" && (
                <CiLinkedin style={{ color: "white" }} size={"2rem"} />
              )}

              {social.name === "Twitter" && (
                <CiTwitter style={{ color: "white" }} size={"2rem"} />
              )}

              {social.name === "Github" && (
                <FiGithub style={{ color: "white" }} size={"2rem"} />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
