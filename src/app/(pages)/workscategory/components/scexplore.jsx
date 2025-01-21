import CardCategory from "@/app/components/CardCategory/page";
import React from "react";

const Scexplore = ({ categoryWorks }) => {
    console.log("categoryWorks", categoryWorks);

    return (
        <section className="scexplore">
            <div className="container">
                <h2 className="titleSection">Explore Writing & Translation</h2>
                <div className="grid grid-cols-4 gap-8 mt-[22px] max-lg:grid-cols-2 max-xs:grid-cols-1    ">
                    {categoryWorks?.map((item, index) => {
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
