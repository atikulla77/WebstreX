import { useState } from "react";
import logo from "../../Image/logo.png";
import logo1 from "../../Image/1_icon_1.png";

import { HiOutlineMenuAlt3, HiOutlineMenu } from "react-icons/hi";

import { Link } from "react-scroll";

function Navber() {
  //      ``````````````````
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 24) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const [nevMobileVButton, setNevMobileVButton] = useState(false);

  const navItems = [
    {
      id: 1,
      name: "Home",
      link: "Home",
    },
    {
      id: 2,
      name: "About",
      link: "About",
    },
    {
      id: 3,
      name: "WhitePaper",
      link: "",
    },
    {
      id: 4,
      name: "Blog",
      link: "",
    },
  ];

  return (
    <div className={` w-full flex fixed top-[0px] z-50`}>
      <nav
        className={`text-[#fff] w-full relative z-10 border-b-[1px] border-b-[#ffffff1b] ${
          color
            ? "bg-[#31064dd6] shadow-[0px_0px_3px_0px_#0003]"
            : "bg-transparent"
        }`}
        style={{ transition: ".1s ease-in" }}
      >
        <div
          className="mx-auto xl:!w-[1230px] [@media(min-width:715px)]:w-[96%] w-[90%] relative z-10"
          // data-aos="fade-down"
        >
          <div className="h-[4.5rem] w-full flex items-center justify-between Poppins">
            <Link to="" className=" z-[2] relative">
              <div className="flex items-center">
                <img
                  src={logo1}
                  className="[@media(min-width:500px)]:w-[42px] w-[37px] select-none cursor-pointer [@media(min-width:500px)]:pr-[10px] pr-[7px]"
                />
                <img
                  src={logo}
                  className="[@media(min-width:500px)]:w-[105px] w-[80px] select-none cursor-pointer"
                />
              </div>
            </Link>

            {/* ---------------Web Nav Item--------------- */}
            <div className="md:flex hidden items-center justify-center text-[#fff] mt-[5px]">
              <div className="flex sm:space-x-4 space-x-1">
                {navItems.map((key) => {
                  return (
                    <Link
                      key={key.id}
                      to={key.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={100}
                      className={"text-[#fff] hover:text-[#EA3E76] [@media(min-width:1024px)]:px-3 px-[5px] py-2 text-[14px] font-[400] cursor-pointer transition-[0.3s]"
                      }
                      aria-current="page"
                    >
                      <p className="">{key.name}</p>
                    </Link>
                  );
                })}
                <button
                  className={
                    " px-[2px] py-[2px] w-[150px] h-[38px] text-[14px] font-[400] cursor-pointer text-[#fff] bg-gradient-to-r from-[#EA3E76] to-[#8B3CE3] rounded-[50px] transition-[0.3s] sm:ml-[16px] ml-[4px]"
                  }
                >
                  <span className="bg-[#3b0769bc] px-[25px] py-[7px] rounded-[50px]">
                    Coming Soon
                  </span>
                </button>
              </div>
            </div>

            {/* ---------------Mobile Nav Button--------------- */}
            <div className={`flex md:hidden items-center`}>
              <button
                className={`desktop2:w-[140px] desktop4:w-[130px] w-[115px] desktop2:h-[38px] desktop4:h-[35px] h-[32px] desktop2:text-[13px] desktop4:text-[12px] text-[11px] font-[400] cursor-pointer text-[#fff] bg-gradient-to-r from-[#EA3E76] to-[#8B3CE3] desktop2:pl-[2px] pl-[1.5px] desktop2:pr-[2.5px] pr-[1.5px] desktop2:py-[2px] py-[1.5px] rounded-[50px] transition-[0.3s] desktop4:mr-[16px] mr-[10px]`}
              >
                <div className="bg-[#3b0769bc] w-full h-full flex items-center justify-center rounded-[50px]">
                  Coming Soon
                </div>
              </button>

              {nevMobileVButton ? (
                <div
                  className="flex items-center justify-center w-[22px] h-[22px]"
                  onClick={() => setNevMobileVButton(false)}
                >
                  <p
                    className={`[@media(min-width:420px)]:text-[36px] text-[33px] flex rotate-[45deg] text-white`}
                  >
                    +
                  </p>
                </div>
              ) : (
                <div
                  className="w-[22px] h-[22px] flex items-center justify-center relative"
                  onClick={() => setNevMobileVButton(true)}
                >
                  <HiOutlineMenuAlt3
                    className={`[@media(min-width:420px)]:text-[25px] text-[22px] ${
                      nevMobileVButton ? "hidden" : "flex"
                    } text-white`}
                  />
                </div>
              )}
            </div>
            {/* ---------------Mobile Nav Item--------------- */}
            <div
              className={`absolute top-[4.6rem] right-0 w-[165px] h-[10.9rem] bg-[#31064dd6] shadow-[0px_1px_3px_0px_#0000002b] rounded-b-[3px] z-0 flex md:hidden ${
                nevMobileVButton
                  ? `NavberMViewAnimationLeft`
                  : `NavberMViewAnimationRight`
              }`}
            >
              <div className="w-full h-full flex flex-col justify-start pl-[1.5rem] py-[1rem] text-white">
                {navItems.map((key) => {
                  return (
                    <Link
                      key={key.id}
                      to={key.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={100}
                      className={
                        "sm:px-3 px-[5px] py-2 text-[13px] font-medium cursor-pointer block text-[#fff]"
                      }
                      aria-current="page"
                      onClick={() => setNevMobileVButton(false)}
                    >
                      {key.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navber;
