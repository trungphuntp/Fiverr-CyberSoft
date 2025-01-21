import { getMenuCategory } from "@/app/actions/WorksActions";
import PATH from "@/app/constants/path";
import Link from "next/link";
import React from "react";

const HeaderMiddle = async () => {
    const res = await getMenuCategory();
    return (
        <div className="container-fluid max-xl:hidden ">
            <div className="headerBottomLine"></div>
            <div className="header__bottom  h-[40px]  flex justify-between items-center relative ">
                {res?.map((item, index) => {
                    const linkIdCategoryWork = PATH.WORKS_CATEGORY + `/${item?.id}`;
                    return (
                        <div
                            className="header__bottom-wrapper"
                            key={item?.id || new Date.getTime() + index}
                        >
                            <Link className="header__bottom-item" href={linkIdCategoryWork}>
                                {item?.tenLoaiCongViec || ""}
                            </Link>
                            <div className="header__bottom-textbox">
                                {item?.dsNhomChiTietLoai?.map((NhomChiTietLoai, index) => {
                                    return (
                                        <div
                                            className="item"
                                            key={NhomChiTietLoai?.id || new Date.getTime() + index}
                                        >
                                            <h5 className="item__title">
                                                {NhomChiTietLoai?.tenNhom || ""}
                                            </h5>

                                            {NhomChiTietLoai?.dsChiTietLoai?.map(
                                                (chiTietLoai, index) => {
                                                    return (
                                                        <Link
                                                            className="item__text"
                                                            href="#"
                                                            key={
                                                                chiTietLoai?.id ||
                                                                new Date.getTime() + index
                                                            }
                                                        >
                                                            {chiTietLoai?.tenChiTiet || ""}
                                                        </Link>
                                                    );
                                                }
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HeaderMiddle;
