"use client";
import React, { createContext, useContext, useRef, useState } from "react";

const NavContext = createContext({});

export const NavContextProvider = ({ children }) => {
  const refHeader = useRef(null);
  const refFooter = useRef(null);
  const [isActiveNav, setisActiveNav] = useState(false);
  const handleSetActiveNav = (state = false) => {
    setisActiveNav(state);
  };

  return (
    <NavContext.Provider
      value={{ isActiveNav, handleSetActiveNav, refHeader, refFooter }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => useContext(NavContext);
