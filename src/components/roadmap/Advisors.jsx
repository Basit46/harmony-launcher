import React from "react";
import { advisorsItems } from "../../assets/sources/advisorsItems";
import Advisor from "./Advisor";
import { motion } from "framer-motion";

const Advisors = () => {
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
      className="h-fit lg:h-[82vh]"
    >
      <h1 className="text-[64px] leading-[77px] text-white font-Russo mb-[48px]">
        Our Advisors
      </h1>
      <div className="flex flex-wrap justify-center lg:justify-start gap-x-[30px] gap-y-[60px]">
        {advisorsItems.map((advisor, index) => (
          <Advisor key={index} advisor={advisor} />
        ))}
      </div>
    </motion.div>
  );
};

export default Advisors;
