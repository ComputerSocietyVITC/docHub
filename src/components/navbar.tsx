import * as React from "react";
import "../../css/gradients.css";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
// @ts-ignore
import image from "../images/icon.png";
import "../../css/gradients.css";
import { SocialMediaIcon } from "./footer";

const Navbar = (): JSX.Element => {
  return (
    <>
      <nav className="top gradient-navbar sticky z-0 flex h-12 items-center justify-between bg-gradient-to-l px-4">
        <section className="font-Monty font-bold uppercase text-white">
          IEEE Computer Society
        </section>

        <img src={image} alt="Computer Society Logo" className="h-12 w-12" />
        <section className="flex gap-2">
          <SocialMediaIcon icon={<AiFillGithub />} />
          <SocialMediaIcon icon={<AiOutlineInstagram />} />
        </section>
      </nav>
      <section className="h-1 rounded-md bg-gradient-to-r from-primary to-[#c5da45]" />
    </>
  );
};

export default Navbar;
