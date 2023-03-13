import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const Ido = () => {
  const navigate = useNavigate();
  const [currentLoc, setCurrentLoc] = useState(1);

  const goToMain = () => {
    navigate("");
    setCurrentLoc(1);
  };

  const goToProjects = () => {
    navigate("projects");
    setCurrentLoc(2);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        y: "0",
        opacity: 1,
        transition: { duration: 0.5, delay: 0.4 },
      }}
      exit={{ opacity: 0 }}
      className="home relative h-[82vh] w-full flex"
    >
      <div className="h-full w-fit mr-[60px]">
        <div className="w-fit z-[100] mt-[150px]">
          <div
            onClick={goToMain}
            className={`${
              currentLoc === 1 && "current-loc"
            } bg-white rounded-[47px] w-[3px] h-[20px] cursor-pointer`}
          ></div>
          <div
            onClick={goToProjects}
            className={`${
              currentLoc === 2 && "current-loc"
            } mt-[6px] bg-white rounded-[47px] w-[3px] h-[20px] cursor-pointer`}
          ></div>
        </div>
      </div>

      <div className="z-[20] h-full w-full">
        <Outlet />
      </div>
    </motion.div>
  );
};

export default Ido;
