import React from "react";
import loadIcon from "../assets/lamp.png";
import { motion } from "framer-motion";

const Market = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        y: "0",
        opacity: 1,
        transition: { duration: 0.5, delay: 0.4 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="market h-[82vh] w-full flex justify-center"
    >
      <div className="flex flex-col items-center mt-[50px]">
        <img className="mb-[47px]" src={loadIcon} alt="loading" />
        <div className="line w-[90vw] vsm:w-[496px]"></div>
        <h1 className="font-Russo text-[50px] vsm:text-[75px] leading-[90px] my-[25px]">
          Coming Soon
        </h1>
        <div className="line w-[90vw] vsm:w-[496px]"></div>
      </div>
    </motion.div>
  );
};

export default Market;
