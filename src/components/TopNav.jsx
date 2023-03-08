import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="z-[50] top-nav backdrop-blur-[50px] sticky top-0 left-0 h-[18vh] w-screen flex justify-between items-center px-[50px] py-[10px]">
      <img src={logo} alt="logo" />

      <ul>
        <NavLink to="/">IDO</NavLink>
        <NavLink to="/">DEX</NavLink>
        <NavLink to="/">NFT MARKET PLACE</NavLink>
        <NavLink to="/">INSIGHTS</NavLink>
      </ul>

      <button className="opacity-0">CONNECT WALLET</button>
    </div>
  );
};

export default TopNav;
