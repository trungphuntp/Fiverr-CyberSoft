import React from "react";

const Button = ({ children, sizeBtn = "normal", variant = "primary", className = "", ...rest }) => {
    let classVarant = "";
    let classSize = "";

    switch (sizeBtn) {
        case "small":
            classSize = "smallBtn";
            break;
    }

    switch (variant) {
        case "primary":
            classVarant = "btn";
            break;

        case "outline":
            classVarant = "btn outlineBtn";
            break;
        case "text":
            classVarant = "btn textBtn";
            break;
    }

    return (
        <button className={`${classVarant} ${classSize} ${className}`} {...rest}>
            {children}
        </button>
    );
};

export default Button;
