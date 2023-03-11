import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import wallet from "../assets/Wallet icon.svg";
import { NavLink, useLocation } from "react-router-dom";

const TopNav = ({ setOpenWalletModal }) => {
  const location = useLocation();

  const [showConnectBtn, setShowConnectBtn] = useState(false);

  const handleOpen = () => {
    setOpenWalletModal(true);
  };

  useEffect(() => {
    if (
      location.pathname.includes("ido") ||
      location.pathname.includes("dex") ||
      location.pathname.includes("market") ||
      location.pathname.includes("insights")
    ) {
      setShowConnectBtn(true);
    } else {
      setShowConnectBtn(false);
    }

    document.title = `Harmony Launcher | ${
      location.pathname !== "/"
        ? location.pathname.slice(1).toUpperCase()
        : "HOME"
    }`;
  }, [location]);
  return (
    <div className="z-[500] top-nav backdrop-blur-[50px] sticky top-0 left-0 h-[18vh] w-screen flex justify-between items-center px-[50px] py-[10px]">
      <img src={logo} alt="logo" />

      <ul>
        <NavLink to="/ido">IDO</NavLink>
        <NavLink to="/dex">DEX</NavLink>
        <NavLink to="/market">NFT MARKET PLACE</NavLink>
        <NavLink to="/insights">INSIGHTS</NavLink>
      </ul>

      <button
        onClick={handleOpen}
        className={`${
          !showConnectBtn && "opacity-0"
        } flex items-center border rounded-[42px] border-solid border-white px-5 py-2.5 cursor-pointer `}
      >
        <img src={wallet} alt="wallet icon" />
        <p className="font-medium text-xl leading-6 text-white ml-[16px]">
          Connect Wallet
        </p>
      </button>
    </div>
  );
};

export default TopNav;
