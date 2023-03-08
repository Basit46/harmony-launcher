import React from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="left-nav fixed top-[18vh] w-[20vw] left-0 h-[82vh] p-5">
      <ul className="flex flex-col items-center space-y-[55px]">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/usecases">Use Cases</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/roadmap">Roadmap</NavLink>
        <NavLink to="/team">Team</NavLink>
      </ul>
    </div>
  );
};

export default LeftNav;
