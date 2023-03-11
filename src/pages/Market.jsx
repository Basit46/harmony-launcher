import React from "react";
import loadIcon from "../assets/lamp.png";

const Market = () => {
  return (
    <div className="market h-[82vh] w-full flex justify-center">
      <div className="flex flex-col items-center mt-[50px]">
        <img className="mb-[47px]" src={loadIcon} alt="loading" />
        <div className="line"></div>
        <h1 className="font-Russo text-[75px] leading-[90px] my-[25px]">
          Coming Soon
        </h1>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Market;
