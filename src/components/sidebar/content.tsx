import React from "react";

interface IContentProps {
  children: JSX.Element;
}

const Content = (props: IContentProps): JSX.Element => {
  return (
    <>
      <section className="grid grid-cols-12 gap-1 bg-darkshades-passive">
        {props?.children}
      </section>
    </>
  );
};

export default Content;
