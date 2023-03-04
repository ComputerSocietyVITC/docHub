import * as React from "react";
import { navigate } from "gatsby";
import "../../css/base.css";

const Flexi = (): JSX.Element => {
  return (
    <>
      <div>
        <div className="mx-2 mt-[1vw] flex flex-row items-center justify-between gap-[2vw]">
          <button
            onClick={() => navigate("/docs")}
            className="w-1/3 items-center rounded-[30px] border-none bg-primary p-[7.6vw] font-bold text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-700"
            type="button"
          >
            <p className="my-[-2%] py-[-5%] text-center text-[5vw]">explore</p>
            <p className="my-[-25%] text-center text-[5vw] opacity-70">
              explore
            </p>
            <p className="my-[-25%] text-center text-[5vw] opacity-40">
              explore
            </p>
            <p className="mt-[-10%] text-[5vw] opacity-20">explore</p>
          </button>
          <button
            onClick={() => navigate("/docs")}
            className="w-1/3 rounded-[30px] bg-sideColors-1 px-[5%] py-[0.2%] text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-700"
            type="button"
          >
            <p className="text-left text-[5vw] font-semibold">
              What's This About?
            </p>
            <p className="px-[-40%] text-right text-[5vw]">&#8690;</p>
          </button>
          <span className="m-0 flex w-1/3 flex-col gap-[1.5vw] text-center">
            <a
              href="/docs"
              className="rounded-[30px] border border-white py-[4.1vw] px-[4vw] text-[2.1vw] text-white hover:scale-110 hover:shadow-lg hover:shadow-green-500"
            >
              Read Docs
            </a>
            <button
              onClick={() => navigate("/")}
              className="m-0 rounded-[30px] bg-sideColors-1 py-[5.1vw] text-[2.1vw] text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-700"
              type="button"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              natus?
            </button>
          </span>
        </div>
        <div className="mx-[2.5vw] mt-[2vw] mb-[1vw] flex flex-row flex-nowrap items-end justify-between gap-[2.4vw]">
          <button
            onClick={() => navigate("/")}
            className="w-1/2.3 rounded-[30px] bg-sideColors-1 px-[14.9vw] py-[2.5vw] text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-700"
            type="button"
          >
            <p className="text-[3.2vw]">Add your content with MDX</p>
          </button>
          <button
            onClick={() => navigate("/docs")}
            className="w-1/2.3 rounded-[30px] bg-sideColors-1 px-[14.9vw] py-[2.6vw] text-[4.2vw] text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-700"
            type="button"
          >
            <p className="text-left text-[3.2vw]">
              <strong>Deep</strong> dive into learning
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Flexi;

