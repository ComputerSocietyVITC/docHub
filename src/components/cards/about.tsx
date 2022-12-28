import * as React from "react";
import { BsArrowRight } from "react-icons/bs";

const AboutBox = (): JSX.Element => {
  return (
    <>
      <section className="bg-sideColors-1 rounded-2xl font-monty flex flex-col flex-auto justify-start tracking-tighter lg:text-8xl md:text-4xl sm:text-2xl m-2 py-4 w-fit">
        <section className="text-white font-bold px-8">What's</section>
        <section className="text-white font-bold px-8">this</section>
        <section className="text-white font-bold px-8">about</section>
        <section className="flex justify-end">
          <BsArrowRight className="lg:text-4xl md:text-3xl sm:text-2xl text-slate-300 -translate-x-4 hover:text-white hover:translate-x-0" />
        </section>
      </section>
    </>
  );
};

export default AboutBox;
