import React from "react";

interface IContentProps {
  children: JSX.Element;
}

const ContentComponent = (props: IContentProps): JSX.Element => {
  return (
    <>
      <section className="max-w-screen xs:grid-cols-1 grid min-h-screen gap-4 bg-darkshades-passive text-white sm:grid-cols-1 sm:px-2 md:grid-cols-10 md:px-2 lg:grid-cols-10">
        {props?.children}
      </section>
    </>
  );
};

export default ContentComponent;
