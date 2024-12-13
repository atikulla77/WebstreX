import React from "react";
import bg from "../../Image/bg_2.jpg";

import logo1 from "../../Image/Branding/branding-1.png";
import logo2 from "../../Image/Branding/branding-2.png";
import logo3 from "../../Image/Branding/branding-3.png";
import logo4 from "../../Image/Branding/branding-4.png";
import logo5 from "../../Image/Branding/branding-5.png";
import logo6 from "../../Image/Branding/branding-6.png";
import logo7 from "../../Image/Branding/branding-7.png";
import logo8 from "../../Image/Branding/branding-8.png";
import logo9 from "../../Image/Branding/branding-9.png";
import logo10 from "../../Image/Branding/branding-10.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Partners = () => {
  const PartnersData = [
    { id: 1, img: logo1 },
    { id: 2, img: logo2 },
    { id: 3, img: logo3 },
    { id: 4, img: logo4 },
    { id: 5, img: logo5 },
    { id: 6, img: logo6 },
    { id: 7, img: logo7 },
    { id: 8, img: logo8 },
    { id: 9, img: logo9 },
    { id: 10, img: logo10 },
  ];
  const TeamData = [
    {
      id: 1,
      img: "https://titrow-ecommerce-next.netlify.app/Home/Team/person_1.jpg",
      name: "Jane Ashton",
      tittle: "Manager",
      description: "Lorem ipsum sunt dolor sit amet, consecte voluptat velit",
    },
    {
      id: 2,
      img: "https://titrow-ecommerce-next.netlify.app/Home/Team/person_2.jpg",
      name: "Jane Ashton",
      tittle: "Manager",
      description: "Lorem ipsum sunt dolor sit amet, consecte voluptat velit",
    },
    {
      id: 3,
      img: "https://titrow-ecommerce-next.netlify.app/Home/Team/person_3.jpg",
      name: "Jane Ashton",
      tittle: "Manager",
      description: "Lorem ipsum sunt dolor sit amet, consecte voluptat velit",
    },
    {
      id: 4,
      img: "https://titrow-ecommerce-next.netlify.app/Home/Team/person_4.jpg",
      name: "Jane Ashton",
      tittle: "Manager",
      description: "Lorem ipsum sunt dolor sit amet, consecte voluptat velit",
    },
    {
      id: 5,
      img: "https://titrow-ecommerce-next.netlify.app/Home/Team/person_1.jpg",
      name: "Jane Ashton",
      tittle: "Manager",
      description: "Lorem ipsum sunt dolor sit amet, consecte voluptat velit",
    },
    {
      id: 6,
      img: "https://titrow-ecommerce-next.netlify.app/Home/Team/person_2.jpg",
      name: "Jane Ashton",
      tittle: "Manager",
      description: "Lorem ipsum sunt dolor sit amet, consecte voluptat velit",
    },
  ];
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-[100%] relative flex flex-col justify-center">
      <div className={`w-full h-full absolute top-0 left-0 z-0`}>
        <img
          src={bg}
          className="w-full h-full object-cover [@media(min-width:700px)]:object-top object-left"
        />
      </div>
      <div className="container w-full h-[100%] flex flex-col [@media(min-width:600px)]:py-[7rem] py-[5rem] mx-auto relative">
        {/* Our Partners */}
        <div className="w-full relative mx-auto flex flex-col text-center justify-center [@media(min-width:600px)]:pb-[1.5rem] pb-[1rem]">
          <p className="text-[16px] tracking-[0.2px] font-[400] text-[#dfdfdf] uppercase KarlaFont">
            Our Partners
          </p>
          <h1 className="[@media(min-width:600px)]:text-[30px] [@media(min-width:400px)]:text-[25px] text-[20px] text-white font-[600] Poppins pt-[2px]">
            Who Work With Us
          </h1>
        </div>
        <div className="w-[100%] z-10 GeologicaFont text-white relative grid [@media(min-width:770px)]:!grid-cols-5 [@media(min-width:640px)]:grid-cols-4 grid-cols-3 place-items-center items-center justify-center text-center">
          {PartnersData.map((key) => {
            return (
              <div
                key={key.id}
                className="[@media(min-width:770px)]:!w-[130px] [@media(min-width:640px)]:w-[110px] [@media(min-width:420px)]:w-[95px] w-[85px] [@media(min-width:640px)]:h-[100px] h-[70px] flex items-center justify-center mx-auto [@media(min-width:640px)]:my-[1rem] my-[0.5rem]"
              >
                <div className="[@media(min-width:770px)]:!w-[120px] [@media(min-width:640px)]:w-[100px] [@media(min-width:420px)]:w-[85px] w-[75px] h-full flex items-center">
                  <img src={key.img} className="w-full " />
                </div>
              </div>
            );
          })}
        </div>
        {/* Our Team */}
        <div
          className="w-full relative mx-auto flex flex-col text-center justify-center [@media(min-width:480px)]:pt-[3rem] pt-[3.5rem]"
          id="Team"
        >
          <p className="text-[16px] tracking-[0.2px] font-[400] text-[#dfdfdf] uppercase KarlaFont">
            Our Team
          </p>
          <h1 className="[@media(min-width:600px)]:text-[30px] [@media(min-width:400px)]:text-[25px] text-[20px] text-white font-[600] Poppins pt-[2px]">
            Meet Our Team
          </h1>
        </div>
        <div className="container2 relative z-[1] flex flex-wrap justify-between items-center mx-auto xl:gap-0 gap-[30px] [@media(min-width:480px)]:mt-[3.5rem] mt-[2.5rem]">
          <Slider
            className="w-full h-full flex items-center justify-center relative"
            {...settings}
          >
            {TeamData.map((key) => {
              return (
                <div
                  key={key.id}
                  className={` relative w-[290px] h-[290px] flex justify-center items-center mx-auto`}
                >
                  <div className="w-[285px] h-full flex items-center justify-center mx-auto rounded-[15px] bg-[#2e1e5d66] shadow-[0px_0px_3px_0px_#0000003d] relative">
                    <div
                      className={`relative flex items-center justify-center flex-col transition-[0.5s] opacity-[0.9]`}
                    >
                      <div className="w-[150px] h-[120px]">
                        <img
                          src={key.img}
                          className="w-[120px] h-[120px] rounded-[50%] object-cover mx-auto"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-[#fff] tracking-[0.5px] text-[25px] leading-[32px] font-[500] text-center mt-[10px]">
                          {key.name}
                        </h3>
                        <p className="text-[13.5px] font-[400] tracking-[0.3px] text-[#ffffffc8] uppercase Poppins">
                          {key.tittle}
                        </p>
                        <p className="text-[13.5px] font-[400] w-[220px] text-[#ffffffd1] GeologicaFont">
                          {key.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-[-15px] left-0 w-full flex justify-center items-center">
                      <a className="w-[30px] h-[30px] flex cursor-pointer items-center justify-center text-center rounded-[50%] bg-[#33216a] mx-[3px]">
                        <FaLinkedinIn className="text-[14px] text-white " />
                      </a>
                      <a className="w-[30px] h-[30px] flex cursor-pointer items-center justify-center text-center rounded-[50%] bg-[#33216a] mx-[3px]">
                        <FaFacebookF className="text-[14px] text-white " />
                      </a>
                      <a className="w-[30px] h-[30px] flex cursor-pointer items-center justify-center text-center rounded-[50%] bg-[#33216a] mx-[3px]">
                        <FaTwitter className="text-[14px] text-white " />
                      </a>
                    </div>
                  </div>

                  {/* <ul className={` absolute flex bottom-[40px]`}>
                    <li className="">
                      <a href="#"></a>
                    </li>
                    <li className="">
                      <a href="#"></a>
                    </li>
                    <li className="">
                      <a href="#"></a>
                    </li>
                  </ul> */}
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className=" absolute top-0 left-[-40px] h-full [@media(min-width:420px)]:flex hidden justify-center items-center "
    >
      <div className=" flex w-[35px] h-[35px] float-left rounded-[50%] bg-[#3a2a69b1] text-white justify-center items-center cursor-pointer">
        <FaAngleLeft className="text-[13px] " />
      </div>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className=" absolute top-0 right-[-40px] h-full [@media(min-width:420px)]:flex hidden justify-center items-center "
    >
      <div className="flex w-[35px] h-[35px] float-right rounded-[50%]  bg-[#3a2a69b1] text-white justify-center items-center cursor-pointer">
        <FaAngleRight className="text-[13px]" />
      </div>
    </div>
  );
}

export default Partners;
