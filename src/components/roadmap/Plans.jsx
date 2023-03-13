import React from "react";
import map from "../../assets/map.svg";
import { motion } from "framer-motion";

const Plans = () => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1, transition: { duration: 2, delay: 1 } }}
      exit={{ y: "-100%", opacity: 0, transition: { duration: 2 } }}
    >
      <h1 className="text-[64px] leading-[77px] text-white font-Russo">
        Roadmap
      </h1>
      <h2 className="uppercase font-Qanelas text-[32px] leading-[38px] text-[#00FFB2] mt-[18px] mb-[40px]">
        CURRENT PLANS
      </h2>
      <div className="map relative py-[48px]">
        <div className="absolute top-[18px] left-[7%] h-fit w-fit">
          <li>Harmony Launcher Private Sale</li>
          <li>Public sale</li>
        </div>
        <div className="absolute top-0  right-[30%]  h-fit w-fit">
          <li>Mobile App Testnet </li>
          <li>$Harl TGE & Listing </li>
          <li>AMM DEX Beta V1</li>
        </div>
        <div className="absolute bottom-0  left-[31%]  h-fit w-fit">
          <li>Platform Launch</li>
          <li>Harmony Launcher IDOs</li>
          <li>AMM DEX Testnet</li>
        </div>
        <div className="absolute bottom-0  right-[1%]  h-fit w-fit">
          <li>AMM DEX Mainnet</li>
          <li>Migration on another chains</li>
          <li>Mobile App Mainnet</li>
        </div>
        <img src={map} alt="map" />
      </div>
    </motion.div>
  );
};

export default Plans;
