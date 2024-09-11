// SKILLS.TSX
"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="bg-gradient-to-b from-black via-purple-950 to-slate-950 min-h-screen w-full flex items-center justify-center p-5 md:p-0">
      <div className="flex flex-col gap-8 md:gap-14 max-w-full md:max-w-[80%] text-center items-center">
        <div className="flex flex-col items-center gap-2">
          <motion.h1
            ref={ref}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
            }
            transition={{ duration: 2 }}
            className="font-semibold text-white hover:text-purple-700 text-4xl md:text-[50px] pt-10 md:pt-16"
          >
            Skills{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 2, delay: 1 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500"
            >
              {" "}
              & Technologies
            </motion.span>
          </motion.h1>
          <p className="text-white text-xl md:text-[20px] mt-2  ">
            Mastering the tools that shape the digital world
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h2 className="text-transparent bg-clip-text text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-red-400">
            I'm the Best Developer for the Job.
          </h2>
          <p className="text-white font-medium text-lg md:text-[24px] max-w-full md:max-w-[80%]">
            Whether you need a website that dazzles, an app that streamlines, or
            a backend that powers it all, I'm here to deliver. I combine
            technical expertise with creative problem-solving to craft digital
            experiences that exceed expectations.
          </p>
          <button className="bg-purple-600 text-black py-2 px-4 rounded-lg hover:bg-gradient-to-r from-purple-700 via-white to-purple-700 transition-all duration-100 mt-4 border-2 border-red-500">
            <Link href="#contact">Let's Collaborate</Link>
          </button>
        </div>

        <Swiper
          slidesPerView={4}
          breakpoints={{
            1024: {
              slidesPerView: 6,
            },
          }}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={2500}
          modules={[Autoplay]}
          className="w-full md:max-w-[80%] pb-6"
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
