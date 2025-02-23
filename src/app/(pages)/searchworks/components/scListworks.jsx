"use client";
import { getUserById } from "@/app/actions/UserActions";
import PaginationComponent from "@/app/components/PaginationComponent/page";
import WorksCard from "@/app/components/WorksCard/page";
import useDebounce from "@/app/hooks/useDebounce";
import { Empty, Skeleton } from "antd";
import { useEffect, useState } from "react";

const ScListworks = ({ pageIndex, pageSize, totalRow, works, loading, handleChangePagination }) => {
    const [user, setUser] = useState([]);
    const [userloading, setUserLoading] = useState(false);

    const handleGetUser = async (idUser = "") => {
        try {
            setUserLoading(true);
            const data = await getUserById(idUser);
            setUser((prev) => {
                return [...prev, data];
            });
        } catch (error) {
            console.error(error);
        } finally {
            setUserLoading(false);
        }
    };

    const handleGetUserByWork = () => {
        if (works) {
            works?.forEach((work) => {
                handleGetUser(work?.nguoiTao || "");
            });
        }
    };

    // get user when work active
    useEffect(() => {
        handleGetUserByWork();
    }, [works]);

    const loadingAPI = loading || userloading;
    const loadingPage = useDebounce(loadingAPI, 200);

    return (
        <section className="scListworks ">
            <div className="container grid grid-cols-4 gap-[20px] max-lg:grid-cols-2 max-xs:grid-cols-1">
                {!!loadingPage &&
                    new Array(8).fill("").map((_, index) => {
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
                {!loadingPage && !!works?.length <= 0 && (
                    <div className="col-span-4 max-lg:col-span-2 max-xs:col-span-1 py-8">
                        <Empty description="No jobs found" />
                    </div>
                )}
                {!loadingPage &&
                    !!works?.length > 0 &&
                    works?.map((work, index) => {
                        return (
                            <WorksCard congViec={work} user={user[index]} key={work?.id || index} />
                        );
                    })}
            </div>
            <div className="container flex justify-center my-[40px] ">
                <PaginationComponent
                    defaultCurrent={pageIndex}
                    total={totalRow}
                    pageSize={pageSize}
                    handleChangePagination={handleChangePagination}
                />
            </div>
        </section>
    );
};

export default ScListworks;
