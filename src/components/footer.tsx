import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { IoOpenOutline } from "react-icons/io5";

interface ISocialMediaInterface {
  icon: JSX.Element;
  link: string;
}

interface SearchIconInterface {
  icon: JSX.Element;
}

interface KnowMoreProps {
  name: string;
  link: string;
}

const SocialMediaIcon = (props: ISocialMediaInterface): JSX.Element => {
  return (
    <a href={props?.link} target="_blank">
      <section className="text-3xl text-white">{props?.icon}</section>
    </a>
  );
};

const SearchIcon = (props: SearchIconInterface): JSX.Element => {
  return <section className="text-3xl text-white">{props?.icon}</section>;
};

const IconKnowMore = (props: KnowMoreProps) => {
  return (
    <>
      <a href={props?.link}>
        <section className="flex items-center justify-start gap-2 py-1 text-lg font-thin text-white">
          <section className="text-gray-300 hover:text-xl hover:font-normal hover:text-gray-200">
            {props?.name}
          </section>
        </section>
      </a>
    </>
  );
};

const Footer = (): JSX.Element => {
  return (
    <>
      <footer className="content-center border border-t-[2px] border-b-0 border-r-0 border-l-0 border-textcolors-boundary bg-darkshades-passive py-2 font-Plex">
        <section className="flex flex-row items-center p-7">
          <section className="md:px-4 lg:basis-1/3 lg:pl-7">
            <StaticImage
              src="../images/banner-logo.png"
              alt="IEEE Computer Society VITC"
              height={150}
              layout="fixed"
              width={350}
              className="hidden lg:block"
            />
          </section>

          <section className="ml-0 basis-1/2 pl-11 sm:pl-1 md:basis-1/2 lg:basis-1/3 lg:border lg:border-l-[0.5px] lg:border-r-0 lg:border-t-0 lg:border-b-0">
            <section className="mb-2 flex-nowrap text-4xl font-extrabold capitalize text-white sm:text-2xl">
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
            <IconKnowMore
              link={"https://dev.to/ieeecsvitc"}
              name={"Meet the Team"}
            />
          </section>

          <section className="basis-1/2 pl-11 md:basis-1/2 lg:basis-1/3">
            <section className="mb-2 text-4xl font-extrabold capitalize text-white sm:mb-2 sm:text-2xl">
              Contact
            </section>
            <IconKnowMore
              name="GitHub"
              link={"https://github.com/ComputerSocietyVITC"}
            />
            <IconKnowMore
              name="Instagram"
              link={"https://instagram.com/comsoc.vitcc"}
            />
            <IconKnowMore
              name="LinkedIn"
              link={
                "https://www.linkedin.com/company/ieee-computer-society-vit-chennai/mycompany/"
              }
            />
            <IconKnowMore
              name="Twitter"
              link={"https://twitter.com/ieeecsvitc"}
            />
          </section>
        </section>
        <section className="gradient-navbar font-Monty text-md col-span-full my-0 flex justify-center rounded-b-md px-2 py-1 font-semibold text-white sm:text-xs">
          IEEE Computer Society VIT Chennai © {new Date().getFullYear()}
        </section>
      </footer>
    </>
  );
};

export { Footer, ISocialMediaInterface, SocialMediaIcon, SearchIcon };
