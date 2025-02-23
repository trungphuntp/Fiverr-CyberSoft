"use client";
import { getUserById } from "@/app/actions/UserActions";
import { getWorksByIdCategoryWork } from "@/app/actions/WorksActions";
import WorksCard from "@/app/components/WorksCard/page";
import useDebounce from "@/app/hooks/useDebounce";
import { Empty, Skeleton } from "antd";
import React, { useEffect, useState } from "react";

const ScListworks = ({ idWorks }) => {
    const [works, setWorks] = useState([]);
    const [worksLoading, setworksLoading] = useState(true);

    const [user, setUser] = useState([]);
    const [userloading, setUserLoading] = useState(false);

    const handleGetWorks = async () => {
        try {
            setworksLoading(true);
            const data = await getWorksByIdCategoryWork(idWorks);
            setWorks(data);
        } catch (error) {
            console.error(error);
        } finally {
            setworksLoading(false);
        }
    };

    const handleGetUser = async (idUser = "") => {
        try {
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
                handleGetUser(work?.congViec?.nguoiTao || "");
            });
        }
    };

    useEffect(() => {
        handleGetWorks();
    }, [idWorks]);

    // get user when work active
    useEffect(() => {
        handleGetUserByWork();
    }, [works]);

    const loadingAPI = worksLoading || userloading;
    const loadingPage = useDebounce(loadingAPI, 500);

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
                        <Empty
                            description="No jobs found
"
                        />
                    </div>
                )}
                {!loadingPage &&
                    works?.length > 0 &&
                    works?.map((work, index) => {
                        return <WorksCard {...work} user={user[index]} key={work?.id || index} />;
                    })}
            </div>
        </section>
    );
};

export default ScListworks;
