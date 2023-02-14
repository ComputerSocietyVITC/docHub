import * as React from "react";
import "../../css/gradients.css";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import "../../css/gradients.css";
import { SocialMediaIcon } from "./footer";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = (): JSX.Element => {
  return (
    <>
      <nav className="gradient-navbar flex h-12 items-center justify-between bg-gradient-to-l px-4">
        <a href="/">
          <section className="sm:hiden font-Plex font-bold uppercase text-white hover:underline">
            IEEE Computer Society
          </section>
        </a>

        <section className="hidden md:block lg:block">
          <StaticImage
            src={"../images/icon.svg"}
            alt="Computer Society Logo"
            className="h-12 w-12"
          />
        </section>
        <section className="flex gap-2">
          <SocialMediaIcon
            icon={<AiFillGithub />}
            link={"https://github.com/ComputerSocietyVITC"}
          />
          <SocialMediaIcon
            icon={<AiOutlineInstagram />}
            link={"https://instagram.com/comsoc.vitcc"}
          />
        </section>
      </nav>
      <section className="h-1 rounded-md bg-gradient-to-r from-primary to-[#c5da45]" />
    </>
  );
};

export default Navbar;
