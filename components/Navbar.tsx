"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set the state based on current window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="fixed top-0 z-[30] w-full h-[80px] flex justify-between items-center px-5 md:px-20
     border bg-black border-white rounded-lg"
      style={{ zIndex: 20 }}
    >
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Image
            src="/logoport.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-auto h-auto object-contain rounded-full "
          />
        </div>
        <h1 className="text-white text-[18px] md:text-[25px] font-semibold">
          ZAHEER{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            PORTFOLIO
          </span>
        </h1>
      </div>
      <div className="hidden md:flex flex-grow justify-center">
        <Navigation onLinkClick={closeMenu} />
      </div>
      <div className="hidden md:flex flex-row gap-3 md:gap-7">
        {Socials.map((social) => (
          <Link key={social.name} href={social.link} target="_blank">
            <Image
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
              className="filter invert-0"
            />
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>
      {isOpen && isMobile && (
        <div className="absolute top-[80px] left-0 w-full bg-black flex flex-col items-center transition-all duration-300 ease-in-out">
          <Navigation onLinkClick={closeMenu} />
          <div className="flex justify-center gap-5 mt-5 mb-5">
            {Socials.map((social) => (
              <Link key={social.name} href={social.link} target="_blank">
                <Image
                  src={social.src}
                  alt={social.name}
                  width={28}
                  height={28}
                  className="filter invert-0"
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
