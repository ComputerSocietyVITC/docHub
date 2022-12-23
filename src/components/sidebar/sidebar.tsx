import React from "react";
import Item from "./item";

const Sidebar = (): JSX.Element => {
  return (
    <section className="col-span-3 col-start-1 border border-r-[1px] border-b-0 border-l-0 border-t-0 border-textcolors-boundary bg-darkshades-passive py-2 pl-4">
      <aside>
        <nav className="relative z-20 mt-5">
          <ul>
            <Item active={true} text="Getting Started" />
            <Item active={false} text="Getting Started" />
            <Item active={false} text="Getting Started" />
            <Item active={false} text="Getting Started" />
            <Item active={false} text="Getting Started" />
          </ul>
        </nav>
      </aside>
    </section>
  );
};

export default Sidebar;
