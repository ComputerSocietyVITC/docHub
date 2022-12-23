import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "../components/navbar";
import { Footer } from "../components/footer";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <section className="h-screen bg-darkshades-passive"></section>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>IEEE Computer Society's Documentation website</title>
);
