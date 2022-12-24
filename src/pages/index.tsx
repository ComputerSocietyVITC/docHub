import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import "../../css/gradients.css";
import { Footer } from "../components/footer";
import Navbar from "../components/navbar";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <section className="max-w-screen h-screen bg-darkshades-passive pb-2">
        <Navbar />
        <section className="my-2 flex flex-1 flex-col items-center justify-between">
          <section className="gradient-text flex justify-center pt-16 pb-8 font-Plex text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
            Start your learning journey today!
          </section>
          <StaticImage
            src="../images/icon.png"
            alt="Computer Society Logo"
            className="h-64 w-64"
          />
          <a
            className="glowing-shadow mt-16 w-fit rounded-lg bg-primary p-4 font-Plex font-semibold capitalize text-darkshades-passive sm:p-2 md:text-sm lg:text-2xl"
            href="/docs"
          >
            Get started
          </a>
        </section>
        <Footer />
      </section>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>IEEE Computer Society's Documentation website</title>
    <meta name="lang" content="en" />
    <meta
      name="description"
      content="This is your one-stop destination for learning everything you need to know about your favourite tech."
    />
  </>
);
