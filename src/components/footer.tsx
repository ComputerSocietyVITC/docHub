import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { IoOpenOutline } from "react-icons/io5";

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
        <a href={props?.link}>
          <IoOpenOutline className="hover:translate-x-2">
            {props?.name}
          </IoOpenOutline>
        </a>
      </section>
    </>
  );
};

const Footer = (): JSX.Element => {
  return (
    <>
      <footer className="border border-t-[1px] border-b-0 border-r-0 border-l-0 border-textcolors-boundary bg-darkshades-passive py-2 font-Plex">
        <section className="grid grid-cols-10">
          <section className="col-span-3 col-start-1 flex justify-center items-center">
            <StaticImage
              src="../images/banner-logo.png"
              alt="IEEE Computer Society VITC"
              height={120}
              layout="fixed"
              width={275}
              className="px-2"
            />
          </section>
          <section className="col-span-2 col-start-4">
            <section className="text-white">
              <section className="font-extrabold text-2xl capitalize">
                Know more
              </section>
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
          <section className="col-span-2 col-start-8">
            <section className="text-2xl font-bold text-white">
              Contact us
            </section>
            <section className="flex flex-col justify-start">
              <IconKnowMore
                name="GitHub"
                link={"https://github.com/ComputerSocietyVITC"}
              />
              <IconKnowMore
                name="Instagram"
                link={"https://github.com/ComputerSocietyVITC"}
              />
              <IconKnowMore
                name="LinkedIn"
                link={"https://github.com/ComputerSocietyVITC"}
              />
              <IconKnowMore
                name="Twitter"
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
