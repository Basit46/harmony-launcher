import React from "react";
import goggle from "../../assets/goggle.png";

const SectionThree = () => {
  return (
    <div className="flex h-[82vh] justify-between pt-[60px]">
      <div className="w-[70%]">
        <h1 className="text-[35px] leading-[159.69%] text-white font-Russo">
          Harmony AMM DEX
        </h1>
        <p className="font-medium text-[19px] leading-[159.69%] text-white mt-[1px]">
          Harmony AMM DEX is a blockchain based liquidity protocol that would
          facilitate the fore factor to Instantly swap tokens with low fees and
          slippage along with industries best exchange rates across the entire
          Decentralized Finance ecosystem.
        </p>
      </div>
      <div className="mr-[10px]">
        <img src={goggle} alt="cap" />
      </div>
    </div>
  );
};

export default SectionThree;
