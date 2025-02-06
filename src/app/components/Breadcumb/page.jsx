import React from "react";

const BreadcumbComponent = ({ children }) => {
    return (
        <div className="container">
            <div className="BreadcumbComponent">{children}</div>
        </div>
    );
};

const BreadcumbComponentItem = ({ isActive, children }) => {
    return (
        <div className={`BreadcumbComponent__item ${!!isActive ? "active" : ""}`}>
            {children}
            <svg
                className="BreadcumbComponent__item-chev h-[16px] w-[16px]"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
            >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
        </div>
    );
};
BreadcumbComponent.item = BreadcumbComponentItem;

export default BreadcumbComponent;
