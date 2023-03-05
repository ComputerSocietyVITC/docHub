import * as React from "react";
import "../../css/base.css";

const Hero = (): JSX.Element => {
  return (
    <>
      <section className="flex flex-row bg-darkshades-passive font-plex">
        <section className="mt-[1vw] w-1/2 flex-auto px-[44.7px] py-[2vw] flex flex-col justify-center justify-self-start">
        <section className="leading-none flex-auto pl-[30px] pt-[2.4vw] text-[120px] font-extrabold tracking-wider text-textcolors-active">
          IEEE
        </section>
        <section className="leading-none flex-auto pl-[30px] text-[80px] font-bold tracking-tight text-textcolors-active">
          Computer Society
        </section>
        <section className="pt-1 leading-none flex-auto pl-[30px] text-[60px] font-bold tracking-tight text-textcolors-active">
         VIT Chennai's Docs
        </section>
        </section>
        <p className="mt-[1vw] w-1/2 flex-auto px-[44.7px] py-[2vw] text-justify text-[2.1vw] font-normal tracking-tight text-textcolors-active justify-self-end">
          The starting point for your tech journey, Get started and explore you
          favorite domain in tech. Whether you're just starting out or you're an
          experienced developer looking to take your skills to the next level,
          our documentation has something for{" "}
          <strong className="flex font-extrabold">everyone.</strong>
        </p>
      </section>
    </>
  );
};

export default Hero;
