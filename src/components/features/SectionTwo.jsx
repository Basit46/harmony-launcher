import React from "react";
import cap from "../../assets/cap.png";

const SectionTwo = () => {
  return (
    <div className="flex h-[82vh] justify-between pt-[60px]">
      <div className="w-[70%]">
        <h1 className="text-[35px] leading-[159.69%] text-white font-Russo">
          Harmony Incubator
        </h1>
        <p className="font-medium text-[19px] leading-[159.69%] text-white mt-[1px]">
          Harmony Incubator will serve as an accelerator for all the unique and
          innovative start-ups, primarily based on the Harmony Network by
          assisting and shaping these projects to fit into the De-Fi ecosystem.
          Harmony Incubator would provide assistance in all possible aspects
          such as providing business and operational support, assistance in
          crafting tokonomas and other financial aspects, providing graphical
          assistance etc.
        </p>
      </div>
      <div className="mr-[10px]">
        <img src={cap} alt="cap" />
      </div>
    </div>
  );
};

export default SectionTwo;
