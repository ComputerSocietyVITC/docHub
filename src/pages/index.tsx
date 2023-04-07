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
          <section className="sm:flex-col md:grid md:grid-cols-1 lg:grid lg:grid-cols-6 lg:gap-8 lg:pl-12 sm:px-4 md:px-8">
            <section className="mt-16 mx-8 sm:col-span-full md:col-start-1lg:col-start-1 lg:col-span-4">
              <section className="text-white text-6xl font-bold flex justify-start py-1">
                IEEE Computer Society
              </section>
              <section className="text-white text-5xl font-bold flex justify-start py-1">
                VIT Chennai
              </section>
              <section className="text-white text-xl font-normal my-8">
                The starting point for your tech journey, Get started and
                explore you favorite domain in tech. Whether you're just
                starting out or you're an experienced developer looking to take
                your skills to the next level, our documentation has something
                for everyone.
              </section>
              <section className="hover:translate-x-4 hover:underline w-fit text-2xl py-2 text-white font-bold">
                <a href="/docs">Explore →</a>
              </section>
            </section>
            <section className="md:col-start-1 md:col-span-full lg:col-start-1 lg:col-span-4">
              <StaticImage
                src="../images/banner-image.png"
                alt="banner image"
                className="mt-12 m-8 rounded-3xl hover:shadow-lg hover:shadow-blue-500"
              />
            </section>
            <section className="px-4 mb-8 mt-12 lg:mr-12 lg:col-start-5 lg:col-span-2 md:col-span-full bg-[#202020] rounded-2xl text-white hover:translate-x-4 hover:shadow-lg hover:shadow-primary">
              <section className="font-bold text-4xl py-6">
                Custom YouTube iFrames
              </section>
              <section className="flex-col justify-center flex-wrap">
                <section className="text-white font-semibold text-3xl">
                  Allows interactive addition of iFrame
                </section>
                <section className="text-sm font-mono my-4 p-4 bg-slate-800 rounded-md break-all">
                  <>
                    {"<"}iframe className="hidden md:block lg:block"
                    src="https://www.youtube.com/embed/RDV3Z1KCBvo"
                    frameborder="0" allow="accelerometer; autoplay;
                    clipboard-write; encrypted-media; gyroscope;
                    picture-in-picture" allowfullscreen {"/>"}
                  </>
                </section>
                <section className="flex justify-between items-center">
                  <SiYoutube className="text-6xl px-2" />
                  <IoVideocam className="text-6xl px-2" />
                  <BsJournalCode className="text-6xl px-2" />
                </section>
              </section>
            </section>
            <section className="col-span-full">
              <section className="flex sm:flex-col md:flex-col justify-between gap-4 text-white lg:pr-12 pb-12 mt-8">
                <section className="h-80 w-1/3 md:w-full sm:w-full rounded-2xl bg-[#202020] px-8 py-4 hover:translate-y-2 hover:shadow-lg hover:shadow-primary">
                  <section className="lg:text-4xl md:text-3xl sm:text-2xl font-bold">
                    Fully Open Source
                  </section>
                  <section className="flex justify-between text-7xl mt-16">
                    <section className="text-white font-semibold lg:text-3xl md:text-2xl sm:text-xl hover:underline">
                      Check the repository out!
                    </section>
                    <a href="https://github.com/ComputerSocietyVITC/beta-docs-repo-gatsby">
                      <SiGithub className="hover:translate-x-1" />
                    </a>
                  </section>
                </section>
                <section className="h-80 w-1/3 md:w-full sm:w-full rounded-2xl bg-[#202020] px-8 py-4 flex-col justify-start gap-8 hover:translate-y-2 hover:shadow-lg hover:shadow-primary">
                  <section className="lg:text-4xl md:text-3xl sm:text-2xl font-bold ">
                    Quickly generate documents based on Markdown
                  </section>
                  <section className="flex justify-between items-center text-6xl mt-8">
                    <IoLogoMarkdown />
                    <SlDocs />
                  </section>
                </section>
                <section className="h-80 w-1/3 md:w-full sm:w-full rounded-2xl bg-[#202020] px-8 py-4 hover:translate-y-2 hover:shadow-lg hover:shadow-primary">
                  <section className="flex justify-between text-6xl mt-8">
                    <SiGatsby />
                    <SiTailwindcss />
                    <SiReact />
                  </section>
                  <section className="flex justify-center mt-24">
                    <section className="text-4xl font-bold lg:text-4xl md:text-3xl sm:text-2xl">
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
