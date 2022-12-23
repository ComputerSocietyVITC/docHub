import * as React from "react";
import ContentComponent from "../components/sidebar/content";
import { ExoticComponent } from "react";
import "../../css/headings.css";
import useMDX from "../utils/hooks";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar";
import { Footer } from "../components/footer";

const TemplateComponent = ({ pageContext }: any): JSX.Element => {
  const data = useMDX(pageContext.body);
  const Content: ExoticComponent = data?.default;

  return (
    <>
      <Navbar />
      <ContentComponent>
        <>
          <Sidebar />
          <section className="col-start-3 col-span-6 px-2">
            <h1 className="py-2 text-4xl font-extrabold text-white">
              {pageContext.title}
            </h1>
            <Content />
          </section>
        </>
      </ContentComponent>
      <Footer />
    </>
  );
};

export default TemplateComponent;
