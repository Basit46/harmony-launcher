import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Roadmap = () => {
  const navigate = useNavigate();
  const [currentLoc, setCurrentLoc] = useState(1);

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
    <div className="home relative h-[82vh] flex">
      <div className="h-full w-fit mr-[60px]">
        <div className="w-fit z-[100] mt-[150px]">
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

      <div className="z-[20] h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Roadmap;
