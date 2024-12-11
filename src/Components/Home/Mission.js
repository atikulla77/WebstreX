import React from "react";
import img1 from "../../Image/mission_1.png";
import img2 from "../../Image/mission_2.png";

function Mission() {
  return (
    <main className="w-full h-[100%]">
      <div className="mx-auto xl:w-[1230px] w-[96%] h-full py-[3rem] relative z-[1] flex flex-col justify-center items-center">
        <div className="w-full text-center text-white relative z-10 pb-[30px]">
          <p className="text-[#ffffffbf] [@media(min-width:540px)]:text-[15px] [@media(min-width:450px)]:text-[14px] text-[12px] font-[400] pb-[5px] uppercase mx-auto">
            Our mission statements
          </p>
          <h1 className="[@media(min-width:570px)]:text-[35px] [@media(min-width:450px)]:text-[28px] text-[25px] font-[600]  Poppins">
            Embrace The Enjin<br className="[@media(min-width:540px)]:hidden flex" /> Ecosystem
          </h1>
        </div>
        <div className="flex flex-wrap justify-center w-[100%] h-full mx-auto">
          <div className="[@media(min-width:470px)]:w-[450px] w-[98%] [@media(min-width:420px)]:h-[355px] h-[100%] bg-gradient-to-r from-[#EA3E76] to-[#8B3CE3] rounded-[8px] [@media(min-width:470px)]:px-[3px] px-[2px] [@media(min-width:470px)]:py-[3px] py-[2px] [@media(min-width:470px)]:my-[20px] my-[10px] [@media(min-width:540px)]:mx-[1.5rem] mx-[0px] shadow-[0px_0px_3px_0px_#0000003d]">
            <div className="w-[100%] h-full [@media(min-width:405px)]:py-[2rem] py-[1rem] mx-auto overflow-hidden  rounded-[8px] bg-[#0a012a]">
              <div className="[@media(min-width:420px)]:w-[250px] [@media(min-width:380px)]:w-[225px] w-[205px] [@media(min-width:420px)]:h-[160px] [@media(min-width:380px)]:h-[140px] h-[125px] mx-auto [@media(min-width:380px)]:mb-[1rem] mb-[0.8rem] relative">
                <img src={img1} className="w-[100%]" alt="" />
              </div>
              <div className="text-center [@media(min-width:420px)]:px-[20px] px-[15px] text-white">
                <h1 className="[@media(min-width:420px)]:text-[23px] [@media(min-width:380px)]:text-[20px] text-[17px] font-[600]">
                  To Build a Thriving Ecosystem
                </h1>
                <p className="[@media(min-width:420px)]:text-[13px] [@media(min-width:380px)]:text-[12px] text-[11px] tracking-[0.2px] [@media(min-width:420px)]:leading-[20px] leading-[17px] font-[400] [@media(min-width:380px)]:mt-[10px] mt-[5px] text-[#e9e9e9e0] InterFont">
                  To build a thriving ecosystem for Blockchain Gaming and to
                  <br className="[@media(min-width:470px)]:flex hidden" />
                  introduce new ways for the community to earn crypto in a fun
                  <br className="[@media(min-width:470px)]:flex hidden" />
                  and engaging manner.
                </p>
              </div>
            </div>
          </div>
          <div className="[@media(min-width:470px)]:w-[450px] w-[98%] [@media(min-width:420px)]:h-[355px] h-[100%] bg-gradient-to-r from-[#EA3E76] to-[#8B3CE3] rounded-[8px] [@media(min-width:470px)]:px-[3px] px-[2px] [@media(min-width:470px)]:py-[3px] py-[2px] [@media(min-width:470px)]:my-[20px] my-[10px] [@media(min-width:540px)]:mx-[1.5rem] mx-[0px] shadow-[0px_0px_3px_0px_#0000003d]">
            <div className="w-[100%] h-full [@media(min-width:405px)]:py-[2rem] py-[1rem] mx-auto overflow-hidden  rounded-[8px] bg-[#0a012a]">
              <div className="[@media(min-width:420px)]:w-[235px] [@media(min-width:380px)]:w-[200px] w-[180px] [@media(min-width:420px)]:h-[160px] [@media(min-width:380px)]:h-[140px] h-[125px] mx-auto [@media(min-width:380px)]:mb-[1rem] mb-[0.8rem] relative">
                <img src={img2} className="w-[100%]" alt="" />
              </div>
              <div className="text-center [@media(min-width:420px)]:px-[20px] px-[15px] text-white">
                <h1 className="[@media(min-width:420px)]:text-[23px] [@media(min-width:380px)]:text-[20px] text-[17px] font-[600]">
                To Build Community
                </h1>
                <p className="[@media(min-width:420px)]:text-[13px] [@media(min-width:380px)]:text-[12px] text-[11px] tracking-[0.2px] [@media(min-width:420px)]:leading-[20px] leading-[17px] font-[400] [@media(min-width:380px)]:mt-[10px] mt-[5px] text-[#e9e9e9e0] InterFont">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                  <br className="[@media(min-width:470px)]:flex hidden" />
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{" "}
                  <br className="[@media(min-width:470px)]:flex hidden" />
                  enim ad minim veniam. quis nostrud exercitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Mission;
