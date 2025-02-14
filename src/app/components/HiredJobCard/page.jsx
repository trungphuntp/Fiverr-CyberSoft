"use client";
import React from "react";
import Button from "../Button/page";
import Link from "next/link";
import PATH from "@/app/constants/path";

const HiredJobCard = ({ id, deleteHiredJob, congViec }) => {
    const {
        id: idDetail,
        hinhAnh,
        tenCongViec,
        moTaNgan,
        saoCongViec,
        giaTien,
        danhGia,
    } = congViec || {};
    const linkDetail = PATH.WORKS_DETAIL + `/${idDetail}`;

    const handleDeteleJob = (e) => {
        e?.stopPropagation();
        e?.preventDefault();
        deleteHiredJob?.(id);
    };
    return (
        <div className="HiredJobCard">
            <div className="HiredJobCard__content">
                <Link href={linkDetail} className="HiredJobCard__content-img">
                    <img src={!!hinhAnh ? hinhAnh : "/default_img.jpg"} alt="img hired job card" />
                </Link>
                <div className="HiredJobCard__content-text">
                    <Link href={linkDetail}>
                        <h5 className="title">{tenCongViec || ""}</h5>
                    </Link>
                    <p className="desc">{moTaNgan || ""}</p>
                    <div className="priceRate">
                        <div className="rate">
                            <svg
                                className="icon h-[16px] w-[16px]"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                            >
                                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                            {saoCongViec || 0}
                            <span className="quantity">{`(${danhGia})`}</span>
                        </div>
                        <div className="price">${giaTien || 0}</div>
                    </div>
                </div>
            </div>
            <div className="HiredJobCard__action">
                <Button linkIn={linkDetail}>View Detail</Button>
                <Button variant="error" onClick={handleDeteleJob}>
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default HiredJobCard;
