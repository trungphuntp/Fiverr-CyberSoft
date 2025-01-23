"use client";
import CardCategory from "@/app/components/CardCategory/page";
import { Skeleton } from "antd";
import React from "react";

const Scexplore = ({ loading, categoryWorks }) => {
    return (
        <section className="scexplore">
            <div className="container">
                <h2 className="titleSection">Explore Writing & Translation</h2>
                <div className="rela grid grid-cols-4 gap-8 mt-[22px] max-lg:grid-cols-2 max-xs:grid-cols-1    ">
                    {!!loading &&
                        new Array(4).fill("").map((_, index) => {
                            return (
                                <div
                                    className="loadingPost col-6 col-md-4 col-lg-4"
                                    key={index}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 12,
                                        marginTop: 10,
                                    }}
                                >
                                    <div className="loadingPost__img">
                                        <Skeleton.Image
                                            active={true}
                                            style={{ width: "100%", height: 275 }}
                                        />
                                    </div>
                                    <Skeleton.Input active />
                                    <Skeleton.Input block active />
                                </div>
                            );
                        })}
                    {!loading &&
                        categoryWorks?.length > 0 &&
                        categoryWorks?.map((item, index) => {
                            return (
                                <CardCategory
                                    key={item?.id || new Date.getTime() + index}
                                    imgCate={item?.hinhAnh || ""}
                                    title={item?.tenNhom || ""}
                                    detailCategorys={item?.dsChiTietLoai || []}
                                />
                            );
                        })}
                </div>
            </div>
        </section>
    );
};

export default Scexplore;
