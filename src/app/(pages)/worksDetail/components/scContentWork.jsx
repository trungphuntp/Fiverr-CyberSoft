import AvatarCard from "@/app/components/AvatarCard/page";
import Rating from "@/app/components/Rating/page";
import Image from "next/image";
import React from "react";

const ScContentWork = ({ avatar, name, role, hinhAnh, moTa, saoCongViec, danhGia }) => {
    return (
        <section className="scContentWork">
            <h1 className="scContentWork__title">
                I will be your brand story, about us, or biography content writer
            </h1>
            <div className="scContentWork__author ">
                <div className="scContentWork__item scContentWork__author-avatar">
                    <AvatarCard
                        type="row"
                        avatar={avatar || ""}
                        name={name || ""}
                        role={role || ""}
                    />
                </div>
                <div className="scContentWork__item scContentWork__author-rating">
                    <Rating
                        value={saoCongViec || 0}
                        disabled={true}
                        saoCongViec={saoCongViec}
                        danhGia={danhGia}
                    />
                </div>
                <div className="scContentWork__item scContentWork__author-queue">
                    5 Order in Queue
                </div>
            </div>
            <div className="scContentWork__img">
                <Image
                    src={hinhAnh || ""}
                    alt="image detail work"
                    width={750}
                    height={500}
                    quality={99}
                />
            </div>
            <div className="scContentWork__gig">
                <h2 className="title_2">About This Gig</h2>
                <p className="desc">{moTa || ""}</p>
            </div>
        </section>
    );
};

export default ScContentWork;
