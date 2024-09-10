"use client";

import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Footer from "../components/footer";
import Contact from "../components/Contact";
import Project from "../components/project";
import Skill from "../components/skill";
import Image from "next/image";
import TestimonialsAndFAQs from "../components/Testimonial";
import Chaticon from "../components/chatbot";

export default function Main() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url(/main.jpg)" }}
    >
      <div id="home" className="h-screen relative">
        <Navbar />
        <Home />
      </div>
      <div id="services" className="min-h-screen">
        <Services />
      </div>
      <div id="skills" className="min-h-screen">
        <Skill />
      </div>
      <div id="projects" className="min-h-screen">
        <Project />
      </div>
      <div id="contact" className="min-h-screen">
        <Contact />
      </div>
      <div id="testimonials-faqs" className="min-h-screen">
        <TestimonialsAndFAQs />
      </div>
      <Footer />
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

      <Chaticon />
    </main>
  );
}
