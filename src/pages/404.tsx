import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { Footer } from "../components/footer";
import Navbar from "../components/navbar";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>404 Not found</title>;
