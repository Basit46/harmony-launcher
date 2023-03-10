import React, { useState } from "react";
import ethLogo from "../assets/eth.png";
import tetherLogo from "../assets/tether.png";
import ethChart from "../assets/ethChart.svg";
import swap from "../assets/swapIcon.png";
import { AiFillCaretDown } from "react-icons/ai";
import ExchangeModal from "../components/dex/ExchangeModal";

const Dex = () => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  return (
    <div className="dex">
      <ExchangeModal show={show} setShow={setShow} />

      <div>
        <div className="w-[1025px] h-[596px] rounded-[20px] bg-[#111e37] px-[52px] py-[28px] flex flex-col justify-between">
          <div className="">
            <div className="w-full flex space-x-[8px] items-center">
              <div className="flex h-fit">
                <img className="mr-[-5px]" src={ethLogo} alt="eth" />
                <img src={tetherLogo} alt="tether" />
              </div>
              <h1 className="font-semibold text-[26px] text-white">
                ETH{" "}
                <span className="text-[#99ADD2] font-[400] text-[19px]">
                  /USDT
                </span>
              </h1>
            </div>

            <div className="flex w-full items-center justify-between mt-[15px]">
              <h1 className="font-medium text-[32px] leading-[39px] text-white">
                1654.29 USDT
              </h1>

              <ul className="flex space-x-[10px]">
                <li>1H</li>
                <li>4H</li>
                <li>1D</li>
                <li className="active">1W</li>
                <li>1M</li>
                <li>6M</li>
              </ul>
            </div>

            <div className="w-full flex items-center space-x-[15px] mt-[15px]">
              <p className="font-medium text-[15px] leading-[18px] text-[#00FFB2]">
                14.6300 (0.89%)
              </p>
              <p className="font-medium text-[15px] leading-[18px] text-[#5E687B]">
                Past 24 hours
              </p>
            </div>
          </div>

          <div className="relative">
            <img src={ethChart} alt="chart of ethereum" />
            <div className="chart-label absolute bottom-[20px] left-0 w-full bg-red flex justify-evenly">
              <p>Feb 23</p>
              <p>Feb 24</p>
              <p>Feb 25</p>
              <p>Feb 26</p>
              <p>Feb 28</p>
              <p>Mar 1</p>
            </div>
          </div>
        </div>

        <div className="w-[431px] h-[596px] rounded-[20px] bg-[#111e37] my-[40px] px-[25px] py-[29px]">
          <h1 className="font-semibold text-[22px] leading-[27px] text-white">
            Swap
          </h1>
          <p className="mt-[11px] text-[15px] leading-[18px] text-[rgba(255,255,255,0.51)] mb-[25px]">
            Buy or sell any token instantly at the best price
          </p>

          <div className="flex flex-col items-center">
            <div className="w-full h-[99px] rounded-[10px] bg-[#00000054] flex items-end p-[10px]">
              <div className="flex w-full">
                <input
                  className="p-[3px] w-[70%] bg-transparent outline-none"
                  type="number"
                  placeholder="0.0"
                />
                <div className="flex items-center bg-[#FFFFFF14] px-2.5 py-[5px] rounded-[100px]">
                  <img src={ethLogo} alt="eth" />
                  <p className="ml-[10px] mr-[8px] font-semibold text-lg leading-[22px] text-[rgba(255,255,255,0.36)]">
                    ETH
                  </p>
                  <AiFillCaretDown onClick={showModal} />
                </div>
              </div>
            </div>

            <img className="my-[15px]" src={swap} alt="swap" />

            <div className="w-full h-[99px] rounded-[10px] bg-[#00000054] flex items-end p-[10px]">
              <div className="flex w-full">
                <input
                  className="p-[3px] w-[70%] bg-transparent outline-none"
                  type="number"
                  placeholder="0.0"
                />
                <div className="flex items-center bg-[#FFFFFF14] px-2.5 py-[5px] rounded-[100px]">
                  <img src={tetherLogo} alt="eth" />
                  <p className="ml-[10px] mr-[8px] font-semibold text-lg leading-[22px] text-[rgba(255,255,255,0.36)]">
                    USDT
                  </p>
                  <AiFillCaretDown onClick={showModal} />
                </div>
              </div>
            </div>
          </div>

          <p className="font-semibold text-[15px] leading-[18px] text-[rgba(255,255,255,0.5)] mt-[16px] mb-[35px]">
            Max Slippage: 0.5%
          </p>

          <div className="flex">
            <button className="z-[2] w-full h-[35px] rounded-[50px]  bg-[#103C48] font-semibold text-[15px] leading-[18px] text-[#00FFB2]">
              Maximum Return
            </button>
            <button className="ml-[-25px] w-full h-[35px] rounded-[50px] bg-[#0B1425]">
              Lowest Gas
            </button>
          </div>

          <button className="connect-btn mt-[34px] w-full px-5 py-[15px] rounded-[30px] font-semibold text-xl leading-6 text-white">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dex;
