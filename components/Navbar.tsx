"use client";
import { Socials } from "@/constants"
import Image from "next/image";
import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      className="fixed top-0 z-[30] w-full h-[80px]  flex justify-between items-center px-10 md:px-20
     border bg-black border-white rounded-lg"
      style={{ zIndex: 20 }} // Add z-index to ensure the navbar appears above other content
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
        <h1 className=" text-white text-[25px] font-semibold">
          ZAHEER{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            PORTFOLIO
          </span>
        </h1>
      </div>
      <div>
        <Navigation />
      </div>
      <div className="flex flex-row gap-7 mb-2 ">
        {Socials.map((social) => (
         <Link key={social.name} href={social.link} target="_blank">
         <Image
           src={social.src}
           alt={social.name}
           width={28}
           height={28}
         />
       </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
