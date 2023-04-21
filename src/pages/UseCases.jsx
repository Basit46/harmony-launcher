import React, { useEffect } from "react";
import { offerItems } from "../assets/sources/OfferItems";
import OfferBox from "../components/usecases/OfferBox";
import { motion } from "framer-motion";

const UseCases = () => {
  useEffect(() => {
    document.body.classList.remove("overflow-hidden");
  }, []);
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1, transition: { duration: 1 } }}
      exit={{ y: "-100%", opacity: 0, transition: { duration: 1 } }}
      onAnimationStart={() => {
        if (window.innerWidth > 768) {
          document.body.classList.add("overflow-hidden");
        } else {
        }
      }}
      // onAnimationComplete={() =>
      //   //document.body.classList.remove("overflow-hidden")
      // }
      className="h-full w-full overflow-x-hidden"
    >
      <h1 className="font-Russo text-[50px] md:text-[64px] leading-[1.2] vsm:leading-[77px] text-white text-center md:text-left">
        Harmony Launcher's Aim
      </h1>
      <p className="font-normal text-[32px] leading-[38px] text-[#00FFB2] uppercase mt-[10px] mb-[32px] text-center md:text-left">
        WHAT WE OFFER?
      </p>

      <div
        style={{ gridGap: "20px" }}
        className="flex justify-center flex-wrap "
      >
        {offerItems.map((item, index) => (
          <OfferBox key={index} item={item} />
        ))}
      </div>
    </motion.div>
  );
};

export default UseCases;
