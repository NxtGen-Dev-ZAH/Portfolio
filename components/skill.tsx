"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

const Skill = () => {
  return (
    <div
      // style={{ backgroundImage: "url(/bg-3.jpg)" }}
      className="bg-gradient-to-t from-purple-900 via-blue-950 to-slate-900 h-screen w-screen flex items-center justify-center "
    >
      <div className="flex flex-col gap-14 max-w-[80%] text-center items-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-semibold text-white  hover:text-purple-700 text-[50px] pt-10">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              &{" "}
            </span>
            Technologies
          </h1>
          <p className="text-white text-[20px]">
            Mastering the tools that shape the digital world
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h2 className="text-white text-3xl font-bold hover:text-purple-600 transition-colors duration-300">
            I'm the Best Developer for the Job.
          </h2>
          <p className="text-white font-semibold text-[24px]">
            Whether you need a website that dazzles, an app that streamlines, or
            a backend that powers it all, I'm here to deliver. I combine
            technical expertise with creative problem-solving to craft digital
            experiences that exceed expectations.
          </p>
          <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gradient-to-r from-purple-700 via-transparent to-purple-700 transition-all duration-100 mt-4 border-2 border-red-500  ">
          <Link
            href="#contact">
                      Let's Collaborate
              </Link>     
          </button>
        </div>

        
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            // reverseDirection: true,
          }}
          speed={2500}
          modules={[Autoplay]}
          className="max-w-[80%] pb-6"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Skill;
