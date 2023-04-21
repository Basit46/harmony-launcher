import React from "react";
import LeftNav from "./components/LeftNav";
import TopNav from "./components/TopNav";
import circle from "./assets/circle.png";
import { Routes, Route, useLocation } from "react-router-dom";
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
import PrivacyPolicy from "./pages/privacyPolicy";
import Ido from "./pages/Ido";
import Dex from "./pages/Dex";
import Market from "./pages/Market";
import Insights from "./pages/Insights";
import Main from "./components/ido/Main";
import Projects from "./components/ido/Projects";
import ArticleDetails from "./components/insights/ArticleDetails";
import ConnectWalletModal from "./components/ConnectWalletModal";
import { AnimatePresence } from "framer-motion";
import Menu from "./pages/Menu";
import { useNavContext } from "./hooks/Context";

const App = () => {
  const { openWalletModal, setOpenWalletModal } = useNavContext();
  const location = useLocation();

  return (
    <>
      <div className="main relative h-fit w-full text-white font-Qanelas ">
        <img
          className="fixed top-[0px] right-0 w-[170px] h-[170px] z-[150]"
          src={circle}
          alt="vector"
        />
        <div className="cover fixed top-0 left-0 w-full h-full z-[-1]"></div>
        <TopNav setOpenWalletModal={setOpenWalletModal} />
        <LeftNav />
        <ConnectWalletModal
          openWalletModal={openWalletModal}
          setOpenWalletModal={setOpenWalletModal}
        />
        <Menu />

        <div className="ml-0 lg:ml-[20vw] min-h-[82vh]">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
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
              </Route>
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/ido" element={<Ido />}>
                <Route path="" element={<Main />} />
                <Route path="projects" element={<Projects />} />
              </Route>
              <Route path="/dex" element={<Dex />} />
              <Route path="/market" element={<Market />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:articleId" element={<ArticleDetails />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default App;
