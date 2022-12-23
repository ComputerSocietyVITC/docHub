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

interface KnowMoreProps {
  name: string;
  link: string;
}

const SocialMediaIcon = (props: ISocialMediaInterface): JSX.Element => {
  return (
    <a href={props?.link}>
      <section className="text-3xl text-white">{props?.icon}</section>
    </a>
  );
};

const IconKnowMore = (props: KnowMoreProps) => {
  return (
    <>
      <section className="flex items-center justify-start gap-2 py-1 text-lg font-light text-white">
        <a href={props?.link}>{props?.name}</a>
        <IoOpenOutline className="hover:translate-x-2">
          <a href={props?.link}>{props?.name}</a>
        </IoOpenOutline>
      </section>
    </>
  );
};

const Footer = (): JSX.Element => {
  return (
    <>
      <footer className="border border-t-[1px] border-b-0 border-r-0 border-l-0 border-textcolors-boundary bg-darkshades-passive py-2 font-Plex">
        <section className="grid grid-cols-10">
          <section className="col-span-3 col-start-1 flex items-center">
            <img
              src={bannerLogo}
              alt="IEEE Computer Society VITC"
              className="my-8 h-28 px-2"
            />
          </section>
          <section className="col-span-2 col-start-4">
            <section className="text-white">
              <section className="font-extrabold text-2xl capitalize">Know more</section>
              <IconKnowMore
                link={"https://www.ieeecsvitc.com/"}
                name={"Our Website"}
              />
              <IconKnowMore
                link={"mailto:ieeecomputersociety@vit.ac.in"}
                name="Contact us"
              />
              <IconKnowMore link={"https://dev.to/ieeecsvitc"} name={"Blogs"} />
            </section>
          </section>
          <section className="col-span-2 col-start-8 ">
            <section className="text-2xl font-bold text-white">
              Contact us
            </section>
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
        </section>
        <section className="col-span-full flex justify-center font-Monty text-lg font-light text-white">
          IEEE Computer Society VIT Chennai © {new Date().getFullYear()}
        </section>
      </footer>
    </>
  );
};

export { Footer, ISocialMediaInterface, SocialMediaIcon };
