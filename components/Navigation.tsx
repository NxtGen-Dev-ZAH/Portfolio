import React, { useEffect, useState } from "react";
import {
  RxHome,
  RxPerson,
  RxDashboard,
  RxClipboard,
  RxGear,
} from "react-icons/rx";

const NavLinks = [
  {
    name: "Home",
    icon: RxHome,
    link: "#home",
  },
  {
    name: "Services",
    icon: RxGear,
    link: "#services",
  },
  {
    name: "Skills",
    icon: RxPerson,
    link: "#skills",
  },
  {
    name: "Projects",
    icon: RxDashboard,
    link: "#projects",
  },
  {
    name: "Contact Me",
    icon: RxClipboard,
    link: "#contact",
  },
];

const Navigation: React.FC = () => {
  const [activelink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let currentLink = "";
      NavLinks.forEach((nav) => {
        const section = document.querySelector(nav.link);
        if (
          section &&
          section.getBoundingClientRect().top <= 60 &&
          section.getBoundingClientRect().bottom > 100
        ) {
          currentLink = nav.link;
        }
      });
      setActiveLink(currentLink);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (link: string) => {
    setActiveLink(link);
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full md:w-auto py-2 md:py-0">
      {NavLinks.map((nav) => (
        <a
          key={nav.name}
          href={nav.link}
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            handleClick(nav.link);
          }}
          className={`mb-2 md:mb-0 md:ml-2 flex items-center justify-center md:justify-start min-w-[120px] md:min-w-[100px] text-center md:text-left pt-2 md:pt-0 pb-1 border-b-2
            ${
              activelink === nav.link
                ? "text-purple-800 border-purple-700 font-bold"
                : "text-white border-transparent hover:border-purple-700 hover:text-purple-800"
            }`}
        >
          <nav.icon className="w-[20px] h-[20px] mr-2" />
          {nav.name}
        </a>
      ))}
    </div>
  );
};

export default Navigation;
