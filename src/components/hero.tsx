import * as React from "react";
import '../../css/base.css';

const Hero = (): JSX.Element => {
    return (
        <>
        <section className="flex flex-nowrap justify-evenly font-monty bg-darkshades-passive">
            <p className="w-1/2 text-[7vw] whitespace-pre-wrap text-textcolors-active leading-[6vw] flex-auto font-extrabold text-justify pl-[30px] pt-[2.4vw] tracking-tighter pr-[51.7px]">IEEE Computer Society VIT Chennai's Docs</p>
            <p className="w-1/2 font-normal text-textcolors-active text-[2.1vw] flex-auto text-justify tracking-tight px-[44.7px] py-[2vw] mt-[1vw]">The starting point for your tech journey, Get started and explore you favorite domain in tech. Whether you're just starting out or you're an experienced developer looking to take your skills to the next level, our documentation has something for <strong className="font-extrabold">everyone</strong>.</p>
        </section>
    </>
    );
  };

  export default Hero;