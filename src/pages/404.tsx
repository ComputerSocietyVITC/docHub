import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { Footer } from "../components/footer";
import Navbar from "../components/navbar";

// @ts-ignore
import Logo from "../images/icon.png";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <section className="h-screen bg-darkshades-passive">
        <Navbar />
        <section className="flex flex-col items-center justify-evenly gap-8">
          <section className="gradient-text flex justify-center py-16 font-Plex text-6xl font-extrabold capitalize text-white">
            Page Not Found
          </section>
          <img src={Logo} className="h-54 w-54 hover:rotate-45" alt="Logo" />
          <a
            className="glowing-shadow w-fit rounded-full bg-primary p-4 font-Inter text-2xl font-bold capitalize text-darkshades-passive"
            href="/"
          >
            Go back home
          </a>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>404 Not found</title>;
