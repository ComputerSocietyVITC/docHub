import type { HeadFC, PageProps } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage, getSrcSet } from "gatsby-plugin-image";
import * as React from "react";
import { IoLogoMarkdown, IoVideocam } from "react-icons/io5";
import { BsJournalCode } from "react-icons/bs";
import {
  SiGatsby,
  SiGithub,
  SiReact,
  SiTailwindcss,
  SiYoutube,
  SiAirplayvideo,
} from "react-icons/si";
import { SlDocs } from "react-icons/sl";
import "../../css/gradients.css";
import { Footer } from "../components/footer";
import Navbar from "../components/navbar";
import image from "../images/banner-image.png";

const SEO = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          icon
          image
          siteDescription
          siteUrl
        }
      }
      allFile(filter: { ext: { eq: ".png" }, name: { eq: "banner-logo" } }) {
        nodes {
          id
          name
          ext
        }
      }
    }
  `);

  const file = data.allFile.nodes[0];

  const currentTitle = data.site.siteMetadata.siteTitle;
  const currentDescription = data.site.siteMetadata.siteDescription;
  const siteUrl = data.site.siteMetadata.siteUrl;

  console.log(
    `${siteUrl}/static/${file.id}/${file.name}${file.ext}`,
    getSrcSet(data.site.siteMetadata.image),
    data.site.siteMetadata.image
  );

  return (
    <>
      <title>IEEE Computer Society's Documentation website</title>
      <meta name="lang" content="en" />
      <meta name="googlebot" content="all" />
      <meta name="description" content={currentDescription} />
      <meta
        name="image"
        content="https://beta.ieeecsvitc.com/static/c952f52a14965266e5eb3e065247993c/27b2c/banner-logo.png"
      />
      <meta name="start_url" content="/" />

      <meta
        property="og:image"
        content="https://beta.ieeecsvitc.com/static/c952f52a14965266e5eb3e065247993c/27b2c/banner-logo.png"
      />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
    </>
  );
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <section className="bg-darkshades-passive">
        <section className="max-w-screen">
          <Navbar />
          <section className="sm:flex-col sm:px-4 md:grid md:grid-cols-1 md:px-8 lg:grid lg:grid-cols-6 lg:gap-8 lg:pl-12">
            <section className="md:col-start-1lg:col-start-1 mx-8 mt-16 sm:col-span-full lg:col-span-4">
              <section className="flex justify-start py-1 text-6xl font-bold text-white">
                IEEE Computer Society
              </section>
              <section className="flex justify-start py-1 text-5xl font-bold text-white">
                VIT Chennai's Docs
              </section>
              <section className="my-8 text-xl font-normal text-white">
                The starting point for your tech journey, Get started and
                explore you favorite domain in tech. Whether you're just
                starting out or you're an experienced developer looking to take
                your skills to the next level, our documentation has something
                for everyone.
              </section>
              <section className="w-fit py-2 text-2xl font-bold text-white hover:translate-x-4 hover:underline">
                <a href="/docs">Explore →</a>
              </section>
            </section>
            <section className="md:col-span-full md:col-start-1 lg:col-span-4 lg:col-start-1">
              <img
                id="image"
                src={image}
                alt="banner image"
                className="m-8 mt-12 rounded-3xl hover:shadow-lg hover:shadow-blue-500"
              />
            </section>
            <section className="mb-8 mt-12 rounded-2xl bg-[#202020] px-4 text-white hover:translate-x-4 hover:shadow-lg hover:shadow-primary md:col-span-full lg:col-span-2 lg:col-start-5 lg:mr-12">
              <section className="py-6 text-4xl font-bold">
                Custom YouTube iFrames
              </section>
              <section className="flex-col flex-wrap justify-center">
                <section className="text-3xl font-semibold text-white">
                  Allows interactive addition of iFrame
                </section>
                <section className="my-4 break-all rounded-md bg-slate-800 p-4 font-mono text-sm">
                  <>
                    {"<"}iframe className="hidden md:block lg:block"
                    src="https://www.youtube.com/embed/RDV3Z1KCBvo"
                    frameborder="0" allow="accelerometer; autoplay;
                    clipboard-write; encrypted-media; gyroscope;
                    picture-in-picture" allowfullscreen {"/>"}
                  </>
                </section>
                <section className="flex items-center justify-between">
                  <SiYoutube className="px-2 text-6xl" />
                  <IoVideocam className="px-2 text-6xl" />
                  <BsJournalCode className="px-2 text-6xl" />
                </section>
              </section>
            </section>
            <section className="col-span-full">
              <section className="mt-8 flex justify-between gap-4 pb-12 text-white sm:flex-col md:flex-col lg:pr-12">
                <section className="h-80 w-1/3 rounded-2xl bg-[#202020] px-8 py-4 hover:translate-y-2 hover:shadow-lg hover:shadow-primary sm:w-full md:w-full">
                  <section className="font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                    Fully Open Source
                  </section>
                  <section className="mt-16 flex justify-between text-7xl">
                    <section className="font-semibold text-white hover:underline sm:text-xl md:text-2xl lg:text-3xl">
                      Check the repository out!
                    </section>
                    <a href="https://github.com/ComputerSocietyVITC/beta-docs-repo-gatsby">
                      <SiGithub className="hover:translate-x-1" />
                    </a>
                  </section>
                </section>
                <section className="h-80 w-1/3 flex-col justify-start gap-8 rounded-2xl bg-[#202020] px-8 py-4 hover:translate-y-2 hover:shadow-lg hover:shadow-primary sm:w-full md:w-full">
                  <section className="font-bold sm:text-2xl md:text-3xl lg:text-4xl ">
                    Quickly generate documents based on Markdown
                  </section>
                  <section className="mt-8 flex items-center justify-between text-6xl">
                    <IoLogoMarkdown />
                    <SlDocs />
                  </section>
                </section>
                <section className="h-80 w-1/3 rounded-2xl bg-[#202020] px-8 py-4 hover:translate-y-2 hover:shadow-lg hover:shadow-primary sm:w-full md:w-full">
                  <section className="mt-8 flex justify-between text-6xl">
                    <SiGatsby />
                    <SiTailwindcss />
                    <SiReact />
                  </section>
                  <section className="mt-24 flex justify-center">
                    <section className="text-4xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                      Made with Gatsby 💖
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </section>
          <Footer />
        </section>
      </section>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
