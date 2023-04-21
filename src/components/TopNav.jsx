import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import wallet from "../assets/Wallet icon.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useNavContext } from "../hooks/Context";

const TopNav = ({ setOpenWalletModal }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { setOpenMenu } = useNavContext();
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

  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="top-nav z-[500] sticky top-0 left-0 h-[18vh] w-screen flex justify-between items-center px-[20px] vsm:px-[50px] py-[10px]">
      <img src={logo} alt="logo" className="ml-[-30px]" onClick={goToHome} />

      <ul className="hidden lg:block">
        <NavLink to="/ido">IDO</NavLink>
        <NavLink to="/dex">DEX</NavLink>
        <NavLink to="/market">NFT MARKET PLACE</NavLink>
        <NavLink to="/insights">INSIGHTS</NavLink>
      </ul>

      <button
        onClick={handleOpen}
        className={`${
          !showConnectBtn && "opacity-0"
        } hidden lg:flex items-center border rounded-[42px] border-solid border-white px-5 py-2.5 cursor-pointer `}
      >
        <img src={wallet} alt="wallet icon" />
        <p className="font-medium text-xl leading-6 text-white ml-[16px]">
          Connect Wallet
        </p>
      </button>

      <FaBars
        onClick={() => setOpenMenu(true)}
        className="block lg:hidden text-[30px] cursor-pointer"
      />
    </div>
  );
};

export default TopNav;
