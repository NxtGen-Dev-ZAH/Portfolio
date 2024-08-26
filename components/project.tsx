"use client";

import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";

const Project = () => {
  return (
    <div
      style={{ backgroundImage: "url(/BG-2.jpg)" }}
      className="w-full min-h-screen flex items-center justify-center bg-center bg-cover"
    >
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
    </div>
  );
};

export default Project;
