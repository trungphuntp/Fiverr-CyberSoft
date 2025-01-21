import Tag from "@/app/components/tag/page";
import React from "react";

const Scservices = () => {
    return (
        <section className="scservices py-[50px]">
            <div className="container">
                <h2 className="titleSection text-center">
                    Services Related To Writing & Translation
                </h2>
                <div className="scservices__tags flex flex-wrap justify-center items-center gap-x-4 gap-y-6 max-w-[1200px] mt-[50px]">
                    <Tag>Minimalist logo design</Tag>
                    <Tag>Signature logo design</Tag>
                    <Tag>Mascot logo design</Tag>
                    <Tag>3d logo design</Tag>
                    <Tag>Hand drawn logo design</Tag>
                    <Tag>Vintage logo design</Tag>
                    <Tag>Remove background</Tag>
                    <Tag>Photo restoration</Tag>
                    <Tag>Photo retouching</Tag>
                    <Tag>Image resize</Tag>
                    <Tag>Product label design</Tag>
                    <Tag>Custom twitch overlay</Tag>
                    <Tag>Custom twitch emotes</Tag>
                    <Tag>Gaming logo</Tag>
                    <Tag>Minimalist logo</Tag>
                </div>
            </div>
        </section>
    );
};

export default Scservices;
