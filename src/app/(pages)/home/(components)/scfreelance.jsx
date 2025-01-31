"use client";
import IconPlayVideo from "@/app/components/IconPlayVideo/page";
import IconTextbox from "@/app/components/IconTextbox/page";
import PopupVideo from "@/app/components/PopupVideo/page";
import Image from "next/image";
import { useState } from "react";

const Scfreelance = () => {
    const [ShowVideo, setShowVideo] = useState({
        isShow: false,
        srcVideo: "",
    });

    const handleShowVideo = (video) => {
        document.querySelector("body").classList.add("--disable-scroll");
        setShowVideo({
            isShow: true,
            srcVideo: video,
        });
    };
    const handleCloseVideo = () => {
        document.querySelector("body").classList.remove("--disable-scroll");
        setShowVideo({
            isShow: false,
            srcVideo: "",
        });
    };

    return (
        <>
            <section className="scfreelance py-[80px] bg-[var(--bg-page-2)]">
                <div className="container flex items-center justify-between gap-8 max-lg:gap-12 max-lg:flex-col ">
                    <div className="scfreelance__left max-w-[530px] max-lg:max-w-full ">
                        <h2 className="heading heading_2 boldText !text-[var(--text-color-body-3)]">
                            A whole world of freelance talent at your fingertips
                        </h2>
                        <div className="scfreelance__left-content ">
                            <IconTextbox
                                className="mt-[25px]"
                                title="The best for every budget"
                                icon="/checkedIcon.svg"
                            >
                                Find high-quality services at every price point. No hourly rates,
                                just project-based pricing.
                            </IconTextbox>
                            <IconTextbox
                                className="mt-[25px]"
                                title="Quality work done quickly
    "
                                icon="/checkedIcon.svg"
                            >
                                FFind the right freelancer to begin working on your project within
                                minutes.
                            </IconTextbox>
                            <IconTextbox
                                className="mt-[25px]"
                                title="Protected payments, every time
    "
                                icon="/checkedIcon.svg"
                            >
                                Always know what you'll pay upfront. Your payment isn't released
                                until you approve the work.
                            </IconTextbox>
                            <IconTextbox
                                className="mt-[25px]"
                                title="24/7 support"
                                icon="/checkedIcon.svg"
                            >
                                Questions? Our round-the-clock support team is available to help
                                anytime, anywhere.
                            </IconTextbox>
                        </div>
                    </div>
                    <div
                        className="scfreelance__video relative aspect-[655/420] object-cover w-full max-w-[50%] max-lg:max-w-full "
                        onClick={() => {
                            handleShowVideo(
                                "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
                            );
                        }}
                    >
                        <Image src="/videoImage.png" fill={true} alt="video image" sizes="100%" />
                        <IconPlayVideo />
                    </div>
                </div>
            </section>
            {!!ShowVideo.isShow && (
                <PopupVideo srcVideo={ShowVideo.srcVideo} closeVideoFunction={handleCloseVideo} />
            )}
        </>
    );
};

export default Scfreelance;
