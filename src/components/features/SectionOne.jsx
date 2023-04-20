import React from "react";
import rocket from "../../assets/rocket2.png";
import { motion } from "framer-motion";

const SectionOne = () => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1, transition: { duration: 1 } }}
      exit={{ y: "-100%", opacity: 0, transition: { duration: 1 } }}
      onAnimationStart={() => {
        if (window.innerWidth > 1024) {
          document.body.classList.add("overflow-hidden");
        } else {
        }
      }}
      className="h-fit lg:h-[82vh] w-full flex flex-col lg:flex-row lg:justify-between"
    >
      <div className="w-full lg:w-[75%] 2xl:w-[50%] order-2 lg:order-1">
        <h1 className="font-Russo text-[50px] md:text-[64px] leading-[77px] text-white">
          Our Technologies
        </h1>
        <h2 className="font-normal text-[32px] leading-[38px] text-[#00FFB2] mt-[18px] mb-[35px]">
          FEATURES
        </h2>
        <p className="text-[35px] leading-[159.69%] text-white font-Russo mb-[1px]">
          IDO + IGO LaunchPad
        </p>
        <p className="font-medium text-[19px] leading-[159.69%] text-white pr-[20px] lg:pr-0">
          Harmony Launcher is the world first decentralized launchpad to feature
          the concept of initial game offerings (IGO) & Initial Decentralized
          exchange offering (IDO) on the Harmony Blockchain. Harmony Launchpad
          would eliminate the possibility of an unfair allocation system by
          providing all developers and investors a fair chance to raise
          funds/invest in a secure and guaranteed IGO and IDO via Harmony
          Launcher’s unique allocation tires.
        </p>
      </div>

      <div className="lg:mr-[10px] order-1 lg:order-2 w-[60vw] lg:w-auto">
        <img src={rocket} alt="rocket" />
      </div>
    </motion.div>
  );
};

export default SectionOne;
