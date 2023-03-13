import React from "react";
import { featureItems } from "../../assets/sources/featuresItems";
import FeaturesBox from "./FeaturesBox";
import { motion } from "framer-motion";

const SectionFour = () => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1, transition: { duration: 2, delay: 1 } }}
      exit={{ y: "-100%", opacity: 0, transition: { duration: 2 } }}
      className="h-fit"
    >
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
    </motion.div>
  );
};

export default SectionFour;
