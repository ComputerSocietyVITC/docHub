import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { Footer } from "../components/footer";
import Navbar from "../components/navbar";
import { StaticImage } from "gatsby-plugin-image";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <section className="max-w-screen h-screen bg-darkshades-passive py-2">
        <Navbar />
        <section className="my-2 flex flex-1 flex-col items-center justify-between">
          <section className="gradient-text flex justify-center pt-16 pb-8 font-Plex text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
            Page Not FOUND!
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
            Go Back Home
          </a>
        </section>
        <Footer />
      </section>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>404 Not found</title>;
