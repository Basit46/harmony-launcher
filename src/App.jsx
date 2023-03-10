import React from "react";
import LeftNav from "./components/LeftNav";
import TopNav from "./components/TopNav";
import circle from "./assets/circle.png";
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
import TeamMembers from "./components/team/TeamMembers";
import Questions from "./components/team/Questions";
import Footer from "./components/team/Footer";
import Infos from "./components/team/Infos";
import Ido from "./pages/Ido";
import Dex from "./pages/Dex";
import Market from "./pages/Market";
import Insights from "./pages/Insights";
import Main from "./components/ido/Main";
import Projects from "./components/ido/Projects";
import ArticleDetails from "./components/insights/ArticleDetails";

const App = () => {
  return (
    <div className="relative main h-fit w-full text-white font-Qanelas ">
      <img
        className="fixed top-[0px] right-0 w-[351px] h-[351px]  z-[150]"
        src={circle}
        alt="vector"
      />
      <TopNav />
      <LeftNav />

      <div className="ml-[21vw] h-fit">
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
          <Route path="/team" element={<Team />}>
            <Route path="" element={<TeamMembers />} />
            <Route path="questions" element={<Questions />} />
            <Route path="footer" element={<Footer />} />
            <Route path="footer/infos" element={<Infos />} />
          </Route>

          <Route path="/ido" element={<Ido />}>
            <Route path="" element={<Main />} />
            <Route path="projects" element={<Projects />} />
          </Route>
          <Route path="/dex" element={<Dex />} />
          <Route path="/market" element={<Market />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:articleId" element={<ArticleDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
