import React, { useState } from "react";
import Clouds from "../assets/cloudBtm.svg";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useNavContext } from "../hooks/Context";

const Home = () => {
  const { setHomeNav } = useNavContext();

  const navigate = useNavigate();
  const location = useLocation();

  const [onHeroSection, setOnHeroSection] = useState(
    location.pathname === "/about" ? false : true
  );

  const goToHero = async () => {
    setHomeNav(1);
    await setOnHeroSection(true);
    navigate("/");
  };

  const goToAbout = async () => {
    setHomeNav(2);
    await setOnHeroSection(false);
    navigate("/about");
  };

  return (
    <div className="home relative h-fit lg:h-[82vh] flex">
      <div className="h-full w-fit lg:mr-[60px] mx-[20px] lg:mx-0 ">
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

      <div className="z-[20] h-fit lg:h-[82vh]">
        <Outlet />
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
