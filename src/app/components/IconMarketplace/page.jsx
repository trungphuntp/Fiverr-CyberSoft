import React from "react";

const IconMarketplace = ({ icon = "/marketplace_1.svg", children }) => {
    return (
        <div className="IconMarketplace gap-4 text-[#222325]">
            <img className="IconMarketplace__icon h-[48px] w-[48px]" src={icon} alt="icon" />
            <p className="IconMarketplace__content  ">{children}</p>
        </div>
    );
};

export default IconMarketplace;
