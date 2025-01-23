"use client";
import React, { createContext, useContext, useState } from "react";

const NavContext = createContext({});

export const NavContextProvider = ({ children }) => {
    const [isActiveNav, setisActiveNav] = useState(false);
    const [isDropDown, setIsDropDown] = useState([]);

    const handleSetActiveNav = (state = false) => {
        setisActiveNav(state);
    };

    const handleSetIsDropDown = (id) => {
        setIsDropDown((prev) => {
            if (prev.includes(id)) {
                return prev.filter((itemId) => itemId !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    return (
        <NavContext.Provider
            value={{ isActiveNav, handleSetActiveNav, isDropDown, handleSetIsDropDown }}
        >
            {children}
        </NavContext.Provider>
    );
};

export const useNavContext = () => useContext(NavContext);
