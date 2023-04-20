import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
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
      className="min-h-[82vh] lg:h-[82vh] flex flex-col lg:flex-row justify-between"
    >
      <div className="w-[90%] lg:w-[60%]">
        <h1 className="font-normal text-[35px] leading-[140%] text-white font-Russo">
          The secure and hassle-free way to launch your projects on the Harmony
          Network.
        </h1>
        <div className="flex space-x-[31px] mt-[30px] lg:mt-[125px] mb-[30px] lg:mb-[138px]">
          <FaFacebook />
          <FaLinkedin />
        </div>
        <p className="text-[23px] leading-[27px] text-[#00FFB2]">
          © 2021 Harmonylauncher. All right reserved.
        </p>
      </div>

      <div className="flex flex-row lg:flex-col justify-start lg:justify-center mr-0 lg:mr-[40px] flex-wrap gap-x-[20px] lg:gap-x-0 ">
        <Link
          to="/privacy-policy"
          className="font-bold text-xl leading-[25px] underline text-white"
        >
          Privacy Policy
        </Link>

        <Link
          to="/privacy-policy"
          className="font-bold text-xl leading-[25px] underline text-white lg:my-[136px]"
        >
          Terms Of Service
        </Link>
        <Link
          to="/privacy-policy"
          className="font-bold text-xl leading-[25px] underline text-white"
        >
          Contact Us
        </Link>
      </div>
    </motion.div>
  );
};

export default Footer;
