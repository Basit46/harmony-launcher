import React from "react";
import bnb from "../../assets/bnb.png";

const Token = () => {
  return (
    <div className="flex items-center mb-[20px]">
      <img className="mr-[8px]" src={bnb} alt="bnb" />
      <div>
        <h1 className="font-bold text-lg leading-[22px] text-white">BNB</h1>
        <p className="font-medium text-sm leading-[17px] text-[rgba(255,255,255,0.5)]">
          Binance Chain Native Token
        </p>
      </div>
    </div>
  );
};

export default Token;
