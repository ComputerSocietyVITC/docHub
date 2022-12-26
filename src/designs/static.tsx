import * as React from "react";
import { ExoticComponent } from "react";
import "../../css/headings.css";
import ContentComponent from "../components/content";
import { Footer } from "../components/footer";
import Modal from "../components/modal/modal";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar/sidebar";
import TableContent from "../components/sidebar/tableOfContent";
import { useMDX } from "../utils/hooks";

const TemplateComponent = ({ pageContext }: any): JSX.Element => {
  const data = useMDX(pageContext.body);
  const Content: ExoticComponent = data?.default;
  return (
    <>
      <Navbar />
      <section className="lg:hidden md:hidden flex flex-1 justify-between bg-darkshades-active w-full h-8 pl-10">
        <section className="text-white font-black text-lg">
          In this website
        </section>
        <Modal />
      </section>
      <ContentComponent>
        <>
          <Sidebar name={pageContext?.title} />
          <section className="xs:col-start-1 sm:col-start-1 sm:col-span-1 md:col-start-3 lg:col-start-3 lg:col-span-6 px-2">
            <h1 className="pt-2 text-4xl font-extrabold text-gray-200">
              {pageContext.title}
            </h1>
            <h2 className="font-Plex text-lg font-bold text-primary">
              Authored by: {pageContext.author}
            </h2>
            <Content />
          </section>
          <TableContent items={pageContext?.tableOfContents.items} />
        </>
      </ContentComponent>
      <Footer />
    </>
  );
};

export default TemplateComponent;

export const Head = ({ pageContext }: any) => {
  return (
    <>
      <title>{pageContext?.title}</title>
    </>
  );
};
