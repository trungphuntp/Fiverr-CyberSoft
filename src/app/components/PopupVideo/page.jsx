"use client";
import React from "react";
const PopupVideo = ({ srcVideo, closeVideoFunction }) => {
    const _onCloseVideo = () => {
        closeVideoFunction();
    };
    return (
        <div
            className={`PopupVideo  h-screen w-screen fixed  z-[999] flex items-center justify-center top-0 left-0 `}
        >
            {/* overlay video */}
            <div
                className="PopupVideo__inner-overlay absolute h-screen w-screen bg-[rgba(0,0,0,0.5)]"
                onClick={(e) => {
                    _onCloseVideo();
                }}
            ></div>

            {/* video */}
            <div className="PopupVideo__video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full aspect-[16/9] max-w-[calc(1200px_+_var(--pd-container)_*_2)] max-xs:w-[calc(100%_-_var(--pd-container)_-_10px)] px-[var(--pd-container)] ">
                <video
                    src={srcVideo || ""}
                    style={{
                        width: " 100%",
                        borderWidth: "7px",
                        borderStyle: "solid",
                        borderColor: "#fff",
                    }}
                    autoplay="true"
                    preload="metadata"
                ></video>
            </div>
        </div>
    );
};

export default PopupVideo;
