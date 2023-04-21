import React from "react";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import wallet from "../assets/Wallet icon.svg";
import { useNavContext } from "../hooks/Context";

const Menu = () => {
  const { setOpenWalletModal, openMenu, setOpenMenu } = useNavContext();

  const handleModalOpen = () => {
    closeMenu();
    setOpenWalletModal(true);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div
      className={`${
        openMenu ? "left-0" : "left-[100%]"
      } menu fixed top-0 h-full w-full z-[501] duration-[1s]`}
    >
      <FaTimes
        onClick={closeMenu}
        className="absolute top-[30px] right-[50px] text-[red] text-[40px] cursor-pointer"
      />
      <div className="mt-[130px] vsm:mt-[100px] w-full flex space-x-[30px] vsm:space-x-[60px] pl-[20px] vsm:pl-[50px] ">
        <ul className="">
          <NavLink onClick={closeMenu} to="/">
            Home
          </NavLink>

          <NavLink onClick={closeMenu} to="/usecases">
            Use Cases
          </NavLink>
          <NavLink onClick={closeMenu} to="/features">
            Features
          </NavLink>
          <NavLink onClick={closeMenu} to="/roadmap">
            Roadmap
          </NavLink>
          <NavLink onClick={closeMenu} to="/team">
            Team
          </NavLink>
        </ul>
        <ul className="">
          <NavLink onClick={closeMenu} to="/ido">
            IDO
          </NavLink>
          <NavLink onClick={closeMenu} to="/dex">
            DEX
          </NavLink>
          <NavLink onClick={closeMenu} to="/market">
            NFT MARKET PLACE
          </NavLink>
          <NavLink onClick={closeMenu} to="/insights">
            INSIGHTS
          </NavLink>

          <button
            onClick={handleModalOpen}
            className="items-center border rounded-[42px] border-solid border-white px-5 py-2.5 cursor-pointer flex"
          >
            <img src={wallet} alt="wallet icon" />
            <p className="font-medium text-[1rem] vsm:text-xl leading-6 text-white ml-[10px] vsm:ml-[16px]">
              Connect Wallet
            </p>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
