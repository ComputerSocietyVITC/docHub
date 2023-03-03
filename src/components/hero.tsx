import * as React from "react";
import "../../css/base.css";

const Hero = (): JSX.Element => {
  return (
    <>
      <section className="flex flex-nowrap justify-evenly bg-darkshades-passive font-monty">
        <p className="w-1/2 flex-auto whitespace-pre-wrap pl-[30px] pt-[2.4vw] pr-[51.7px] text-justify text-[7vw] font-extrabold leading-[6vw] tracking-tighter text-textcolors-active">
          IEEE Computer Society VIT Chennai's Docs
        </p>
        <p className="mt-[1vw] w-1/2 flex-auto px-[44.7px] py-[2vw] text-justify text-[2.1vw] font-normal tracking-tight text-textcolors-active">
          The starting point for your tech journey, Get started and explore you
          favorite domain in tech. Whether you're just starting out or you're an
          experienced developer looking to take your skills to the next level,
          our documentation has something for{" "}
          <strong className="font-extrabold">everyone</strong>.
        </p>
      </section>
    </>
  );
};

export default Hero;
