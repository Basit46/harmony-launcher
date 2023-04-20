import React, { useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

const Roadmap = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const loc = () => {
    if (location.pathname === "/roadmap") {
      return 1;
    }
    if (location.pathname === "/roadmap/backers") {
      return 2;
    }
    if (location.pathname === "/roadmap/advisors") {
      return 3;
    }
    return 1;
  };
  const [currentLoc, setCurrentLoc] = useState(loc());

  const goToPlans = () => {
    navigate("");
    setCurrentLoc(1);
  };

  const goToBackers = () => {
    navigate("backers");
    setCurrentLoc(2);
  };

  const goToAdvisors = () => {
    navigate("advisors");
    setCurrentLoc(3);
  };

  return (
    <div className="home relative h-fit flex">
      <div className="h-fit w-fit fixed top-[40%] mx-[30px] lg:mx-0">
        <div className="w-fit z-[100]">
          <div
            onClick={goToPlans}
            className={`bg-white rounded-[47px] w-[3px] h-[20px] cursor-pointer ${
              currentLoc === 1 && "current-loc"
            }`}
          ></div>
          <div
            onClick={goToBackers}
            className={`mt-[6px] bg-white rounded-[47px] w-[3px] h-[20px] cursor-pointer ${
              currentLoc === 2 && "current-loc"
            }`}
          ></div>
          <div
            onClick={goToAdvisors}
            className={`mt-[6px] bg-white rounded-[47px] w-[3px] h-[20px] cursor-pointer ${
              currentLoc === 3 && "current-loc"
            }`}
          ></div>
        </div>
      </div>

      <div className="z-[20] h-full ml-[60px] lg:ml-[50px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Roadmap;
