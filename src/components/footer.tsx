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
        <section className="flex items-center justify-start gap-2 py-1 text-lg font-thin text-white">
          <section className="hover:text-xl hover:text-gray-200 hover:font-normal text-gray-300">{props?.name}</section>
        </section>
      </a>
    </>
  );
};

const Footer = (): JSX.Element => {
  return (
    <>
      <footer className="border border-t-[2px] border-b-0 border-r-0 border-l-0 border-textcolors-boundary bg-darkshades-passive py-2 font-Plex content-center">
        <section className="p-7 flex flex-row items-center">
          <section className="md:px-4 lg:pl-7 lg:basis-1/3">
            <StaticImage
              src="../images/banner-logo.png"
              alt="IEEE Computer Society VITC"
              height={150}
              layout="fixed"
              width={350}
              className="hidden lg:block"
            />
          </section>

          <section className="basis-1/2 md:basis-1/2 lg:basis-1/3 lg:border lg:border-l-[0.5px] lg:border-r-0 lg:border-t-0 lg:border-b-0 pl-11 sm:pl-1 ml-0">
              <section className="text-4xl sm:text-2xl mb-2 font-extrabold capitalize text-white flex-nowrap">
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
              <IconKnowMore link={"https://dev.to/ieeecsvitc"} name={"Meet the Team"} />
          </section>

          <section className="basis-1/2 md:basis-1/2 lg:basis-1/3 pl-11">
              <section className="text-4xl sm:text-2xl sm:mb-2 mb-2 font-extrabold capitalize text-white">
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
        <section className="font-semibold gradient-navbar col-span-full flex justify-center px-2 py-1 font-Monty text-md text-white my-0 sm:text-xs rounded-b-md">
          IEEE Computer Society VIT Chennai © {new Date().getFullYear()}
        </section>
      </footer>
    </>
  );
};

export { Footer, ISocialMediaInterface, SocialMediaIcon };
