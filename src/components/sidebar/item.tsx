import React from "react";
import clsx from "clsx";

interface ItemProps {
  text: string;
  active: boolean;
  element?: JSX.Element;
}

const Item = (props: ItemProps): JSX.Element => {
  return (
    <>
      <section
        className={clsx({
          "font-regular my-2 rounded-tl-lg rounded-bl-lg px-2 font-Plex text-lg font-semibold text-white hover:bg-darkshades-active":
            true,
          "bg-darkshades-active": props.active,
        })}
      >
        {props?.text}
      </section>
    </>
  );
};

export default Item;
