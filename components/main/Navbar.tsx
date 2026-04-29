"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Socials } from "@/constants";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { FiGithub, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "#about-me", label: "About Me" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        {/* Logo */}
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/glaxy.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex flex-row items-center justify-between gap-6 h-auto border border-[#7842f861] bg=[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="cursor-pointer hover:text-violet-400 transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop social icons */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.href} key={social.name} title={social.name} target="_blank">
              {social.name === "Linkedin" && <CiLinkedin style={{ color: "white" }} size={"2rem"} />}
              {social.name === "Twitter" && <CiTwitter style={{ color: "white" }} size={"2rem"} />}
              {social.name === "Github" && <FiGithub style={{ color: "white" }} size={"2rem"} />}
            </a>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[65px] left-0 w-full bg-[#030014e0] backdrop-blur-md border-t border-[#7842f861] flex flex-col items-center gap-6 py-6 text-gray-200 z-50">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg cursor-pointer hover:text-violet-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-row gap-6 mt-2">
            {Socials.map((social) => (
              <a href={social.href} key={social.name} title={social.name} target="_blank">
                {social.name === "Linkedin" && <CiLinkedin style={{ color: "white" }} size={"2rem"} />}
                {social.name === "Twitter" && <CiTwitter style={{ color: "white" }} size={"2rem"} />}
                {social.name === "Github" && <FiGithub style={{ color: "white" }} size={"2rem"} />}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
