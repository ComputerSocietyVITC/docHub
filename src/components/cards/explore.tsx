import * as React from "react";
import "../../../css/gradients.css";
import { AiOutlineDoubleRight } from "react-icons/ai";

const ExploreBox = (): JSX.Element => {
  return (
    <>
      <section className="bg-sideColors-3 rounded-2xl font-monty flex flex-col flex-auto justify-start lg:text-8xl md:text-4xl sm:text-2xl px-2 py-6 m-2 w-5/12">
        <section className="font-bold text-white opacity-100">deep</section>
        <section className="font-bold outline-text text-white opacity-80">
          dive
        </section>
        <section className="font-bold outline-text text-white opacity-60 flex justify-between">
          into
        </section>
        <section className="font-bold outline-text text-white opacity-40">
          learning
        </section>
        <section className="flex justify-end">
          <AiOutlineDoubleRight className="lg:text-4xl md:text-3xl sm:text-2xl text-slate-300 -translate-x-4 hover:text-white hover:translate-x-0" />
        </section>
      </section>
    </>
  );
};

export default ExploreBox;
