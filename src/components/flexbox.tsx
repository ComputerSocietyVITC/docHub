import * as React from "react";
import { navigate } from "gatsby";
import '../../css/base.css';

const Flexi = (): JSX.Element => {
    return (
        <>
        <div>
        <div className="flex flex-row justify-between mt-[1vw] gap-[2vw] items-center mx-2">
            <button onClick={() => navigate('/docs')} className="border-none w-1/3 bg-primary rounded-[30px] hover:scale-110 p-[7.6vw] text-white hover:shadow-lg hover:shadow-blue-700 font-bold items-center" type="button">
                <p className="my-[-2%] py-[-5%] text-[5vw] text-center">explore</p>
                <p className="my-[-25%] opacity-70 text-[5vw] text-center">explore</p>
                <p className="my-[-25%] opacity-40 text-[5vw] text-center">explore</p>
                <p className="mt-[-10%] opacity-20 text-[5vw]">explore</p>
            </button>
            <button onClick={() => navigate('/docs')} className="text-white rounded-[30px] w-1/3 bg-sideColors-1 hover:scale-110 hover:shadow-lg hover:shadow-blue-700 px-[5%] py-[0.2%]" type="button">
                <p className="text-left font-semibold text-[5vw]">What's This About?</p>
                <p className="text-right px-[-40%] text-[5vw]">&#8690;</p>
            </button>
            <span className="flex flex-col m-0 gap-[1.5vw] w-1/3 text-center">
                <button onClick={() => navigate('/docs')} className="text-white border text-[2.1vw] rounded-[30px] hover:scale-110 py-[4.1vw] px-[4vw] border-white hover:shadow-lg hover:shadow-green-500" type="button">Read Docs</button>
                <button onClick={() => navigate('/')} className="text-white bg-sideColors-1 rounded-[30px] hover:scale-110 hover:shadow-lg hover:shadow-blue-700 py-[5.1vw] text-[2.1vw] m-0" type="button">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, natus?</button>
            </span>
        </div>
        <div className="flex flex-row flex-nowrap justify-between mt-[2vw] mb-[1vw] items-end gap-[2.4vw] mx-[2.5vw]">
            <button onClick={() => navigate('/')} className="text-white w-1/2.3 px-[14.9vw] py-[2.5vw] hover:scale-110 bg-sideColors-1 rounded-[30px] hover:shadow-lg hover:shadow-blue-700" type="button">
                <p className="text-[3.2vw]">Add your content with MDX</p>
            </button>
            <button onClick={() => navigate('/docs')} className="text-white text-[4.2vw] bg-sideColors-1 hover:scale-110 w-1/2.3 px-[14.9vw] py-[2.6vw] rounded-[30px] hover:shadow-lg hover:shadow-blue-700" type="button">
                <p className="text-[3.2vw] text-left">
                    <strong>Deep</strong> dive into learning
                </p>
            </button>
        </div>
    </div>
    </>
    );
  };
  
  export default Flexi;