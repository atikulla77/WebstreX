import React from "react";
import image from "../../Image/about.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

function About() {
  return (
    <main className={`w-full h-full relative GeologicaFont`}>
      <div className="w-full h-[10rem] absolute top-[-10rem] left-0 bg-gradient-to-t from-[#2f1a4e]  z-[2]"></div>
      <div className="w-full h-[10rem] absolute top-[-10px] left-0 bg-gradient-to-b from-[#2f1a4e]  z-[2]"></div>

      <div
        className={`w-[100%] h-[100%] flex justify-center items-center pt-[5rem] pb-[3rem] mx-auto relative z-[5]`}
      >
        <div className=" xl:w-[1230px] w-[100%] relative z-[1] flex flex-col justify-center items-center KarlaFont">
          <div className="w-full flex [@media(min-width:920px)]:flex-row flex-col justify-start items-center text-black z-10">
            {/* image */}
            <div className="[@media(min-width:920px)]:w-[400px] w-full [@media(min-width:920px)]:justify-start justify-center flex ">
              <div className="lg:!w-[400px] [@media(min-width:525px)]:w-[370px] [@media(min-width:360px)]:w-[320px] w-[300px] lg:!h-[487px] [@media(min-width:525px)]:h-[457px] [@media(min-width:360px)]:h-[407px] h-[387px] flex justify-center items-center rounded-[5px] relative overflow-hidden">
                <img
                  src={image}
                  className={`w-[105%] h-[105%] object-cover mx-auto`}
                  alt=""
                />
              </div>
            </div>
            {/* Content */}
            <div className="[@media(min-width:920px)]:w-[55%] w-full h-full [@media(min-width:990px)]:px-[1rem] [@media(min-width:480px)]:px-0 px-[0.5rem]  grid items-center text-white [@media(min-width:920px)]:text-left text-center relative lg:!ml-[4rem] [@media(min-width:990px)]:ml-[2rem] ml-0 [@media(min-width:920px)]:mt-0 mt-[2rem]">

                <p className="[@media(min-width:480px)]:text-[15px] [@media(min-width:400px)]:text-[14px] text-[13px] font-[500] text-[#9c9c9c] uppercase">
                  Welcome to cursive security
                </p>
                <h1 className="lg:!text-[40px] [@media(min-width:525px)]:text-[28px] [@media(min-width:400px)]:text-[25px] text-[22px] font-[700] tracking-[1px] InterFont">
                  Blockchain And Digital <br />
                  Asset Strategy
                </h1>

                <p className="lg:!text-[15px] [@media(min-width:525px)]:text-[14px] [@media(min-width:400px)]:text-[13px] text-[12px] font-[400] text-[#ffffffab] [@media(min-width:525px)]:leading-[30px] [@media(min-width:400px)]:leading-[25px] leading-[20px] z-10 relative pt-[5px] pb-[15px]">
                  ENJINSTARTER is the world's first dedicated blockchain gaming
                  launchpad
                  <br className="[@media(min-width:480px)]:flex hidden" />
                  focused on helping creators and game development studios to
                  embrace the
                  <br className="[@media(min-width:480px)]:flex hidden" />
                  ENJIN Ecosystem for their Blockchain and Digital Asset
                  strategy
                  <br className="[@media(min-width:480px)]:flex hidden" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  eisumod tempor
                  <br className="[@media(min-width:480px)]:flex hidden" />
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis
                  <br className="[@media(min-width:480px)]:flex hidden" />
                  nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>

                <button className="flex items-center px-[2px] pb-[10px] lg:!text-[14px] [@media(min-width:480px)]:text-[13px] [@media(min-width:400px)]:text-[12px] text-[11px] font-[400] cursor-pointer text-[#fff] rounded-[50px] transition-[0.3s] uppercase Poppins relative [@media(min-width:920px)]:mx-0 mx-auto w-fit">
                  <span className="tracking-[0.2px]"> Read More About Us </span>
                  <FaArrowRightLong className="lg:!text-[16px] [@media(min-width:920px)]:text-[15px] [@media(min-width:480px)]:text-[14px] text-[11px] desktop2:ml-[8px] ml-[5px]" />
                  <div className="absolute bottom-[5px] left-0 w-[100%] [@media(min-width:400px)]:h-[2px] h-[1.5px] bg-gradient-to-r from-[#EA3E76] to-[#8a3ce3] rounded-[50px]"></div>
                </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
