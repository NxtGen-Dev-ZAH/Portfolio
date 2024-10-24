"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";

const Project = () => {
  // Show only first 3 projects in the preview section
  const previewProjects = Projects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      style={{ backgroundImage: "url(/BG-2.jpg)" }}
      className="w-full py-10 flex flex-col items-center justify-center space-y-4 bg-gradient-to-b from-black to-purple-950/20 "
    >
      {/* Section Header */}
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Featured
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 pl-4">
            Projects
          </span>
        </motion.h2>
      </div>
      {/* Projects Grid */}

      <div className="relative grid grid-cols-2  md:grid-cols-3 md:gap-5  md:max-w-[95%] md:max-h-[80%] md:pt-10">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>

      {/* View All Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12"
      >
        <a
          href="/projects"
          className="group inline-flex items-center gap-2 px-6 py-3  font-semibold text-xl
                     bg-purple-600/10 hover:bg-purple-700 
                     border border-purple-500 hover:border-purple-500/50 
                     rounded-lg transition-all duration-300
                     text-purple-300 hover:text-purple-200"
        >
          View All Projects
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
};

export default Project;
