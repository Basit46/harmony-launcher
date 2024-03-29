import React, { useEffect } from "react";
import img1 from "../../assets/image 19.svg";
import img2 from "../../assets/image 20.svg";
import img3 from "../../assets/image 21.svg";
import img4 from "../../assets/image 22.svg";
import img5 from "../../assets/image 23.svg";
import img6 from "../../assets/image 24.svg";
import img7 from "../../assets/image 26.svg";
import img8 from "../../assets/image 27.svg";
import img9 from "../../assets/image 28.svg";
import img10 from "../../assets/image 29.svg";
import img11 from "../../assets/image 30.svg";
import { motion } from "framer-motion";

const Backers = () => {
  useEffect(() => {
    document.body.classList.remove("overflow-hidden");
  }, []);
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
      className="min-h-[82vh]"
    >
      <h1 className="text-[48px] vsm:text-[64px] leading-[1.2] vsm:leading-[77px] text-white font-Russo">
        Our Backers
      </h1>
      <div className="backers-wrap flex flex-wrap justify-center lg:justify-start gap-[10px] pb-[10px] mt-[20px] lg:mt-0">
        <div>
          <img src={img1} alt="backer logo" />
        </div>
        <div>
          <img src={img2} alt="backer logo" />
        </div>
        <div>
          <img src={img3} alt="backer logo" />
        </div>
        <div>
          <img src={img4} alt="backer logo" />
        </div>
        <div>
          <img src={img5} alt="backer logo" />
        </div>
        <div>
          <img src={img6} alt="backer logo" />
        </div>
        <div>
          <img src={img7} alt="backer logo" />
        </div>
        <div>
          <img src={img8} alt="backer logo" />
        </div>
        <div>
          <img src={img9} alt="backer logo" />
        </div>
        <div>
          <img src={img10} alt="backer logo" />
        </div>
        <div>
          <img src={img11} alt="backer logo" />
        </div>
      </div>
    </motion.div>
  );
};

export default Backers;
