import React from "react";
import Banner from "../Components/Home/Banner";
import About from "../Components/Home/About";
import Mission from "../Components/Home/Mission";

const Home = () => {
  return (
    <div className="w-full h-[100%] bg-[#0a012a]">

      <Banner />
      <About />
      <Mission />

    </div>
  );
};

export default Home;
