import { NavLinks } from "@/constants";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/homee");

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);
  return (
    <div
      style={{ left: "40%" }}
      className="absolute z-[50] -bottom-16 w-fit md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center  py-7"
    >
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <a
          key={nav.name}
          href={nav.link} 
          className="mb-16 pl-4 min-w-[20%]"
        >
          <nav.icon
            className={`w-[24px] h-[24px] ${
              path === nav.name ? "text-purple-800" : "text-white"
            }`}
          />
          
        </a>
      ))}
    </div>
  );
};

export default Navigation;
