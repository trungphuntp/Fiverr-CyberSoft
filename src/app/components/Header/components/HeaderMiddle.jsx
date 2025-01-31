import { getMenuCategory } from "@/app/actions/WorksActions";
import PATH from "@/app/constants/path";
import Link from "next/link";
import ComponentLoading from "../../Loading/page";

const HeaderMiddle = async () => {
    const { data: MenuCategorys, loading } = await getMenuCategory();

    return (
        <div className="container-fluid max-xl:hidden ">
            <div className="headerBottomLine"></div>
            <div className="header__bottom  h-[40px]  flex justify-between items-center relative ">
                {!!loading && <ComponentLoading spin={true} />}
                {!loading &&
                    MenuCategorys?.length > 0 &&
                    MenuCategorys?.map((item, index) => {
                        const linkIdCategoryWork = PATH.WORKS_CATEGORY + `/${item?.id}`;
                        return (
                            <div className="header__bottom-wrapper" key={item?.id || index}>
                                <Link className="header__bottom-item" href={linkIdCategoryWork}>
                                    {item?.tenLoaiCongViec || ""}
                                </Link>
                                <div className="header__bottom-textbox">
                                    {item?.dsNhomChiTietLoai?.map((NhomChiTietLoai, index) => {
                                        return (
                                            <div
                                                className="item"
                                                key={NhomChiTietLoai?.id || index}
                                            >
                                                <h5 className="item__title">
                                                    {NhomChiTietLoai?.tenNhom || ""}
                                                </h5>

                                                {NhomChiTietLoai?.dsChiTietLoai?.map(
                                                    (chiTietLoai, index) => {
                                                        const linkWorks =
                                                            PATH.WORKS + `/${chiTietLoai.id}`;
                                                        return (
                                                            <Link
                                                                className="item__text"
                                                                href={linkWorks || "#"}
                                                                key={chiTietLoai?.id || index}
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
