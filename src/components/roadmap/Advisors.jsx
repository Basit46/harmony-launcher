import React from "react";
import { advisorsItems } from "../../assets/sources/advisorsItems";
import Advisor from "./Advisor";

const Advisors = () => {
  return (
    <div>
      <h1 className="text-[64px] leading-[77px] text-white font-Russo mb-[48px]">
        Our Advisors
      </h1>
      <div className="flex flex-wrap gap-x-[30px] gap-y-[60px]">
        {advisorsItems.map((advisor, index) => (
          <Advisor key={index} advisor={advisor} />
        ))}
      </div>
    </div>
  );
};

export default Advisors;
