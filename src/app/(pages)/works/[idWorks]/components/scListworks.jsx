"use client";
import { getWorksByIdCategoryWork } from "@/app/actions/WorksActions";
import WorksCard from "@/app/components/WorksCard/page";
import useDebounce from "@/app/hooks/useDebounce";
import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";

const ScListworks = ({ idWorks }) => {
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleGetWorks = async () => {
        try {
            const data = await getWorksByIdCategoryWork(idWorks);

            setWorks(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        handleGetWorks();
    }, []);
    const loadingAPI = useDebounce(loading, 500);
    return (
        <section className="scListworks ">
            <div className="container grid grid-cols-4 gap-[20px] max-lg:grid-cols-2 max-xs:grid-cols-1">
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
                {!loadingAPI &&
                    works?.length > 0 &&
                    works?.map((work, index) => {
                        return <WorksCard {...work} key={work?.id || index} />;
                    })}
            </div>
        </section>
    );
};

export default ScListworks;
