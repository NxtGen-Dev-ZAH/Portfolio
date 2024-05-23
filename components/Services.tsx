import Image from "next/image";
import React, { useState } from "react";
import { RxEyeOpen } from "react-icons/rx"; // Import the communication icon

interface Service {
  name: string;
  description: string[];
  image: string;
}

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState("webDevelopment");

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
      image: "/web-development.jpg", // Image URL for Web Development
    },
    {
      name: "AI and Machine Learning",
      description: [
        "AI integration and implementation for immersive web experiences.",
        "Machine learning model development and deployment.",
        "Natural language processing and computer vision solutions.",
      ],
      image: "/ai-machine-learning.jpg", // Image URL for AI and Machine Learning
    },
    {
      name: "DevOps",
      description: [
        "Containerization using Docker.",
        "Orchestration using Kubernetes.",
        "Event-driven architecture using Kafka.",
        "Cloud computing solutions using AWS, Azure, or Google Cloud.",
      ],
      image: "/devops.jpg", // Image URL for DevOps
    },
    {
      name: "Data Science and Analytics",
      description: [
        "Data analysis and visualization using Python, NumPy, and Pandas.",
        "Data mining and insights extraction.",
        "Statistical modeling and predictive analytics.",
      ],
      image: "/data-science.jpg", // Image URL for Data Science and Analytics
    },
    // Add more services here
  ];

  return (
    <div className="bg-gradient-to-bl from-purple-800 via-purple-950 to-slate-900 h-screen w-screen p-5">
      <h1 className="font-semibold tracking-wide text-white text-[50px] pt-10 ml-10">
        Our Services
      </h1>
      <p className="text-gray-200 pt-2 ml-14 text-lg font-semibold">
        As a full-stack developer and AI enthusiast, I offer a range of services
        to help businesses and individuals achieve their goals.
        <br />
        Here are some of the services I provide:
      </p>
      <div className="relative flex flex-col border-red-500 border-2 pt-1 ml-20 mr-20 mt-5">
        <div className="flex justify-center mb-4 gap-5">
          {services.map((service) => (
            <button
              key={service.name}
              className={`${
                activeService === service.name.toLowerCase()
                  ? "bg-purple-800 rounded-br-3xl rounded-tl-3xl font-extrabold ring-2 ring-offset-2 ring-offset-purple"
                  : "bg-purple-500 hover:bg-purple-700"
              } text-white font-semibold py-2 px-4 rounded w-56`}
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
            <div className="flex flex-col justify-center gap-5 m-4 w-2/3">
              <h2 className="text-white text-2xl font-bold ml-16">
                {service.name}
              </h2>
              <ol className="text-white ml-24 list-disc">
                {service.description.map((item, index) => (
                  <li className="mt-2" key={index}>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <div className="absolute top-28 bottom-32 left-3/4 right-0 border-y-2 w-56 h-48 rounded-full overflow-hidden">
              <div
                className="bg-cover bg-center h-full"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
            </div>
            <div className="flex justify-center w-4/6">
              <button className="flex gap-2 items-center justify-center bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-2 ring-2 ring-offset-2 ring-offset-purple">
                Let's Chat
                <RxEyeOpen size={24} color="#fff" />{" "}
                {/* Use the communication icon */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
