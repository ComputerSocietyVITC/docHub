import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { idGenerator } from "../../utils/hooks";

interface ITableProps {
  items: string[];
}

const TableContent = (props: ITableProps): JSX.Element => {
  return (
    <>
      <section className="hidden md:grid lg:grid col-start-9 col-span-2 lg:px-4 md:px-0 sm:px-0 font-Plex font-semibold ">
        <section className="flex flex-col justify-center pl-4 text-lg text-white">
          <section className="flex items-center justify-start gap-2">
            <BiMenuAltLeft className="lg:text-2xl md:text-xl sm:text-lg" />
            In this page
          </section>
          <section className="h-0.5 w-full my-1 rounded px-2 bg-white" />
          <section>
            <section className="list-disc">
              {props?.items.map((ele: any) => (
                <li
                  className="m-0  flex items-start justify-start gap-2 p-1 text-sm font-normal hover:underline"
                  key={ele?.title}
                >
                  <a href={`#${idGenerator(ele?.title)}`}>{ele?.title}</a>
                </li>
              ))}
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default TableContent;
