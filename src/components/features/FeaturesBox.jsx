import React from "react";

const FeaturesBox = ({ item }) => {
  return (
    <div className="offerBox w-[90%] md:w-[469px] h-fit md:h-[372px] backdrop-blur-[7.5px] rounded-[20px] px-[25px] py-[20px] flex flex-col items-center">
      <img className="w-[68px] h-[68px]" src={item.img} alt="offer" />
      <h1 className="text-xl leading-[154.7%] text-center text-[#00FFB2] font-Russo mt-[42px] mb-[13px]">
        {item.title}
      </h1>
      <div className="w-7 h-0 border border-solid border-[#00FFB2] mb-[13px]"></div>
      <p className="text-[19px] leading-[154.7%] text-center text-[#C6CEE3]">
        {item.text}
      </p>
    </div>
  );
};

export default FeaturesBox;
