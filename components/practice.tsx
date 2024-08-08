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
   
  ];

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      style={{ backgroundImage: "url(/BG-2.jpg)" }}
      className="h-screen w-screen p-5 bg-clip bg-cover"
    >
      <motion.h1
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, staggerChildren: 0.1 }}
        className="font-semibold tracking-wide text-white text-[50px] pt-14 ml-10"
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
      <p className="text-gray-200 pt-2 ml-14 text-lg font-semibold">
        As a full-stack developer and AI enthusiast, I offer a range of services
        to help businesses and individuals achieve their goals.
        <br />
        Here are some of the services I provide:
      </p>
      <div className="relative flex flex-col pt-1 ml-4 mr-4 mt-5 md:ml-20 md:mr-20">
        <div className="flex flex-wrap justify-center md:mb-4 mb-2 md:gap-5 gap-2">
          {services.map((service) => (
            <button
              key={service.name}
              className={`${
                activeService === service.name.toLowerCase()
                  ? "bg-purple-800 rounded-br-3xl rounded-tl-3xl font-extrabold ring-2 ring-offset-2 ring-offset-purple"
                  : "bg-purple-500 hover:bg-purple-700"
              } text-white font-semibold py-2 px-4 rounded w-40 md:w-56`}
              onClick={() => handleServiceClick(service.name.toLowerCase())}
            >
              {service.name}
            </button>
          ))}
        </div>

        {services.map((service) => (
          <div
            key={service.name}
            className={
              activeService === service.name.toLowerCase()
                ? "text-lg"
                : "hidden"
            }
          >
            <div className="flex flex-col justify-center md:gap-5  m-4 md:w-2/3">
              <h2 className="text-white text-2xl font-bold ml-8 md:ml-16">
                {service.name}
              </h2>
              <ol className="text-white ml-10 md:ml-24 list-disc">
                {service.description.map((item, index) => (
                  <li className="mt-2" key={index}>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <div className="relative flex justify-center md:absolute md:top-28 md:bottom-32 md:left-3/4 md:right-0 md:border-y-2 md:w-56 md:h-48 rounded-full overflow-hidden">
              <div
                className="bg-cover bg-center h-full w-full md:h-full"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
            </div>
            <div className="flex justify-center w-full md:w-4/6">
              <Link href="#contact">
                <button className="flex gap-2 items-center justify-center bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-2 ring-2 ring-offset-1 ring-offset-purple">
                  Let's Chat
                  <RxEyeOpen size={24} color="#fff" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
