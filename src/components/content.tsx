import React from "react";

interface IContentProps {
  children: JSX.Element;
}

const ContentComponent = (props: IContentProps): JSX.Element => {
  return (
    <>
      <section className="grid min-h-screen lg:grid-cols-10 md:grid-cols-1 sm:grid-cols-1 sm:px-2 md:px-2 gap-4 bg-darkshades-passive">
        {props?.children}
      </section>
    </>
  );
};

export default ContentComponent;
