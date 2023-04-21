import React, { useEffect } from "react";
import { featureItems } from "../../assets/sources/featuresItems";
import FeaturesBox from "./FeaturesBox";
import { motion } from "framer-motion";

const SectionFour = () => {
  useEffect(() => {
    document.body.classList.remove("overflow-hidden");
    const kunt = document.querySelector("#features-outlet");
    kunt.classList.remove("overflow-hidden");
    kunt.classList.remove("h-[82vh]");
  }, []);
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
      className="min-h-[82vh]"
    >
      <h1 className="text-[50px] vsm:text-[64px] leading-[1.2] vsm:leading-[77px] text-white font-Russo">
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
