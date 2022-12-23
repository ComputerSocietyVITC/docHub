import React from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import { AiFillCaretRight } from "react-icons/ai";

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
            "font-regular my-2 flex items-center justify-start rounded-tl-lg gap-2 rounded-bl-lg p-2 hover:bg-darkshades-active":
              true,
            "bg-darkshades-active ": props.active,
          })}
        >
          <section className="font-Plex text-white">{props?.text}</section>
          <AiFillCaretRight className="text-lg" />
        </section>
      </a>
    </>
  );
};

export default Item;
