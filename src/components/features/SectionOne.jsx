import React from "react";
import rocket from "../../assets/rocket2.png";

const SectionOne = () => {
  return (
    <div className="h-[82vh] w-full flex justify-between overflow-hidden">
      <div className="w-[75%]">
        <h1 className="font-Russo text-[64px] leading-[77px] text-white">
          Our Technologies
        </h1>
        <h2 className="font-normal text-[32px] leading-[38px] text-[#00FFB2] mt-[18px] mb-[35px]">
          FEATURES
        </h2>
        <p className="text-[35px] leading-[159.69%] text-white font-Russo mb-[1px]">
          IDO + IGO LaunchPad
        </p>
        <p className="font-medium text-[19px] leading-[159.69%] text-white">
          Harmony Launcher is the world first decentralized launchpad to feature
          the concept of initial game offerings (IGO) & Initial Decentralized
          exchange offering (IDO) on the Harmony Blockchain. Harmony Launchpad
          would eliminate the possibility of an unfair allocation system by
          providing all developers and investors a fair chance to raise
          funds/invest in a secure and guaranteed IGO and IDO via Harmony
          Launcher’s unique allocation tires.
        </p>
      </div>

      <div className="mr-[10px]">
        <img src={rocket} alt="rocket" />
      </div>
    </div>
  );
};

export default SectionOne;
