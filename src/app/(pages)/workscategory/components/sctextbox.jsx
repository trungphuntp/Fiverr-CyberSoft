import Button from "@/app/components/Button/page";
import ComponentLoading from "@/app/components/Loading/page";
import React from "react";

const Sctextbox = ({ title, loading }) => {
    return (
        <section className="scTextbox relative py-[50px]  bg-[#0C3B24] text-[var(--white-color)]">
            {!!loading && <ComponentLoading spin={true} />}
            <div className="container flex justify-center items-center flex-col">
                <h1 className="scTextbox__title ">{title || ""}</h1>
                <p className="scTextbox__desc">Designs to make you stand out.</p>
                <Button
                    className="scTextbox__button flex items-center justify-center mt-[22px]"
                    variant="outlineWhite"
                >
                    <svg
                        className="scTextbox__button-icon h-[16px] w-[16px] mr-[6px]"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z" />
                    </svg>
                    <span className="scTextbox__button-text font-[m]">How Fiverr Works</span>
                </Button>
            </div>
        </section>
    );
};

export default Sctextbox;
