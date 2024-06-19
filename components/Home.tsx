"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      className="flex items-center w-full h-full bg-cover bg-center"
      style={{ backgroundImage: "url(/main.jpg)" }}
    >
      {isMobile ? (
        // Mobile View
        <Box className="h-screen pl-5 pt-4 pr-5 flex flex-col gap-5 z-[10] max-w-[830px]">
          <motion.h1
            ref={ref}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
            }
            transition={{ duration: 2 }}
            className="text-[30px] text-white font-semibold pt-24"
          >
            HI, I AM&nbsp;
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-700 to-red-500"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 2, delay: 1 }}
            >
              ZAHEER AHMED
            </motion.span>
          </motion.h1>
          <Typography className="text-gray-200 text-[16px] font-medium">
            Explore my portfolio to see examples of my work and understand the
            depths of my capabilities. Contact me to discuss your project and
            see how my skills can bring your vision to life.
          </Typography>
          <Box className="relative">
            <Box className="w-40 h-52 mx-auto border-y-2 rounded-full overflow-hidden mt-10">
              <Box
                className="bg-cover bg-center h-full"
                style={{ backgroundImage: `url('/mypicx.jpg')` }}
              ></Box>
            </Box>
          </Box>
          <Box className="flex flex-col gap-5 mt-10">
            <Link
              href="#services"
              className="rounded-[20px] group relative bg-purple-300 hover:bg-purple-200 border-2 border-red-500 px-5 py-3 text-base text-purple-800 font-bold max-w-full text-center"
            >
              My Services
            </Link>
            <Link
              href="#skills"
              className="rounded-[20px] group relative bg-purple-300 hover:bg-purple-200 border-2 border-red-500 px-5 py-3 text-base text-purple-800 font-bold max-w-full text-center"
            >
              Learn more
            </Link>
            <Link
              href="#projects"
              className="rounded-[20px] group relative bg-purple-300 hover:bg-purple-200 border-2 border-red-500 px-5 py-3 text-base text-purple-800 font-bold max-w-full text-center"
            >
              My projects
            </Link>
            <Link
              href="#contact"
              className="rounded-[20px] group relative bg-purple-300 hover:bg-purple-200 border-2 border-red-500 px-5 py-3 text-base text-purple-800 font-bold max-w-full text-center"
            >
              Contact me
            </Link>
          </Box>
        </Box>
      ) : (
        // Desktop View
        <Box className="hidden md:flex h-screen pl-20 pb-56 flex-col z-[10] max-w-[830px]">
          <motion.h1
            ref={ref}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
            }
            transition={{ duration: 2 }}
            className="text-4xl md:text-6xl text-white font-semibold pt-40"
          >
            HI, I AM&nbsp;
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-700 to-red-500"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 2, delay: 1 }}
            >
              ZAHEER AHMED
            </motion.span>
          </motion.h1>
          <Typography className="text-gray-200 text-[20px] font-medium block mt-5">
            Explore my portfolio to see examples of my work and understand the
            depths of my capabilities.
            <br /> Contact me to discuss your project and see how my skills can
            bring your vision to life.
          </Typography>
          <Box className="absolute top-28 bottom-32 left-3/4 right-0 border-y-2 w-56 rounded-full overflow-hidden">
            <Box
              className="bg-cover bg-center h-full"
              style={{ backgroundImage: `url('/mypicx.jpg')` }}
            ></Box>
          </Box>
          <Box className="flex flex-row gap-5 justify-between mt-7">
            <Link
              href="#services"
              className="rounded-[20px] group relative bg-purple-300 hover:bg-purple-200 border-2 border-red-500 px-5 py-3 text-lg text-purple-800 font-bold max-w-[200px]"
            >
              My Services
            </Link>
            <Link
              href="#skills"
              className="rounded-[20px] group relative bg-purple-300 hover:bg-purple-200 border-2 border-red-500 px-5 py-3 text-lg text-purple-800 font-bold max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="#projects"
              className="rounded-[20px] group relative bg-purple-300 hover:bg-purple-200 border-2 border-red-500 px-5 py-3 text-lg text-purple-800 font-bold max-w-[200px]"
            >
              My projects
            </Link>
            <Link
              href="#contact"
              className="rounded-[20px] group relative bg-purple-300 hover:bg-purple-200 border-2 border-red-500 px-5 py-3 text-lg text-purple-800 font-bold max-w-[200px]"
            >
              Contact me
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
}
