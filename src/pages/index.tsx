import type { HeadFC, PageProps } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import "../../css/gradients.css";
import { Footer } from "../components/footer";
import Navbar from "../components/navbar";

const SEO = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          image
          icon
          siteDescription
          siteUrl
        }
      }
    }
  `);

  const currentTitle = data.site.siteMetadata.siteTitle;
  const currentDescription = data.site.siteMetadata.siteDescription;
  const siteImage = data.site.siteMetadata.image;
  const siteUrl = data.site.siteMetadata.siteUrl;
  return (
    <>
      <title>IEEE Computer Society's Documentation website</title>
      <meta name="lang" content="en" />
      <meta name="googlebot" content="all" />
      <meta name="description" content={currentDescription} />
      <meta
        name="image"
        content={`https://beta.ieeecsvitc.com/static/39790d024fbbbd61e47812cc5adcfb4b/f3559/icon.png`}
      />
      <meta name="start_url" content="/" />
      <meta
        property="og:image"
        content={`https://beta.ieeecsvitc.com/static/39790d024fbbbd61e47812cc5adcfb4b/f3559/icon.png`}
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

export const Head: HeadFC = () => <SEO />;
