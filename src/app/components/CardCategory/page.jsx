import Link from "next/link";
import React from "react";

const CardCategory = ({ imgCate, title, detailCategorys }) => {
    return (
        <div className="CardCategory">
            <div className="CardCategory__img">
                <img src={imgCate || "/default_img.jpg"} alt="image card category" />
            </div>
            <div className="CardCategory__content">
                <h3 className="CardCategory__title">{title || ""}</h3>
                <div className="CardCategory__list ">
                    {!!detailCategorys?.length > 0 &&
                        detailCategorys.map((item, index) => {
                            return (
                                <Link
                                    className="CardCategory__list-item"
                                    key={item?.id || index}
                                    href={"#"}
                                >
                                    {item?.tenChiTiet || ""}
                                </Link>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default CardCategory;
