import Link from "next/link";
import React from "react";

const Button = ({
    children,
    sizeBtn = "normal",
    variant = "primary",
    linkIn,
    linkOut,
    className = "",
    ...rest
}) => {
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

        case "outlineWhite":
            classVarant = "btn outlineWhiteBtn";
            break;
        case "outlineGrey":
            classVarant = "btn outlineGrey";
            break;

        case "text":
            classVarant = "btn textBtn";
            break;
    }
    if (linkIn) {
        return (
            <Link href={linkIn} className={`${classVarant} ${classSize} ${className}`} {...rest}>
                {children}
            </Link>
        );
    }
    if (linkOut) {
        return (
            <a
                href={linkOut}
                target="_blank"
                className={`${classVarant} ${classSize} ${className}`}
                {...rest}
            >
                {children}
            </a>
        );
    }

    return (
        <button className={`${classVarant} ${classSize} ${className}`} {...rest}>
            {children}
        </button>
    );
};

export default Button;
