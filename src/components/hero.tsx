import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import '../../css/base.css';

const Hero = (): JSX.Element => {
    return (
        <>
        <section className="flex flex-nowrap justify-center font-monty bg-darkshades-passive">
            <p className="w-3 h-151 text-[4.8vw] whitespace-pre-wrap text-textcolors-active leading-84 flex-auto font-bold text-justify py-20 tracking-tighter px-51.7 mx-auto">IEEE Computer Society VIT Chennai's Docs</p>
            <p className="w-5 h-165.64 font-light text-textcolors-active text-[1.8vw] flex-auto text-justify tracking-tight space-y-737 px-51.7 py-51.7 mx-auto">The starting point for your tech journey, Get started and explore you favorite domain in tech. Whether you're just starting out or you're an experienced developer looking to take your skills to the next level, our documentation has something for <strong>everyone</strong>.</p>
        </section>
    </>
    );
  };
  
  export default Hero;