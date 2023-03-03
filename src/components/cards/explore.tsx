import * as React from "react";
import "../../../css/gradients.css";
import { AiOutlineDoubleRight } from "react-icons/ai";

const AboutBox = (): JSX.Element => {
  return (
    <>
      <section className="m-2 flex w-5/12 flex-auto flex-col justify-start rounded-2xl bg-sideColors-3 px-2 py-6 font-monty sm:text-2xl md:text-4xl lg:text-8xl">
        <section className="font-bold text-white opacity-100">deep</section>
        <section className="outline-text font-bold text-white opacity-80">
          dive
        </section>
        <section className="outline-text flex justify-between font-bold text-white opacity-60">
          into
        </section>
        <section className="outline-text font-bold text-white opacity-40">
          learning
        </section>
        <section className="flex justify-end">
          <AiOutlineDoubleRight className="-translate-x-4 text-slate-300 hover:translate-x-0 hover:text-white sm:text-2xl md:text-3xl lg:text-4xl" />
        </section>
      </section>
    </>
  );
};

export default AboutBox;
