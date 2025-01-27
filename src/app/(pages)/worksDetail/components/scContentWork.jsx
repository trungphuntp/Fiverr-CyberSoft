import AvatarCard from "@/app/components/AvatarCard/page";
import Rating from "@/app/components/Rating/page";
import Image from "next/image";
import React from "react";

const ScContentWork = ({ tenNguoiTao, hinhAnh, moTa }) => {
    return (
        <section className="scContentWork">
            <h1 className="scContentWork__title">
                I will be your brand story, about us, or biography content writer
            </h1>
            <div className="scContentWork__author ">
                <div className="scContentWork__author-avatar">
                    <AvatarCard type="row" name={tenNguoiTao || ""} />
                </div>
                <div className="scContentWork__author-rating">
                    <Rating value={5} disabled={true} />
                    <span className="numRate">2</span>
                    <span className="quantityRate">2</span>
                </div>
                <div className="scContentWork__author-queue">5 Order in Queue</div>
            </div>
            <div className="scContentWork__author-img">
                <Image
                    src={hinhAnh || ""}
                    alt="image detail work"
                    layout="responsive"
                    width={750}
                    height={500}
                />
            </div>
            <div className="scContentWork__author-gig">
                <h2 className="title_2">About This Gig</h2>
                <p className="desc">{moTa || ""}</p>
            </div>
        </section>
    );
};

export default ScContentWork;
