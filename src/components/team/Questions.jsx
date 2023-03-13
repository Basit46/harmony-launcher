import React from "react";
import { motion } from "framer-motion";

const Questions = () => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1, transition: { duration: 2, delay: 1 } }}
      exit={{ y: "-100%", opacity: 0, transition: { duration: 2 } }}
      className="questions"
    >
      <h1 className="text-[64px] leading-[77px] text-white font-Russo mb-[48px]">
        Have Any Questions?
      </h1>
      <div className="offerBox w-[790px] h-[274px] backdrop-blur-[7.5px] rounded-[20px] p-[20px]">
        <p className="text-[26px] leading-[31px] text-[#00FFB2]">
          Feel Free To Reach Out!
        </p>
        <div className="w-full flex justify-between mt-[31px] mb-[30px]">
          <input
            className="w-[357px] placeholder:text-[18px] placeholder:text-white"
            placeholder="First name"
            type="text"
          />
          <input
            className="w-[357px] placeholder:text-[18px] placeholder:text-white"
            placeholder="Last name"
            type="text"
          />
        </div>
        <button className="px-5 py-[15px] rounded-[30px] font-medium text-xl text-white">
          Send
        </button>
      </div>
    </motion.div>
  );
};

export default Questions;
