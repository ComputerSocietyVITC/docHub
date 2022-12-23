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
        <section className="flex flex-col justify-evenly items-center gap-8">
          <section className="py-16 gradient-text flex justify-center text-6xl font-Plex text-white font-extrabold capitalize">
            Page Not Found
          </section>
          <img src={Logo} className="h-54 w-54 hover:rotate-45" alt="Logo"/>
          <a
            className="bg-primary text-darkshades-passive font-Inter rounded-full w-fit p-4 font-bold text-2xl glowing-shadow capitalize"
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
