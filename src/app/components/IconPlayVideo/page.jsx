import React from "react";

const IconPlayVideo = () => {
    return (
        <>
            <svg
                className="iconPlayVideo h-[30px] w-[30px] text-[var(--white-color)] absolute top-1/2 left-[50.5%] -translate-x-1/2 -translate-y-1/2 z-[4] cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 384 512"
            >
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
            <div
                className="scfreelance__video-icon w-[80px] h-[80px] bg-[rgba(0,0,0,0.5)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-[50%] cursor-pointer z-[3] hover:w-[100px] hover:h-[100px] transition-all"
                style={{ transitionDuration: "0.3s" }}
            ></div>
        </>
    );
};

export default IconPlayVideo;
