import CardLogoArrow from "@/app/components/CardLogoArrow/page";
import React from "react";

const Scpopular = () => {
    return (
        <section className="scpopular pb-[50px] pt-[20px]">
            <div className="container">
                <h2 className="titleSection">Most popular in Writing & Translation</h2>
                <div className="flex gap-4 flex-wrap items-center">
                    <CardLogoArrow icon="/LogoArrow_1.webp">Minimalist Logo Design</CardLogoArrow>
                    <CardLogoArrow icon="/LogoArrow_2.webp">
                        Architecture & Interior Design
                    </CardLogoArrow>
                    <CardLogoArrow icon="/LogoArrow_3.webp">Image Editing</CardLogoArrow>
                    <CardLogoArrow icon="/LogoArrow_4.webp">NFT Art</CardLogoArrow>
                    <CardLogoArrow icon="/LogoArrow_5.webp">T-Shirts & Merchandise</CardLogoArrow>
                </div>
            </div>
        </section>
    );
};

export default Scpopular;
