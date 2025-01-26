import WorksCard from "@/app/components/WorksCard/page";
import React from "react";

const ScListworks = ({ works, loading }) => {
    return (
        <section className="scListworks ">
            <div className="container grid grid-cols-4 gap-[20px] max-lg:grid-cols-2 max-xs:grid-cols-1">
                {works?.length > 0 &&
                    works?.map((work, index) => {
                        return <WorksCard {...work} key={work?.id || index} />;
                    })}
            </div>
        </section>
    );
};

export default ScListworks;
