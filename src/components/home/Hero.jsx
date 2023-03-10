import React from "react";
import Rocket from "../../assets/rocket.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
      exit={{ y: "-100%", opacity: 0, transition: { duration: 1 } }}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      // onAnimationComplete={() =>
      //   document.body.classList.remove("overflow-hidden")
      // }
      className="h-[82vh]"
    >
      <h1 className="font-Russo text-[64px] leading-[77px] text-white">
        World’s First <span className="text-[#00FFB2]">IDO + IGO</span>{" "}
        Incubator & Launchpad
      </h1>
      <h2 className="font-normal text-[32px] leading-[38px] text-[#00FFB2] uppercase mt-[19px] mb-[23px]">
        Built On Harmony Blockchain
      </h2>
      <p className="font-medium text-[19px] leading-[159.69%] text-white">
        The secure and hassle-free way to launch your projects on the Harmony
        Network.
      </p>
      <button className="px-5 py-[15px] rounded-[30px] font-medium text-xl leading-6 text-white mt-[32px]">
        Apple For IOD
      </button>
      <img
        className="z-[1] fixed h-[80vh] right-[90px] bottom-0"
        src={Rocket}
        alt="rocket"
      />
    </motion.div>
  );
};

export default Hero;
