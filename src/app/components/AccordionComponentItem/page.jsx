"use client";
import { useAccordionComponent } from "@/app/contexts/AccordionContext/page";
import React, { forwardRef } from "react";

const AccordionComponentItem = ({ title, children, id }, refItem) => {
    const { isActive, handleSetActive } = useAccordionComponent();
    const _toggleActive = (idActive) => {
        handleSetActive(idActive);
    };

    return (
        <div
            className={`AccordionComponent__item ${isActive.includes(id) ? "active" : ""}`}
            id={id || "abc"}
            onClick={(e) => {
                _toggleActive(id);
            }}
        >
            <div className="AccordionComponent__item-title">
                <p>{title || "title"}</p>
                <svg
                    className="chevron w-[16px] h-[16px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
            </div>
            <div
                className="AccordionComponent__item-desc"
                ref={(el) => {
                    refItem.current[id] = el;
                }}
            >
                {children}
            </div>
        </div>
    );
};
export default forwardRef(AccordionComponentItem);
