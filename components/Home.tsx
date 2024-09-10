// HOME.TSX
"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Box from "@mui/material/Box";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="flex items-center  w-full h-screen bg-transparent px-4 md:px-20">
      <div className="w-full max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row items-center justify-between ">
          <Box className="w-full md:w-1/2 mb-8 md:mb-0">
            <motion.h1
              ref={ref}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
              }
              transition={{ duration: 2 }}
              className="text-3xl md:text-5xl text-white font-semibold mb-4"
            >
              HI, I AM&nbsp;
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-700 to-purple-500"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 2, delay: 1 }}
              >
                ZAHEER AHMED
              </motion.span>
            </motion.h1>
            <p className="text-gray-200 text-base md:text-lg font-medium mb-6">
              Explore my portfolio to see examples of my work and understand the
              depths of my capabilities. <br />
              Contact me to discuss your project and see how my skills can bring
              your vision to life.
            </p>
            <Box className="md:hidden flex justify-center mb-6">
              <Box className="w-48 h-48 border-y-4 border-purple-700 rounded-full ">
                <Image
                  src="/mypicx.png"
                  alt="Profile Picture"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </Box>
            </Box>

            <Box className="flex flex-col md:flex-row gap-4 md:gap-6">
              <a
                href="#services"
                className="rounded-[20px] bg-black bg-opacity-15 hover:bg-purple-950 border-2 border-purple-500 px-4 py-2 text-sm md:text-lg text-gray-200 font-bold  text-center"
              >
                My Services
              </a>
              <a
                href="#skills"
                className="rounded-[20px] bg-black bg-opacity-15 hover:bg-purple-950 border-2 border-purple-500 px-4 py-2 text-sm md:text-lg text-gray-200 font-bold text-center"
              >
                Learn more
              </a>
              <a
                href="#projects"
                className="rounded-[20px] bg-black bg-opacity-15 hover:bg-purple-950 border-2 border-purple-500 px-4 py-2 text-sm md:text-lg text-gray-200 font-bold text-center"
              >
                My projects
              </a>
              <a
                href="#contact"
                className="rounded-[20px] bg-black bg-opacity-15 hover:bg-purple-950 border-2 border-purple-500 px-4 py-2 text-sm md:text-lg text-gray-200 font-bold text-center"
              >
                Contact me
              </a>
            </Box>
          </Box>
          <div className="hidden md:flex w-full md:w-1/2  justify-center">
            <div className="w-48 h-48 md:w-80 md:h-80 border-y-4 relative  border-purple-700 rounded-full overflow-hidden">
              <Image
                src="/mypicx.png"
                alt="Profile Picture"
                // width={224}
                // height={224}
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
