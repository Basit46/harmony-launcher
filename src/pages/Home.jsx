import React, { useState } from "react";
import Clouds from "../assets/cloudBtm.svg";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [onHeroSection, setOnHeroSection] = useState(
    location.pathname === "/about" ? false : true
  );

  const goToHero = async () => {
    await setOnHeroSection(true);
    navigate("/");
  };

  const goToAbout = async () => {
    await setOnHeroSection(false);
    navigate("/about");
  };

  return (
    <motion.div className="home relative h-[82vh] flex">
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
        <Outlet />
      </div>

      <img
        className="z-[2] absolute right-0 bottom-0"
        src={Clouds}
        draggable={false}
        alt="clouds"
      />
    </motion.div>
  );
};

export default Home;
