import React from "react";
import Earth from "../../assets/Earth.svg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1, transition: { duration: 2, delay: 1 } }}
      exit={{ y: "100%", opacity: 0, transition: { duration: 2 } }}
      className="h-[82vh] flex justify-between"
    >
      <div className="w-[50%]">
        <h1 className="text-[64px] leading-[77px] text-white font-Russo">
          About US
        </h1>
        <h2 className="uppercase font-Qanelas text-[32px] leading-[38px] text-[#00FFB2] mt-[18px] mb-[23px]">
          Who we Are?
        </h2>
        <p className="font-medium text-[19px] leading-[159.69%] text-white">
          Harmony Launcher is the world’s first decentralized IDO + IGO
          launchpad and incubator with an integrated AMM DEX who’s primary focus
          is to provide all the necessary grounds for start-ups and projects
          based on the harmony network to build, raise funds & launch
          successfully.
        </p>
      </div>

      <div className="mr-[40px]">{/* <img src={Earth} alt="Earth" /> */}</div>
    </motion.div>
  );
};

export default About;
