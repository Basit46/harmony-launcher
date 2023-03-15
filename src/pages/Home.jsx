import React, { useState } from "react";
import Clouds from "../assets/cloudBtm.svg";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(navigate.location);

  const [onHeroSection, setOnHeroSection] = useState(
    location.pathname === "/about" ? false : true
  );
  const [prevPath, setPrevPath] = useState();
  const [nuPath, setPath] = useState();

  const goToHero = async () => {
    setPath(prevPath);
    setPrevPath("/about");
    await setOnHeroSection(true);
    navigate("/");
  };

  const goToAbout = async () => {
    setPath(prevPath);
    setPrevPath("/about");
    await setOnHeroSection(false);
    navigate("/about");
  };

  return (
    <div className="home relative h-[82vh] flex">
      <div className="h-full w-fit mr-[60px]">
        <div className="w-fit z-[100] mt-[150px]">
          <div
            onClick={goToHero}
            className={`${
              onHeroSection && "current-loc"
            } bg-white rounded-[47px] w-[3px] h-[20px] cursor-pointer`}
          ></div>
          <div
            onClick={goToAbout}
            className={`${
              !onHeroSection && "current-loc"
            } mt-[6px] bg-white rounded-[47px] w-[3px] h-[20px] cursor-pointer`}
          ></div>
        </div>
      </div>

      <div className="z-[20] h-[82vh]">
        <Outlet context={[prevPath, nuPath]} />
      </div>

      <img
        className="z-[2] absolute right-0 bottom-0"
        src={Clouds}
        draggable={false}
        alt="clouds"
      />
    </div>
  );
};

export default Home;
