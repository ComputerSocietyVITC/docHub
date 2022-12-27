import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { idGenerator } from "../../utils/hooks";

interface ITableProps {
  items: string[];
}

const TableContent = (props: ITableProps): JSX.Element => {
  return (
    <>
      <section className="col-span-2 col-start-9 hidden font-Plex font-semibold sm:px-0 md:grid md:px-0 lg:grid lg:px-4 ">
        <section className="flex flex-col justify-start pl-4 text-lg text-white">
          <section className="flex items-center justify-start gap-2">
            <BiMenuAltLeft className="sm:text-lg md:text-xl lg:text-2xl" />
            In this page
          </section>
          <section className="my-1 h-0.5 w-full rounded bg-white px-2" />
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
