import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();
  const [currentLoc, setCurrentLoc] = useState(1);

  const goToMembers = () => {
    navigate("");
    setCurrentLoc(1);
  };

  const goToQuestions = () => {
    navigate("questions");
    setCurrentLoc(2);
  };

  const goToFooter = () => {
    navigate("footer");
    setCurrentLoc(3);
  };

  return (
    <div>
      <div className="home relative h-[82vh] flex">
        <div className="h-full w-fit mr-[60px]">
          <div className="w-fit z-[100] mt-[150px]">
            <div
              onClick={goToMembers}
              className={`${
                currentLoc === 1 && "current-loc"
              } bg-white rounded-[47px] w-[3px] h-[20px] cursor-pointer`}
            ></div>
            <div
              onClick={goToQuestions}
              className={`${
                currentLoc === 2 && "current-loc"
              } mt-[6px] bg-white rounded-[47px] w-[3px] h-[20px] cursor-pointer`}
            ></div>
            <div
              onClick={goToFooter}
              className={`${
                currentLoc === 3 && "current-loc"
              } mt-[6px] bg-white rounded-[47px] w-[3px] h-[20px] cursor-pointer`}
            ></div>
          </div>
        </div>

        <div className="z-[20] h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Team;
