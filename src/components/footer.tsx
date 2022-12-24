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
      <a href={props?.link}>
        <section className="flex items-center justify-start gap-2 py-1 text-lg font-light text-white">
          <section className="hover:underline">{props?.name}</section>
          <IoOpenOutline className="hover:translate-x-2">
            {props?.name}
          </IoOpenOutline>
        </section>
      </a>
    </>
  );
};

const Footer = (): JSX.Element => {
  return (
    <>
      <footer className="border border-t-[1px] border-b-0 border-r-0 border-l-0 border-textcolors-boundary bg-darkshades-passive py-2 font-Plex">
        <section className="grid sm:grid-cols-1 md:grid-cols-6 md:gap-2 lg:grid-cols-10">
          <section className=" hidden items-center justify-start md:col-span-2 md:col-start-1 md:flex lg:col-span-3 lg:col-start-1 lg:flex">
            <StaticImage
              src="../images/banner-logo.png"
              alt="IEEE Computer Society VITC"
              height={120}
              layout="fixed"
              width={275}
              className="px-2 md:px-4 "
            />
          </section>
          <section className="flex justify-between px-2 sm:col-start-1 sm:py-4 md:col-span-2 md:col-start-3 lg:col-span-2 lg:col-start-4">
            <section className="text-white">
              <section className="text-2xl font-extrabold capitalize">
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
            <section className="block md:hidden lg:hidden">
              <StaticImage
                src="../images/banner-logo.png"
                alt="IEEE Computer Society VITC"
                height={96}
                layout="fixed"
                width={220}
                className="px-2 md:px-4 "
              />
            </section>
          </section>
          <section className="px-2 sm:col-start-1 sm:flex sm:justify-start sm:py-4 md:col-span-2 md:col-start-5 lg:col-span-2 lg:col-start-8">
            <section className="text-2xl font-bold text-white">
              Contact us
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
        </section>
        <section className="sm:text-md col-span-full flex justify-center font-Monty text-lg font-light text-white">
          IEEE Computer Society VIT Chennai © {new Date().getFullYear()}
        </section>
      </footer>
    </>
  );
};

export { Footer, ISocialMediaInterface, SocialMediaIcon };
