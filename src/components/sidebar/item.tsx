import clsx from "clsx";
import React from "react";

interface ItemProps {
  text: string;
  active: boolean;
  slug: string;
  element?: JSX.Element;
}

const Item = (props: ItemProps): JSX.Element => {
  return (
    <>
      <a href={`/docs${props?.slug}`}>
        <section
          className={clsx({
            "font-regular my-2 rounded-tl-lg gap-2 rounded-bl-lg p-2 hover:bg-darkshades-active":
              true,
            "bg-darkshades-active ": props.active,
          })}
        >
          <section className="font-Plex text-white">{props?.text}</section>
        </section>
      </a>
    </>
  );
};

export default Item;
