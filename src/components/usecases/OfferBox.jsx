import React from "react";

const OfferBox = ({ item }) => {
  return (
    <div className="offerBox w-[277px] h-[363px] backdrop-blur-[7.5px] rounded-[20px] px-[25px] py-[20px] flex flex-col items-center">
      <img className="w-[68px] h-[68px]" src={item.img} alt="offer" />
      <div className="w-7 h-0 border border-solid border-[#00FFB2] mt-[24px] mb-[17px]"></div>
      <p className="text-[19px] leading-[154.7%] text-center text-[#C6CEE3]">
        {item.text}
      </p>
    </div>
  );
};

export default OfferBox;
