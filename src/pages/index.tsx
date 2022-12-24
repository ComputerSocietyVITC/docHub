import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import "../../css/gradients.css";
import { Footer } from "../components/footer";
import Navbar from "../components/navbar";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <section className="h-screen bg-darkshades-passive">
        <Navbar />
        <section className="flex flex-col justify-evenly items-center gap-8">
          <section className="py-16 gradient-text flex justify-center text-6xl font-Plex text-white font-extrabold">
            Start your learning journey today!
          </section>
          <StaticImage src="../images/icon.png" alt="Computer Society Logo" />
          <a
            className="bg-primary text-darkshades-passive font-Plex rounded-full w-fit p-4 font-regular text-2xl glowing-shadow capitalize"
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
