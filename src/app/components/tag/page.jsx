import Link from "next/link";
import React from "react";

const Tag = ({ link, variant = "normal", children }) => {
    switch (variant) {
        case "normal":
            if (link) {
                return (
                    <Link
                        href={link}
                        className="bg-[#EFEFF0] whitespace-nowrap transition-all duration-[300]  cursor-pointer tag rounded-full text-[var(--text-color-body-2)] font-[m600] h-[32px] px-[12px] border border-[var(--white-color)] border-solid text-[14px] flex justify-center items-center hover:opacity-80"
                    >
                        {children}
                    </Link>
                );
            }
            return (
                <div className="bg-[#EFEFF0] whitespace-nowrap transition-all duration-[300]  cursor-pointer tag rounded-full text-[var(--text-color-body-2)] font-[m600] h-[32px] px-[12px] border border-[var(--white-color)] border-solid text-[14px] flex justify-center items-center hover:opacity-80">
                    {children}
                </div>
            );
        case "outline":
            if (link) {
                return (
                    <Link
                        href={link}
                        className="whitespace-nowrap transition-all duration-[300] hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] cursor-pointer tag rounded-full text-[var(--white-color)] font-[m600] h-[27px] px-[12px] border border-[var(--white-color)] border-solid text-[14px] flex justify-center items-center"
                    >
                        {children}
                    </Link>
                );
            }
            return (
                <div className="whitespace-nowrap transition-all duration-[300] hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] cursor-pointer tag rounded-full text-[var(--white-color)] font-[m600] h-[27px] px-[12px] border border-[var(--white-color)] border-solid text-[14px] flex justify-center items-center">
                    {children}
                </div>
            );
    }
};

export default Tag;
