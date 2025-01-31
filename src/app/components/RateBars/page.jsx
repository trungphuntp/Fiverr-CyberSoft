import React from "react";

const RateBars = ({ className, children }) => {
    return <div className={`rateBars ${!!className ? className : ""}`}>{children}</div>;
};
const RateBarsItem = ({ starText, quantityReviews, className, widthBar }) => {
    if (widthBar < 0) {
        widthBar = 0;
    }
    return (
        <div className={`rateBars__item ${!!className ? className : ""}`}>
            <span className="rateBars__item-starText ">{`${starText || 0} Stars`}</span>
            <div className={`rateBars__item-bar `}>
                <div
                    className="line"
                    style={{ width: `${widthBar ? `${widthBar}%` : "0%"}` }}
                ></div>
            </div>
            <span className="rateBars__item-quantity">{`(${quantityReviews || 0})`}</span>
        </div>
    );
};

RateBars.item = RateBarsItem;
export default RateBars;
