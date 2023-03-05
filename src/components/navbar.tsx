import * as React from "react";
import "../../css/gradients.css";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import "../../css/gradients.css";
import { SocialMediaIcon } from "./footer";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = (): JSX.Element => {
  return (
    <>
      <nav className="h-18 grid grid-cols-3 items-center bg-darkshades-passive">
        <section className="justify-self-start md:block lg:block">
          <a href="/">
            <StaticImage
              src={"../images/icon.svg"}
              alt="Computer Society Logo"
              className="h-12 w-12"
            />
          </a>
        </section>
        <section className="m-2 justify-self-center font-Plex font-black text-white">
          <a className="text-4xl" href="/">
            docHub
          </a>
        </section>
        <section className="items-center flex justify-self-end">
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
      <section className="h-0.5 rounded-md bg-gradient-to-r from-primary to-[#3C99DC]" />
    </>
  );
};

export default Navbar;
