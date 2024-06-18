import { NavLinks } from "@/constants";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type NavigationProps = {
  onLinkClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const Navigation: React.FC<NavigationProps> = ({ onLinkClick }) => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/home");

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
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full md:w-auto py-5 md:py-0">
      {NavLinks.map((nav) => (
        <Link
          key={nav.name}
          href={nav.link}
          onClick={onLinkClick} // Close dropdown on link click
          className={`mb-3 md:mb-0 md:ml-4 flex items-center min-w-[20%] text-center md:text-left ${
            path === nav.link ? "text-purple-800 text-shadow-glow" : "text-white"
          }`}
        >
          <nav.icon className="w-[24px] h-[24px] mr-2" />
          <span className="ml-2 md:hidden">{nav.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
