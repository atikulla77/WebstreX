import React from "react";
import Navber from "../Navbar/Navbar";
import bg from "../../Image/bg_1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div
      className="w-full h-[100%] relative flex items-end justify-center overflow-hidden bg-[#d5d5d5] pt-[5rem]"
      // id="Home"
    >
      <Navber />
      <div className="w-full h-full absolute top-0 left-0 z-0">
        <img src={bg} className="w-full h-full object-cover object-left" />
      </div>
      <div className="container w-full h-[100vh] flex mx-auto relative">
        <div className="w-[100%] z-10 GeologicaFont text-white relative flex flex-col pt-[7rem] items-center justify-start text-center">
          <h2 className="desktop1:!text-[23px] [@media(min-width:570px)]:text-[18px] desktop3:text-[15px] text-[13px] font-[200] tracking-[1px] text-[#ffffffbd] uppercase OpenSans">
            The Next Generation Launchpad For
          </h2>
          <h1 className="desktop1:!text-[60px] [@media(min-width:570px)]:text-[50px] desktop3:text-[40px] text-[33px] font-[500] desktop1:!leading-[70px] desktop2:leading-[60px] leading-[50px] desktop1:!pt-[13px] desktop2:pt-[11px] pt-[7px] desktop1:!pb-[30px] desktop2:pb-[22px] desktop3:pb-[18px] pb-[16px]">
            Blockchain Gaming
            <br />
            And Metaverses
          </h1>
          <div className="flex justify-center">
            <button className="desktop1:!px-[30px] desktop2:px-[22px] px-[18px] desktop1:!py-[10px] desktop2:py-[9px] py-[7px] desktop1:!text-[14px] desktop2:text-[13px] desktop4:text-[12px] text-[11px] font-[400] cursor-pointer text-[#fff] bg-gradient-to-r from-[#EA3E76] to-[#8B3CE3] rounded-[50px] transition-[0.3s] uppercase Poppins">
              Buy Launchpad
            </button>
            <button className="flex items-center desktop2:px-[8px] px-[5px] pb-[5px] desktop4:ml-[15px] ml-[8px] desktop1:!text-[15px] desktop2:text-[14px] desktop3:text-[13px] desktop4:text-[12px] text-[11px] font-[500] cursor-pointer text-[#fff] rounded-[50px] transition-[0.3s] uppercase Poppins relative">
              <span className="tracking-[0.2px]"> Learn More </span>
              <FaArrowRightLong className="desktop2:!text-[16px] desktop3:text-[15px] desktop4:text-[14px] text-[11px] desktop2:ml-[8px] ml-[5px]" />
              <div className="absolute bottom-[5px] left-0 w-[100%] h-[2px] bg-gradient-to-r from-[#EA3E76] to-[#8B3CE3] rounded-[50px]"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
