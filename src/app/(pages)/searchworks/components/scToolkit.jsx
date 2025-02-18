import SelectComponent from "@/app/components/Select/page";
import SwitchText from "@/app/components/SwitchText/page";
import { SelectWorksPage } from "@/app/constants/general";
import React from "react";

const ScToolkit = () => {
    return (
        <section className="scToolkit pt-[30px] pb-[20px]">
            <div className="container">
                <div className="scToolkit__top flex justify-between items-center">
                    <div className="scToolkit__top-left flex items-center gap-[12px] flex-wrap">
                        <SelectComponent dropDownList={SelectWorksPage.selectBorder}>
                            Category
                        </SelectComponent>
                        <SelectComponent dropDownList={SelectWorksPage.selectBorder}>
                            Service Options
                        </SelectComponent>
                        <SelectComponent dropDownList={SelectWorksPage.selectBorder}>
                            Seller Details
                        </SelectComponent>
                        <SelectComponent dropDownList={SelectWorksPage.selectBorder}>
                            Delivery Time
                        </SelectComponent>
                    </div>
                    <div className="scToolkit__top-right flex items-center gap-[30px] flex-wrap">
                        <SwitchText id={"proServices"}>Pro services</SwitchText>
                        <SwitchText id={"localSellers"}>Local sellers</SwitchText>
                        <SwitchText id={"onlineSellers"}>Online sellers</SwitchText>
                    </div>
                </div>
                <div className="scToolkit__bottom mt-[20px] flex justify-between items-center font-[m600] text-[var(--text-color-body-2)]">
                    <div className="scToolkit__bottom-left  text-[1.4rem] ">
                        <p className="availableText">2 services available</p>
                    </div>
                    <div className="scToolkit__bottom-right text-[1.6rem] flex items-center">
                        <p className="text">Sort by:</p>
                        <SelectComponent
                            type={"noneBorder"}
                            dropDownList={SelectWorksPage.noneBorder}
                        >
                            Category
                        </SelectComponent>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScToolkit;
