"use client";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Contact from "@/components/page";
import Project from "@/components/project";
import Skill from "@/components/skill";
import Image from "next/image";

export default function Main() {
  return (
    <main className="w-screen h-screen relative overflow-y-auto">
      <div>
        <Navbar />
      </div>
      <div id="home">
        {" "}
        <Home />
      </div>
      <div id="skills">
        {" "}
        <Skill />
      </div>
      <div id="projects">
        {" "}
        <Project />
      </div>
      <div id="contact">
        {" "}
        <Contact />
      </div>
      <div>
        <Footer/>
      </div>
     

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={600}
        className="absolute top-0 left-0 z-[10]"
      />
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={600}
        className="absolute top-0 right-0 z-[10]"
      />
    </main>
  );
}
