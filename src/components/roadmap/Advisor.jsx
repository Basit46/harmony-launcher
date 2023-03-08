import React from "react";
import twitter from "../../assets/twitter.svg";

const Advisor = ({ advisor }) => {
  return (
    <div className="offerBox relative w-[221px] h-[167px] backdrop-blur-[15px] rounded-[20px] flex flex-col justify-center items-center">
      <img
        className="absolute top-[-50%] translate-y-[50%] left-[50%] translate-x-[-50%]"
        src={advisor.img}
        alt="advisor"
      />
      <img
        className="absolute top-[10px] right-[10px]"
        src={twitter}
        alt="twitter"
      />

      <h1 className="font-semibold text-[25px] leading-[31px] text-center text-[#00FFB2] mt-[20px]">
        {advisor.name}
      </h1>
      <p className="font-medium text-base leading-[19px] text-center text-white mt-[22px]">
        {advisor.role}
      </p>
    </div>
  );
};

export default Advisor;
