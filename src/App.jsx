import React from "react";
import LeftNav from "./components/LeftNav";
import TopNav from "./components/TopNav";
// import circle from "./assets/circle.png";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UseCases from "./pages/UseCases";
import Features from "./pages/Features";
import Roadmap from "./pages/Roadmap";
import Team from "./pages/Team";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import SectionOne from "./components/features/SectionOne";
import SectionTwo from "./components/features/SectionTwo";
import SectionThree from "./components/features/SectionThree";
import SectionFour from "./components/features/SectionFour";
import Plans from "./components/roadmap/Plans";
import Backers from "./components/roadmap/Backers";
import Advisors from "./components/roadmap/Advisors";

const App = () => {
  return (
    <div className="relative main bg-black h-screen w-screen text-white overflow-x-hidden overflow-y-auto">
      {/* <img
        className="sticky top-[0px] left-[100%] right-0 w-[351px] h-[351px]  z-[50]"
        src={circle}
        alt="vector"
      /> */}
      <TopNav />
      <LeftNav />

      <div className="ml-[21vw] h-fit font-Qanelas">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<Hero />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/usecases" element={<UseCases />} />
          <Route path="/features" element={<Features />}>
            <Route path="" element={<SectionOne />} />
            <Route path="2" element={<SectionTwo />} />
            <Route path="3" element={<SectionThree />} />
            <Route path="4" element={<SectionFour />} />
          </Route>
          <Route path="/roadmap" element={<Roadmap />}>
            <Route path="" element={<Plans />} />
            <Route path="backers" element={<Backers />} />
            <Route path="advisors" element={<Advisors />} />
          </Route>
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
