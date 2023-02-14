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
      <section className="flex h-8 w-full flex-1 justify-between bg-darkshades-active pl-10 md:hidden lg:hidden">
        <section className="text-lg font-black text-white">
          In this website
        </section>
        <Modal />
      </section>
      <ContentComponent>
        <>
          <Sidebar name={pageContext?.title} />
          <section className="px-2 sm:col-span-1 sm:col-start-1 md:col-span-6 md:col-start-3 lg:col-span-6 lg:col-start-3">
            <h1 className="pt-2 text-4xl font-extrabold text-gray-200">
              {pageContext.title}
            </h1>
            <h2 className="font-Plex text-lg font-bold text-primary">
              <a href={pageContext.linkedin}>
              Authored by: {pageContext.author}
              </a>
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
