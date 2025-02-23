"use client";
import { getDetailCategoryWorksByIdCate } from "@/app/actions/WorksActions";
import CardCategory from "@/app/components/CardCategory/page";
import useDebounce from "@/app/hooks/useDebounce";
import { Empty, Skeleton } from "antd";
import { useEffect, useState } from "react";

const Scexplore = ({ idWorks }) => {
    const [categoryWorks, setCategoryWorks] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleGetCategoryWorks = async () => {
        try {
            setLoading(true);
            const data = await getDetailCategoryWorksByIdCate(idWorks);
            setCategoryWorks(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        handleGetCategoryWorks();
    }, []);

    const loadingAPI = useDebounce(loading, 500);
    const categoryWorksData = categoryWorks?.[0]?.dsNhomChiTietLoai || [];

    return (
        <section className="scexplore">
            <div className="container">
                <h2 className="titleSection">Explore Writing & Translation</h2>
                <div className="rela grid grid-cols-4 gap-8 mt-[22px] max-lg:grid-cols-2 max-xs:grid-cols-1    ">
                    {!!loadingAPI &&
                        new Array(4).fill("").map((_, index) => {
                            return (
                                <div
                                    className="loadingPost"
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

                    {!loadingAPI && !!categoryWorksData?.length < 1 && (
                        <div className="col-span-4 max-lg:col-span-2 max-xs:col-span-1 py-8">
                            <Empty description="No data found" />
                        </div>
                    )}
                    {!loadingAPI &&
                        !!categoryWorksData?.length > 0 &&
                        categoryWorksData?.map((item, index) => {
                            return (
                                <CardCategory
                                    key={item?.id || index}
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
