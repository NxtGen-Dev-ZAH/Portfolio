// NAVBAR.TSX
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`h-[60px] md:h-[80px] fixed top-0 left-0 right-0 z-50
      w-full flex justify-center items-center
      px-4 sm:px-8 lg:px-16
      border-black border
      transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-opacity-80 bg-gray-950"
          : "bg-opacity-0 bg-transparent pointer-events-none"
      }`}
    >
      <div>
        <a href="#home">
          <Image
            src="/LOGO.png"
            alt="logo"
            width={200}
            height={50}
            className="object-cover rounded-full"
          />
        </a>
      </div>
      <div className="hidden md:flex flex-grow justify-center">
        <Navigation />
      </div>

      <div className="hidden md:flex flex-row gap-3 md:gap-7">
        {Socials.map((social) => (
          <Link key={social.name} href={social.link} target="_blank">
            <Image
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
              className="filter invert-0"
            />
          </Link>
        ))}
      </div>

      <div className="absolute right-4 sm:right-8 lg:right-16 md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-gray-800 md:hidden">
          <Navigation />
          {Socials.map((social) => (
            <Link key={social.name} href={social.link} target="_blank">
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="filter invert-0"
              />
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
