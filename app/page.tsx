"use client";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Footer from "../components/footer";
import Contact from "../components/Contact";
import Project from "../components/project";
import Skill from "../components/skill";
import Image from "next/image";

export default function Main() {
  return (
    <main className="w-screen h-screen relative overflow-y-auto bg-gradient-to-r from-purple-900 via-pink-950 to-red-950">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="services">
        {" "}
        <Services />
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
        <Footer />
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
