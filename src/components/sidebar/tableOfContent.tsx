import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";

interface ITableProps {
  items: string[];
}

const TableContent = (props: ITableProps): JSX.Element => {
  return (
    <>
      <section className="col-span-2 col-start-9 font-Plex font-semibold">
        <section className="flex flex-col justify-center pl-4 text-lg text-white">
          <section className="flex items-center justify-start gap-2">
            <BiMenuAltLeft className="text-2xl" />
            In this page
          </section>
          <section className="h-0.5 w-1/2 bg-white" />
          <section>
            <ul>
              {props?.items.map((ele: any) => (
                <li className="m-0 list-none p-1 text-sm font-normal">
                  {ele?.title}
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
