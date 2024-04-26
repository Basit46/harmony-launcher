import React from "react";
import Rocket from "../../assets/rocket.svg";
import { motion } from "framer-motion";
import { useNavContext } from "../../hooks/Context";

const Hero = () => {
  const { clone } = useNavContext();
  return (
    <motion.div
      initial={{
        y: clone === 1 ? "100%" : "-100%",
        opacity: 0,
      }}
      animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
      exit={{ y: "-100%", opacity: 0, transition: { duration: 1 } }}
      onAnimationStart={() => {
        if (window.innerWidth > 1024) {
          document.body.classList.add("overflow-hidden");
        } else {
        }
      }}
      className="relative min-h-[82vh] lg:h-[82vh] w-full"
    >
      <div className="w-auto 2xl:w-[50vw] ">
        <h1 className="font-Russo text-[50px] vsm:text-[64px] leading-[1.2] vsm:leading-[77px] text-white">
          World’s First <span className="text-[#00FFB2]">IDO + IGO</span>{" "}
          Incubator & Launchpad
        </h1>
        <h2 className="font-normal text-[22px] vsm:text-[32px] leading-[38px] text-[#00FFB2] uppercase mt-[19px] mb-[23px]">
          Built On Harmony Blockchain
        </h2>
        <p className="font-medium text-[19px] leading-[159.69%] text-white">
          The secure and hassle-free way to launch your projects on the Harmony
          Network.
        </p>
        <button className="btn px-5 py-[15px] rounded-[30px] font-medium text-xl leading-6 text-white mt-[32px] mb-[20px] md:mb-0">
          Apple For IOD
        </button>
      </div>
      <img
        className="fixed h-[80vh] right-0 vsm:right-[90px] 2xl:right-[190px] bottom-0 z-[-1] opacity-20 vsm:opacity-50 lg:opacity-100"
        src={Rocket}
        alt="rocket"
      />
    </motion.div>
  );
};

export default Hero;
