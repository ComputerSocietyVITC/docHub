import * as React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";

// @ts-ignore
import bannerLogo from "../images/banner-logo.png";

interface ISocialMediaInterface {
  icon: JSX.Element;
  link: string;
}

const SocialMediaIcon = (props: ISocialMediaInterface): JSX.Element => {
  return (
    <a href={props?.link}>
      <section className="text-3xl text-white">{props?.icon}</section>
    </a>
  );
};

const Footer = (): JSX.Element => {
  return (
    <>
      <footer className="border border-t-[1px] border-b-0 border-r-0 border-l-0 border-textcolors-boundary bg-darkshades-passive py-2">
        <section className="grid grid-cols-10 ">
          <section className="col-span-3 col-start-1 items-center flex">
            <img
              src={bannerLogo}
              alt="IEEE Computer Society VITC"
              className="h-32 px-2 my-8"
            />
          </section>
          <section className="col-span-2 col-start-4">
            <section className="text-2xl font-bold text-white">
              Know more
              <section className="flex-col text-white text-lg font-light py-1">
                <a href="https://www.ieeecsvitc.com/">
                  Our Website <IoOpenOutline />
                </a>
              </section>
              <section className="flex-col text-white text-lg font-light py-1">
                <a href="mailto:ieeecomputersociety@vit.ac.in">
                  Contact us
                  <IoOpenOutline />
                </a>
              </section>
              <section className="flex-col text-white text-lg font-light py-1">
                <a href="https://dev.to/ieeecsvitc">
                  Blogs
                  <IoOpenOutline />
                </a>
              </section>
            </section>
          </section>
          <section className="col-span-2 col-start-9">
            <section className="text-2xl text-white">Contact us</section>
            <section className="flex items-center justify-start gap-2 py-2">
              <SocialMediaIcon
                icon={<FiGithub />}
                link={"https://github.com/ComputerSocietyVITC"}
              />
              <SocialMediaIcon
                icon={<FaLinkedin />}
                link={"https://github.com/ComputerSocietyVITC"}
              />
              <SocialMediaIcon
                icon={<AiOutlineInstagram />}
                link={"https://github.com/ComputerSocietyVITC"}
              />
              <SocialMediaIcon
                icon={<AiOutlineTwitter />}
                link={"https://github.com/ComputerSocietyVITC"}
              />
            </section>
          </section>
          <section className="col-span-full flex justify-center font-Monty text-lg font-light text-white">
            IEEE Computer Society VIT Chennai © {new Date().getFullYear()}
          </section>
        </section>
      </footer>
    </>
  );
};

export { Footer, ISocialMediaInterface, SocialMediaIcon };
