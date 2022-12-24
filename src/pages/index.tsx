import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import "../../css/gradients.css";
import { Footer } from "../components/footer";
import Navbar from "../components/navbar";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <section className="max-w-screen h-screen bg-darkshades-passive py-2">
        <Navbar />
        <section className="my-2 flex flex-col flex-1 items-center justify-between">
          <section className="gradient-text flex justify-center pt-16 pb-8 font-Plex lg:text-6xl md:text-5xl text-3xl font-extrabold text-white">
            Start your learning journey today!
          </section>
          <StaticImage
            src="../images/icon.png"
            alt="Computer Society Logo"
            className="h-64 w-64"
          />
          <a
            className="glowing-shadow mt-16 w-fit rounded-lg bg-primary p-4 sm:p-2 font-Plex lg:text-2xl md:text-sm font-semibold capitalize text-darkshades-passive"
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
