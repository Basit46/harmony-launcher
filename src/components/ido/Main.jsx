import React from "react";
import img from "../../assets/idoImg.png";
import crypto from "../../assets/crypto.png";
import sticker from "../../assets/sticker.png";

const Main = () => {
  return (
    <div className="ido-main w-full flex flex-col lg:flex-row lg:justify-between">
      <div>
        <h1 className="text-3xl leading-9 text-white font-Russo mb-[20px]">
          Live
        </h1>
        <div className="relative w-fit h-fit">
          <img className="w-[415px] h-[396px]" src={img} alt="main" />
          <img
            src={sticker}
            className="absolute left-[25px] bottom-[25px]"
            alt="sticker"
          />

          <div className="blur-box py-[35px] px-[35px]">
            <h1 className="font-bold text-[28px] leading-[35px] text-white">
              Citizen Conflict
            </h1>

            <div className="flex justify-between items-center mt-[21px] mb-[12px]">
              <div>
                <p className="text-lg leading-[21px] text-[#00FFB2]">$CCASH</p>
                <p className="font-medium text-lg leading-[22px] text-[rgba(255,255,255,0.6)]">
                  REAL YOU IS NOT ENOUGH
                </p>
              </div>
              <img src={crypto} alt="crypto" />
            </div>

            <div className="flex justify-between mt-[21px] mb-[12px]">
              <p className="text-lg leading-[21px] text-[#00FFB2]">
                Fundraise Goal
              </p>
              <p className="font-medium text-lg leading-[22px] text-right text-white">
                $650,000
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-lg leading-[21px] text-[#00FFB2]">
                Max allocation
              </p>
              <p className="font-medium text-lg leading-[22px] text-right text-white">
                $500
              </p>
            </div>

            <div className="w-full grid place-items-center">
              <button className="mt-[22px]">Token Sale</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mr-0 lg:mr-[30px] mt-[30px] lg:mt-0">
        <h1 className="text-3xl leading-9 text-white font-Russo mb-[20px]">
          Upcoming
        </h1>

        <div className="blur-box2 w-[373px] h-fit">
          <div className="relative w-full h-fit">
            <img
              className="w-full object-top object-cover h-[216px]"
              src={img}
              alt="main"
            />
            <img
              src={sticker}
              className="absolute top-[20px] left-[20px] w-[73px] h-[51px]"
              alt="sticker"
            />
            <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              Token Sale
            </button>
          </div>

          <div className="p-[20px]">
            <h1 className="font-bold text-[28px] leading-[35px] text-white">
              Citizen Conflict
            </h1>

            <div className="flex justify-between items-center mt-[21px] mb-[12px]">
              <div>
                <p className="text-lg leading-[21px] text-[#00FFB2]">$CCASH</p>
                <p className="font-medium text-lg leading-[22px] text-[rgba(255,255,255,0.6)]">
                  REAL YOU IS NOT ENOUGH
                </p>
              </div>
              <img src={crypto} alt="crypto" />
            </div>

            <div className="flex justify-between mt-[21px] mb-[12px]">
              <p className="text-lg leading-[21px] text-[#00FFB2]">
                Fundraise Goal
              </p>
              <p className="font-medium text-lg leading-[22px] text-right text-white">
                $650,000
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-lg leading-[21px] text-[#00FFB2]">
                Max allocation
              </p>
              <p className="font-medium text-lg leading-[22px] text-right text-white">
                $500
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
