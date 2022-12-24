import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { idGenerator } from "../../utils/hooks";

interface ITableProps {
  items: string[];
}

const TableContent = (props: ITableProps): JSX.Element => {
  return (
    <>
      <section className="col-span-2 col-start-9 hidden px-4 font-Plex font-semibold md:grid lg:grid">
        <section className="flex flex-col justify-start pl-4 text-lg text-white">
          <section className="flex items-center justify-start gap-2">
            <BiMenuAltLeft className="text-2xl" />
            In this page
          </section>
          <section className="h-0.5 w-1/2 bg-white" />
          <section>
            <ul className="list-disc">
              {props?.items.map((ele: any) => (
                <li
                  className="m-0  flex items-start justify-start gap-2 p-1 text-sm font-normal hover:underline"
                  key={ele?.title}
                >
                  <a href={`#${idGenerator(ele?.title)}`}>{ele?.title}</a>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </>
  );
};

export default TableContent;
