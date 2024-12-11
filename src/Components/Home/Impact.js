import React from "react";
import img1 from "../../Image/impact_1.png";
import img2 from "../../Image/impact_2.png";
import img3 from "../../Image/impact_3.png";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function Impact() {
  const impactData = [
    {
      id: 1,
      img: img1,
      tittle: "Blockchain and Digital Assets",
      description:
        "Lorem ipsum dolor amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore magna.",
    },
    {
      id: 2,
      img: img2,
      tittle: "Thriving Economy And Ecosystem",
      description:
        "Lorem ipsum dolor amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore magna.",
    },
    {
      id: 3,
      img: img3,
      tittle: "To Build Community",
      description:
        "Lorem ipsum dolor amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore magna.",
    },
  ];
  return (
    <main className="w-full h-[100%]">
      <div className="mx-auto xl:w-[1230px] w-[96%] h-full [@media(min-width:1105px)]:pt-[4rem] pt-[2rem] pb-[4rem] relative z-[1] flex [@media(min-width:1105px)]:flex-row flex-col justify-center">
        <div className="[@media(min-width:1105px)]:w-[200px] w-full [@media(min-width:1105px)]:pb-0 pb-[1rem] text-white my-[0.8rem] mx-auto [@media(min-width:1105px)]:text-left text-center">
          <p className="[@media(min-width:600px)]:text-[15px] text-[14px] tracking-[0.2px] font-[400] text-[#9c9c9c] uppercase KarlaFont">
            Our Impact
          </p>
          <h1 className="[@media(min-width:600px)]:text-[30px] [@media(min-width:400px)]:text-[25px] text-[20px] font-[600] Poppins pt-[2px]">
            A Dedicated Launchpad
          </h1>
          <div className="flex items-center [@media(min-width:1105px)]:justify-start justify-center pt-[10px] [@media(min-width:1105px)]:mx-0 mx-auto">
            <div className="[@media(min-width:600px)]:w-[35px] w-[30px] [@media(min-width:600px)]:h-[35px] h-[30px] rounded-[50%] bg-[#3a2a6952]  flex justify-center items-center mr-[5px] cursor-pointer">
              <FaAngleLeft className="[@media(min-width:600px)]:text-[13px] text-[12px]" />
            </div>
            <div className="[@media(min-width:600px)]:w-[35px] w-[30px] [@media(min-width:600px)]:h-[35px] h-[30px] rounded-[50%]  bg-[#3a2a69b1] flex justify-center items-center cursor-pointer">
              <FaAngleRight className="[@media(min-width:600px)]:text-[13px] text-[12px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center h-full mx-auto">
          {impactData.map((key) => {
            return (
              <div
                key={key.id}
                className="w-[260px] h-[300px] mx-[0.8rem] my-[0.8rem] rounded-[10px] bg-[#2e1e5d66] shadow-[0px_0px_3px_0px_#0000003d] px-[15px] py-[25px]"
              >
                <div className="w-[110px] h-[110px] mb-[1rem] ml-[10px] bg-[#3a2a6969] rounded-[50%] relative">
                  <img
                    src={key.img}
                    className="w-[70px] absolute left-[-8px] bottom-[10px]"
                    alt=""
                  />
                </div>
                <div className="text-left pl-[3px] text-white">
                  <h1 className="text-[20px] leading-[28px] font-[600] w-[180px]">
                    {key.tittle}
                  </h1>
                  <p className="text-[12.5px] font-[400] mt-[10px] text-[#e9e9e9e0] InterFont">
                    {key.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Impact;
