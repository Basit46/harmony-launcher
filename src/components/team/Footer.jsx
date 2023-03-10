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
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      className="flex justify-between"
    >
      <div className="w-[60%]">
        <h1 className="font-normal text-[35px] leading-[140%] text-white font-Russo">
          The secure and hassle-free way to launch your projects on the Harmony
          Network.
        </h1>
        <div className="flex space-x-[31px] mt-[125px] mb-[138px]">
          <FaFacebook />
          <FaLinkedin />
        </div>
        <p className="text-[23px] leading-[27px] text-[#00FFB2]">
          © 2021 Harmonylauncher. All right reserved.
        </p>
      </div>

      <div className="flex flex-col justify-center mr-[40px]">
        <Link
          to="/privacy-policy"
          className="font-bold text-xl leading-[25px] underline text-white"
        >
          Privacy Policy
        </Link>

        <Link
          to="/privacy-policy"
          className="font-bold text-xl leading-[25px] underline text-white my-[136px]"
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
