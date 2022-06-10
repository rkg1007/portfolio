import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navlink from "./Navlink";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, [pathname]);

  return (
    <div className="flex justify-between p-4">
      <div className="text-xl font-bold underline text-green">{activeItem}</div>
      <div className="space-x-6 underline">
        <Navlink
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <Navlink
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <Navlink
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
