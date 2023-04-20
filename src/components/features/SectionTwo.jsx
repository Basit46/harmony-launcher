import React from "react";
import cap from "../../assets/cap.png";
import { motion } from "framer-motion";

const SectionTwo = () => {
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
      className="min-h-[82vh] lg:h-[82vh] flex flex-col lg:flex-row lg:justify-between pt-[60px]"
    >
      <div className="w-[95%] lg:w-[70%] 2xl:w-[50%] order-2 lg:order-1">
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

      <div className="lg:mr-[10px] order-1 lg:order-2">
        <img src={cap} alt="cap" />
      </div>
    </motion.div>
  );
};

export default SectionTwo;
