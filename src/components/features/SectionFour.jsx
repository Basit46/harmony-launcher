import React from "react";
import { featureItems } from "../../assets/sources/featuresItems";
import FeaturesBox from "./FeaturesBox";

const SectionFour = () => {
  return (
    <div className="h-fit">
      <h1 className="text-[64px] leading-[77px] text-white font-Russo">
        Advantages
      </h1>
      <h2 className="uppercase font-Qanelas text-[32px] leading-[38px] text-[#00FFB2] mt-[18px] mb-[42px]">
        WHAT WE OFFER?
      </h2>

      <div style={{ gridGap: "20px" }} className="flex flex-wrap z-[1] ">
        {featureItems.map((item, index) => (
          <FeaturesBox key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SectionFour;
