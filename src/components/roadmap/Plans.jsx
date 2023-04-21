import React from "react";
import map from "../../assets/map.svg";
import { motion } from "framer-motion";

const Plans = () => {
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
      className="h-[82vh] w-[80vw]"
    >
      <h1 className="text-[50px] vsm:text-[64px] leading-[1.2] vsm:leading-[77px] text-white font-Russo">
        Roadmap
      </h1>
      <h2 className="uppercase font-Qanelas text-[32px] leading-[38px] text-[#00FFB2] mt-[5px] vsm:mt-[10px] mb-[10px]">
        CURRENT PLANS
      </h2>

      <div className="w-[95%] overflow-x-auto">
        <div className="w-fit pt-[10px]">
          <div className="map relative min-w-[900px] px-[30px] pt-[40px] pb-[48px]">
            <div className="absolute top-[10px] left-[7%] h-fit w-fit">
              <li>Harmony Launcher Private Sale</li>
              <li>Public sale</li>
            </div>
            <div className="absolute top-[-15px]  right-[30%]  h-fit w-fit">
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
            <img className="min-w-[900px]" src={map} alt="map" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Plans;
