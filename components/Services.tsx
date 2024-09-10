// SERVICES.TSX
import Image from "next/image";
import React, { useState, useRef } from "react";
import { RxEyeOpen } from "react-icons/rx";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

interface Service {
  name: string;
  description: string[];
  image: string;
}

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState("Web Development");
  const handleServiceClick = (service: string) => {
    setActiveService(service);
  };

  const services: Service[] = [
    {
      name: "Web Development",
      description: [
        "Modern web applications using Next.js, React.js, and JavaScript.",
        "Responsive, high-performance websites with a focus on SEO and user experience.",
        "E-commerce solutions and online store development.",
      ],
      image: "/website.jpg",
    },
    {
      name: "AI and Machine Learning",
      description: [
        "AI integration and implementation for immersive web experiences.",
        "Machine learning model development and deployment.",
        "Natural language processing and computer vision solutions.",
      ],
      image: "/aiml.jpg",
    },
    {
      name: "DevOps",
      description: [
        "Containerization using Docker.",
        "Orchestration using Kubernetes.",
        "Event-driven architecture using Kafka.",
        "Cloud computing solutions using AWS, Azure, or Google Cloud.",
      ],
      image: "/devops.jpg",
    },
    {
      name: "Data Science and Analytics",
      description: [
        "Data analysis and visualization using Python, NumPy, and Pandas.",
        "Data mining and insights extraction.",
        "Statistical modeling and predictive analytics.",
      ],
      image: "/data-science.jpg",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      style={{ backgroundImage: "url(/BG-2.jpg)" }}
      className="min-h-screen w-full p-4 md:p-20 bg-clip bg-cover"
    >
      <motion.h1
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, staggerChildren: 0.1 }}
        className="font-semibold tracking-wide text-white text-3xl md:text-5xl mb-3 md:pt-4 pt-12 text-center"
      >
        {["O", "u", "r", " ", "S", "e", "r", "v", "i", "c", "e", "s"].map(
          (letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: 10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
              transition={{ duration: 2, delay: index * 0.1 }}
            >
              {letter}
            </motion.span>
          )
        )}
      </motion.h1>
      <p className="text-gray-200 text-base md:text-lg font-medium md:font-semibold mb-4 text-center">
        As a full-stack developer and AI enthusiast, I offer a range of services
        to help businesses and individuals achieve their goals.
        <br />
        <span className="text-gray-400 font-normal">
          Here are some of the services I provide:
        </span>
      </p>
      <motion.div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 mb-8 md:gap-10 md:mb-4"
                  ref={ref}
       initial={{ opacity: 0, y: 50 }}
       animate={ isInView ? { opacity: 1, y: 0 ,scale:1}: { scale: 0.5, opacity: 0.5 }}
       transition={{ duration: 0.5 ,delay:0.2}}
     >
        {services.map((service) => (
          <button
            key={service.name}

            className={`${
              activeService === service.name.toLowerCase()
                ? "bg-purple-800 rounded-br-3xl rounded-tl-3xl font-extrabold ring-2 ring-offset-2 ring-offset-gray-300"
                : "bg-purple-600 hover:bg-purple-700"
            } text-white font-semibold py-2 px-4 rounded w-full sm:w-40 md:w-56`}
            onClick={() => handleServiceClick(service.name.toLowerCase())}
          >
            {service.name}
          </button>
        ))}
      </motion.div>
      {services.map((service) => (
        <div
          key={service.name}
          className={
            activeService === service.name.toLowerCase() ? "block" : "hidden"
          }
        >
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="w-full md:w-2/3">
              <h2 className="text-white text-2xl font-bold mb-4">
                {service.name}
              </h2>
              <ul className="text-white list-disc pl-8">
                {service.description.map((item, index) => (
                  <li className="mb-2" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-2/4 md:w-1/5">
              <div className="relative w-full h-48 md:h-64 rounded-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center text-center md:mb-0 mb-4">
            <Link href="#contact">
              <button className="flex gap-2 items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-6 ring-2 ring-offset-1 ring-offset-gray-300">
                Let's Chat
                <RxEyeOpen size={24} color="#fff" />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
