import * as React from "react";
import { ExoticComponent } from "react";
import "../../css/headings.css";
import { Footer } from "../components/footer";
import Navbar from "../components/navbar";
import ContentComponent from "../components/sidebar/content";
import Sidebar from "../components/sidebar/sidebar";
import TableContent from "../components/sidebar/tableOfContent";
import useMDX from "../utils/hooks";

const TemplateComponent = ({ pageContext }: any): JSX.Element => {
  const data = useMDX(pageContext.body);
  const Content: ExoticComponent = data?.default;
  console.log(pageContext?.tableOfContents.items);
  return (
    <>
      <Navbar />
      <ContentComponent>
        <>
          <Sidebar name={pageContext?.title} />
          <section className="col-span-6 col-start-3 px-2">
            <h1 className="pt-2 text-4xl font-extrabold text-gray-200">
              {pageContext.title}
            </h1>
            <h2 className="p-0 font-Plex text-lg font-bold text-primary">
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
