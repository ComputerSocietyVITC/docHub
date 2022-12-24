import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import "../../css/gradients.css";
import { Footer } from "../components/footer";
import Navbar from "../components/navbar";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <section className="max-w-screen h-screen bg-darkshades-passive">
        <Navbar />
        <section className="my-2 flex flex-col items-center justify-between">
          <section className="gradient-text flex justify-center pt-16 pb-8 font-Plex text-6xl font-extrabold text-white">
            Start your learning journey today!
          </section>
          <StaticImage
            src="../images/icon.png"
            alt="Computer Society Logo"
            height={300}
            width={300}
          />
          <a
            className="glowing-shadow mt-16 w-fit rounded-lg bg-primary p-4 font-Plex text-2xl font-semibold capitalize text-darkshades-passive"
            href="/docs"
          >
            Get started
          </a>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>IEEE Computer Society's Documentation website</title>
    <meta
      name="description"
      content="This is your one-stop destination for learning everything you need to know about your favourite tech."
    />
  </>
);
