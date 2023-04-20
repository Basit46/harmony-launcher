import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Features = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const loc = () => {
    if (location.pathname === "/features") {
      return 1;
    }
    if (location.pathname === "/features/2") {
      return 2;
    }
    if (location.pathname === "/features/3") {
      return 3;
    }
    if (location.pathname === "/features/4") {
      return 4;
    }
    return 1;
  };
  const [currentLoc, setCurrentLoc] = useState(loc());
  const goToOne = () => {
    navigate("");
    setCurrentLoc(1);
  };

  const goToTwo = () => {
    navigate("2");
    setCurrentLoc(2);
  };

  const goToThree = () => {
    navigate("3");
    setCurrentLoc(3);
  };

  const goToFour = () => {
    navigate("4");
    setCurrentLoc(4);
  };

  return (
    <motion.div className="home relative h-full flex overflow-x-hidden ">
      <div className="h-fit w-fit fixed top-[40%] mx-[30px] lg:mx-0">
        <div className="w-fit z-[100]">
          <div
            onClick={goToOne}
            className={`bg-white rounded-[47px] w-[3px] h-[20px] cursor-pointer ${
              currentLoc === 1 && "current-loc"
            }`}
          ></div>
          <div
            onClick={goToTwo}
            className={`mt-[6px] bg-white rounded-[47px] w-[3px] h-[20px] cursor-pointer ${
              currentLoc === 2 && "current-loc"
            }`}
          ></div>
          <div
            onClick={goToThree}
            className={`mt-[6px] bg-white rounded-[47px] w-[3px] h-[20px] cursor-pointer ${
              currentLoc === 3 && "current-loc"
            }`}
          ></div>
          <div
            onClick={goToFour}
            className={`mt-[6px] bg-white rounded-[47px] w-[3px] h-[20px] cursor-pointer ${
              currentLoc === 4 && "current-loc"
            }`}
          ></div>
        </div>
      </div>

      <motion.div
        id="features-outlet"
        className="z-[20] h-fit lg:h-[82vh] overflow-hidden ml-[60px] lg:ml-[50px]"
      >
        <Outlet />
      </motion.div>
    </motion.div>
  );
};

export default Features;
