import * as React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
// @ts-ignore
import bannerLogo from "../images/banner-logo.png";

interface ISocialMediaInterface {
  icon: JSX.Element;
}

const SocialMediaIcon = (props: ISocialMediaInterface): JSX.Element => {
  return <section className="text-3xl text-white">{props?.icon}</section>;
};

const Footer = (): JSX.Element => {
  return (
    <>
      <footer className="border border-t-[1px] border-b-0 border-r-0 border-l-0 border-textcolors-boundary bg-darkshades-passive py-2">
        <section className="[x-2 grid grid-cols-12 ">
          <section className="col-span-3 col-start-1 items-center">
            <img
              src={bannerLogo}
              alt="IEEE Computer Society VITC"
              className="h-32 p-2"
            />
          </section>
          <section className="col-span-2 col-start-4">
            <section className="text-2xl font-bold text-white">
              Know more
            </section>
          </section>
          <section className="col-span-3 col-start-9">
            <section className="text-2xl font-bold text-white">
              Contact us
            </section>
            <section className="flex items-center justify-start gap-2">
              <SocialMediaIcon icon={<AiFillGithub />} />
              <SocialMediaIcon icon={<AiFillLinkedin />} />
              <SocialMediaIcon icon={<AiOutlineInstagram />} />
              <SocialMediaIcon icon={<AiOutlineTwitter />} />
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
