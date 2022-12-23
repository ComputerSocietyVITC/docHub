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
            "font-regular my-2 flex items-center justify-start rounded-tl-lg rounded-bl-lg px-2 font-Plex text-lg text-white hover:bg-darkshades-active":
              true,
            "bg-darkshades-active ": props.active,
          })}
        >
          {props?.text}
          <AiFillCaretRight className="text-2xl" />
        </section>
      </a>
    </>
  );
};

export default Item;
