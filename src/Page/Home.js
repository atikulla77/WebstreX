import React from "react";
import Banner from "../Components/Home/Banner";
import About from "../Components/Home/About";
import Mission from "../Components/Home/Mission";
import Footer from "../Components/Footer/Footer";
import Impact from "../Components/Home/Impact";
import Partners from "../Components/Home/Partners";

const Home = () => {
  return (
    <div className="w-full h-[100%] bg-[#0a012a]">

      <Banner />
      <About />
      <Mission />
      <Impact />
      <Partners />
      <Footer />

    </div>
  );
};

export default Home;
