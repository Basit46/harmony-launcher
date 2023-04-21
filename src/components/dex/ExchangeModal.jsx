import React from "react";
import { FaTimes } from "react-icons/fa";
import bnb from "../../assets/bnb.png";
import tether from "../../assets/tether.png";
import cake from "../../assets/cake.png";
import btc from "../../assets/btc.png";
import Token from "./Token";

const ExchangeModal = ({ show, setShow }) => {
  const closeModal = () => {
    setShow(false);
  };

  return (
    <div
      className={`${
        !show && "hidden"
      } modal z-[50] fixed left-0 top-0 bg-black vsm:bg-black/40 h-full w-full grid place-items-center`}
    >
      <div className="w-[90vw] vsm:w-[420px] h-[80vh] 2xl:h-fit rounded-[30px] bg-[#0b1425]">
        <div className="flex items-center justify-between px-[25px] py-[20px] border-b border-solid border-[rgba(255,255,255,0.15)]">
          <p className="font-semibold text-xl leading-6 text-white">
            Select a token
          </p>
          <FaTimes onClick={closeModal} className="w-[30px] h-[30px]" />
        </div>

        <div className="p-[25px] border-b border-solid border-[rgba(255,255,255,0.15)]">
          <input
            className="w-full h-[52px] rounded-[15px] border-[1.5px] border-solid border-[#00FFB2] bg-[#00FFB2]/10 p-[10px]"
            type="text"
            placeholder="Search name or paste address"
          />
          <p className="font-medium text-[15px] leading-[18px] text-[rgba(255,255,255,0.57)] my-[21px]">
            Common tokens
          </p>
          <div className="tokens flex justify-evenly items-center">
            <div className="active">
              <img src={bnb} alt="bnb" />
              <p>BNB</p>
            </div>
            <div>
              <img src={tether} alt="tether" />
              <p>USDT</p>
            </div>
            <div>
              <img src={cake} alt="cake" />
              <p>CAKE</p>
            </div>
            <div>
              <img src={btc} alt="btc" />
              <p>BTCB</p>
            </div>
          </div>
        </div>

        <div className="tokens-wrap p-[25px] h-[240px] overflow-x-hidden overflow-y-scroll">
          <div className="w-fit tokens-wrap">
            <Token />
            <Token />
            <Token />
            <Token />
            <Token />
            <Token />
            <Token />
            <Token />
            <Token />
            <Token />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeModal;
