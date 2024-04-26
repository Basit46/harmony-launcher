import React from "react";
import { FaSearch } from "react-icons/fa";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="projects w-[95%]">
      <div className="input-wrap w-full h-[56px] flex items-center rounded-[10px] px-[10px]">
        <input
          className="w-full h-full bg-transparent p-[10px] rounded-[10px] outline-none"
          placeholder="Search by project name, token contract address or token symbol"
          type="text"
        />
        <FaSearch />
      </div>

      <ul className="flex flex-wrap vsm:flex-nowrap items-center gap-[10px] vsm:gap-0 vsm:space-x-[40px] mt-[35px]">
        <li className="active">All</li>
        <li>Ethereum</li>
        <li>BNB Chain</li>
        <li>Polygon</li>
        <li>Celo</li>
        <li>Avalanche</li>
      </ul>

      <div className="mt-[35px] h-fit overflow-x-auto w-[85vw]">
        <div className="w-fit bg-[green] ">
          <table className="table-auto h-fit ">
            <thead>
              <tr>
                <th className="">Project name</th>
                <th className="">Type</th>
                <th>Participants</th>
                <th>Total name</th>
                <th>Current price</th>
                <th>All price IDO</th>
                <th className="">Ended in</th>
                <th className="">Chains</th>
              </tr>
            </thead>
            <tbody>
              <Project />
              <Project />
              <Project />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Projects;
