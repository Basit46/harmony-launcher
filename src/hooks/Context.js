import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const navContext = createContext();

const Context = ({ children }) => {
  const [homeNav, setHomeNav] = useState(1);
  const [clone, setClone] = useState(1);
  const [show, setShow] = useState(false);
  const [openWalletModal, setOpenWalletModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      setClone(homeNav);
      setHomeNav(2);
    } else {
      setClone(homeNav);
      setHomeNav(1);
    }
    console.log(homeNav, clone);
  }, [location, clone, homeNav]);

  return (
    <navContext.Provider
      value={{
        homeNav,
        setHomeNav,
        clone,
        setClone,
        show,
        setShow,
        openWalletModal,
        setOpenWalletModal,
        openMenu,
        setOpenMenu,
      }}
    >
      {children}
    </navContext.Provider>
  );
};

export default Context;

export const useNavContext = () => {
  return useContext(navContext);
};
