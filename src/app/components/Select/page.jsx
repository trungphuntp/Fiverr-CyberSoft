"use client";
import React, { useState } from "react";

const SelectComponent = ({ dropDownList, type = "normal", children }) => {
    const [activeDropDown, setActiveDropDown] = useState(false);

    const handleToggleDownDown = () => {
        setActiveDropDown((prev) => !prev);
    };

    switch (type) {
        case "normal":
            return (
                <button
                    className="selectComponent"
                    onClick={(e) => {
                        handleToggleDownDown();
                    }}
                >
                    <div className="selectComponent__content">
                        {children}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-[12px] w-[12px] text-[#97989E]"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                        >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                    </div>
                    <div className={`selectComponent__dropdown ${activeDropDown ? "active" : ""}`}>
                        {dropDownList?.length > 0 &&
                            dropDownList?.map((item, index) => {
                                return (
                                    <a
                                        className="selectComponent__dropdown-item"
                                        href="#"
                                        key={index}
                                    >
                                        {item}
                                    </a>
                                );
                            })}
                    </div>
                </button>
            );
        case "noneBorder":
            return (
                <button
                    className="selectComponent noneBorder"
                    onClick={(e) => {
                        handleToggleDownDown();
                    }}
                >
                    <div className="selectComponent__content">
                        {children}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-[12px] w-[12px] text-[#97989E]"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                        >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                    </div>
                    <div className={`selectComponent__dropdown ${activeDropDown ? "active" : ""}`}>
                        {dropDownList?.length > 0 &&
                            dropDownList?.map((item, index) => {
                                return (
                                    <a
                                        className="selectComponent__dropdown-item"
                                        href="#"
                                        key={index}
                                    >
                                        {item}
                                    </a>
                                );
                            })}
                    </div>
                </button>
            );
    }
};

export default SelectComponent;
