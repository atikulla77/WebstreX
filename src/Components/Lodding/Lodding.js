import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

function Lodding() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <FadeLoader size={80}  color="#EA3E76" />
    </div>
  );
}

export default Lodding;
