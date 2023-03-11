import React from "react";
import { FaTimes } from "react-icons/fa";
import metamask from "../assets/fox 1.png";

const ConnectWalletModal = ({ openWalletModal, setOpenWalletModal }) => {
  const handleClose = () => {
    setOpenWalletModal(false);
  };

  return (
    <div
      className={`${
        openWalletModal ? "" : "hidden"
      } fixed top-0 w-screen h-screen z-[150]`}
    >
      <div className="absolute top-[100px] right-[50px] w-[420px] h-[196px] rounded-[30px] bg-[#0b1425]">
        <div className="w-full flex justify-between p-[20px] border-b border-solid border-[rgba(255,255,255,0.15)]">
          <p className="font-semibold text-xl leading-6">Select a Token</p>
          <FaTimes onClick={handleClose} className="w-[30px] h-[30px]" />
        </div>
        <div className="p-[20px]">
          <div className="w-full p-[15px] flex items-center justify-between rounded-[15px] bg-[#00FFB2]/5 border-[1.5px] border-solid border-[rgba(0,255,178,0.43)]">
            <p>Install Metamask</p>
            <img src={metamask} alt="metamask" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal;
