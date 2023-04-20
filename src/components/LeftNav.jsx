import React from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="left-nav hidden lg:block fixed top-[18vh] w-[20vw] left-0 h-[82vh] p-5">
      <div className="flex flex-col items-center">
        <ul className="w-fit h-full flex flex-col space-y-[40px]">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/usecases">Use Cases</NavLink>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/roadmap">Roadmap</NavLink>
          <NavLink to="/team">Team</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default LeftNav;
