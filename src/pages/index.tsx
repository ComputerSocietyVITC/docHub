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
import Hero from "../components/hero"
import Flexi from "../components/flexbox";

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
          <Hero />
          <Flexi />
          <Footer />
        </section>
      </section>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
