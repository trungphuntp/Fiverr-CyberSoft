"use client";
import { createContext, Suspense, useContext, useState } from "react";

const AccordionComponentContext = createContext();
// context Accordion
export const AccordionProvider = ({ children }) => {
    const [isActive, setisActive] = useState([]);

    const handleSetActive = (id) => {
        setisActive((prev) => {
            if (prev.includes(id)) {
                return prev.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    return (
        <AccordionComponentContext.Provider value={{ isActive, handleSetActive }}>
            {children}
        </AccordionComponentContext.Provider>
    );
};

export const useAccordionComponent = () => useContext(AccordionComponentContext);
