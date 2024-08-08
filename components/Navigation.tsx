import { NavLinks } from "@/constants";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type NavigationProps = {
  onLinkClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const Navigation: React.FC<NavigationProps> = ({ onLinkClick }) => {
  const [isRouting, setisRouting] = useState<boolean>(false);
  const path = usePathname();
  const [activelink, setActiveLink] = useState<string>("/home");

  useEffect(() => {
    if (path) {
      setActiveLink(path);
    }
  }, [path]);

  useEffect(() => {
    if (activelink !== path) {
      setisRouting(true);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [activelink, path]);
  const handleClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full md:w-auto py-2 md:py-0">
      {NavLinks.map((nav) => (
        <Link
          key={nav.name}
          href={nav.link}
          onClick={()=>handleClick(nav.link)} // Close dropdown on link click
          className={`mb-2 md:mb-0 md:ml-4 flex items-center justify-center md:justify-start min-w-[120px] md:min-w-[100px] text-center md:text-left pt-2 md:pt-0 pb-2  border-b-4
            ${
            activelink === nav.link ? "text-purple-800 border-purple-700 " : "text-white border-transparent hover:border-purple-700"
          }`}
        >
          <nav.icon className="w-[20px] h-[20px] mr-2" />
          <span className={` ${
            activelink === nav.link ? "text-base md:text-lg font-bold" : "text-sm md:text-base"
          }`}>{nav.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
