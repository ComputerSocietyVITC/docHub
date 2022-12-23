import React from "react";

interface IContentProps {
  children: JSX.Element;
}

const ContentComponent = (props: IContentProps): JSX.Element => {
  return (
    <>
      <section className="grid grid-cols-10 gap-4 bg-darkshades-passive">
        {props?.children}
      </section>
    </>
  );
};

export default ContentComponent;
