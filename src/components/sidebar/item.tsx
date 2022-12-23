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
          "rounded-tl- font-regular my-2 rounded-bl-lg pl-2 font-Monty text-lg text-white":
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
