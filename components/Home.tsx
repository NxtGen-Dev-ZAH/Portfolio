import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Terminal, Brain, Cloud, Code } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const specialties = [
    { icon: <Brain className="w-5 h-5" />, text: "AI/ML Solutions" },
    { icon: <Terminal className="w-5 h-5" />, text: "Generative AI" },
    { icon: <Cloud className="w-5 h-5" />, text: "Cloud Architecture" },
    { icon: <Code className="w-5 h-5" />, text: "Full-Stack Development" },
  ];

  return (
    <div className="flex items-center w-full min-h-screen bg-gradient-to-b from-black to-purple-950/20 px-4 md:px-20">
      <div className="w-full max-w-7xl mx-auto py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-3/5">
            <motion.div
              ref={ref}
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-purple-500/10 rounded-full">
                <span className="text-purple-300 font-medium">
                  AI/ML Engineer
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                  Zaheer Ahmed
                </span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed">
                Specialized in developing cutting-edge AI solutions and ML
                systems. I bridge the gap between innovative AI technologies and
                practical business applications, creating scalable solutions
                that drive real-world impact.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {specialties.map((specialty, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    {specialty.icon}
                    <span>{specialty.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all duration-200"
                >
                  View Projects
                </Link>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 font-medium rounded-lg transition-all duration-200"
                >
                  Let's Connect
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
            }
            transition={{ duration: 1 }}
            className="relative w-full md:w-2/5"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-purple-500 animate-pulse" />
              <div className="absolute inset-4 rounded-full border-2 border-blue-600" />
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src="/profilepicmain.png"
                  alt="Zaheer Ahmed - AI/ML Engineer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
