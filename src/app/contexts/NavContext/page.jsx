"use client";
import React, { createContext, useContext, useState } from "react";

const NavContext = createContext({});

export const NavContextProvider = ({ children }) => {
    const [isActiveNav, setisActiveNav] = useState(false);

    const handleSetActiveNav = (state = false) => {
        setisActiveNav(state);
    };

    return (
        <NavContext.Provider value={{ isActiveNav, handleSetActiveNav }}>
            {children}
        </NavContext.Provider>
    );
};

export const useNavContext = () => useContext(NavContext);
