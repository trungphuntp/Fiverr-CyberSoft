import React from "react";
import SliderHero from "./sliderHero";
import InputSearch from "@/app/components/InputSearch/page";
import Tag from "@/app/components/tag/page";

const Schero = () => {
    return (
        <section className="schero">
            <SliderHero />
            <div className="container absolute z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                <div className="schero__content max-w-[665px]">
                    <h1 className="heading textWhite">
                        Find the perfect <i className="italicHeading">Freelance</i> services for
                        your business
                    </h1>
                    <div className="mt-[24px] h-[48px]">
                        <InputSearch placeholder='Try "building mobile app"' sizeBtn="normal" />
                    </div>
                    <div className="mt-[22px] flex flex-wrap items-center gap-[12px] text-[var(--white-color)] ">
                        Popular:
                        <Tag variant="outline">Website Design</Tag>
                        <Tag variant="outline">WordPress</Tag>
                        <Tag variant="outline">Logo Design</Tag>
                        <Tag variant="outline">Video Editing</Tag>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schero;
