import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/member1.svg";
import img2 from "../../assets/member2.png";
import img3 from "../../assets/member3.png";
import { motion } from "framer-motion";

const TeamMembers = () => {
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
    >
      <h1 className="text-[50px] vsm:text-[64px] leading-[1.2] vsm:leading-[77px] text-white font-Russo mb-[70px] vsm:mb-[48px]">
        Our Team
      </h1>
      <div className="flex flex-wrap justify-center lg:justify-start gap-x-0 md:gap-x-[30px] gap-y-[60px]">
        <div className="offerBox relative w-[262px] h-[228px] backdrop-blur-[15px] rounded-[20px] flex flex-col justify-center items-center">
          <img
            className="absolute w-[141px] h-[141px] top-[-50%] translate-y-[50%] left-[50%] translate-x-[-50%]"
            src={img1}
            alt="advisor"
          />
          <Link to="/">
            <p className="absolute top-[10px] right-[10px] text-[blue] cursor-pointer">
              In
            </p>
          </Link>

          <h1 className="font-semibold text-[25px] leading-[31px] text-center text-[#00FFB2] mt-[80px]">
            Harshad
          </h1>
          <p className="font-medium text-base leading-[19px] text-center text-white mt-[43.33px]">
            CEO
          </p>
        </div>

        <div className="offerBox relative w-[262px] h-[228px] backdrop-blur-[15px] rounded-[20px] flex flex-col justify-center items-center">
          <img
            className="absolute w-[141px] h-[141px] top-[-50%] translate-y-[50%] left-[50%] translate-x-[-50%]"
            src={img2}
            alt="advisor"
          />
          <Link to="/">
            <p className="absolute top-[10px] right-[10px] text-[blue] cursor-pointer">
              In
            </p>
          </Link>

          <h1 className="font-semibold text-[25px] leading-[31px] text-center text-[#00FFB2] mt-[80px]">
            Ankit
          </h1>
          <p className="font-medium text-base leading-[19px] text-center text-white mt-[43.33px]">
            Co-Founder
          </p>
        </div>

        <div className="offerBox relative w-[262px] h-[228px] backdrop-blur-[15px] rounded-[20px] flex flex-col justify-center items-center">
          <img
            className="absolute w-[141px] h-[141px] top-[-50%] translate-y-[50%] left-[50%] translate-x-[-50%]"
            src={img3}
            alt="advisor"
          />
          <Link to="/">
            <p className="absolute top-[10px] right-[10px] text-[blue] cursor-pointer">
              In
            </p>
          </Link>

          <h1 className="font-semibold text-[25px] leading-[31px] text-center text-[#00FFB2] mt-[80px]">
            Prashant
          </h1>
          <p className="font-medium text-base leading-[19px] text-center text-white mt-[43.33px]">
            CMO
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMembers;
