import * as React from "react";
import { ExoticComponent } from "react";
import "../../css/headings.css";
import useMDX from "../utils/hooks";

const TemplateComponent = ({ pageContext }: any): JSX.Element => {
  const data = useMDX(pageContext.body);
  const Content: ExoticComponent = data?.default;

  return (
    <>
      <section className="px-4">
        <h1 className="py-2 text-3xl font-extrabold text-blue-700">
          {pageContext.title}
        </h1>
        <Content />
      </section>
    </>
  );
};

export default TemplateComponent;
