import React from "react";
import goggle from "../../assets/goggle.png";
import { motion } from "framer-motion";

const SectionThree = () => {
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
      className="min-h-[82vh] flex flex-col lg:flex-row lg:justify-between lg:pt-[60px] pb-[20px] vsm:pb-0"
    >
      <div className="w-[95%] lg:w-[70%] 2xl:w-[50%] order-2 lg:order-1">
        <h1 className="text-[35px] leading-[1.2] vsm:leading-[159.69%] text-white font-Russo mb-[20px] vsm:mb-0">
          Harmony AMM DEX
        </h1>
        <p className="font-medium text-[19px] leading-[159.69%] text-white mt-[1px]">
          Harmony AMM DEX is a blockchain based liquidity protocol that would
          facilitate the fore factor to Instantly swap tokens with low fees and
          slippage along with industries best exchange rates across the entire
          Decentralized Finance ecosystem.
        </p>
      </div>

      <div className="mr-[10px] order-1 lg:order-2 pb-[30px] vsm:pb-0">
        <img src={goggle} alt="cap" />
      </div>
    </motion.div>
  );
};

export default SectionThree;
