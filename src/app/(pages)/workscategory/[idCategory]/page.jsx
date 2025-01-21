import React from "react";
import Sctextbox from "../components/sctextbox";
import Scpopular from "../components/scpopular";
import Scexplore from "../components/scexplore";
import Scservices from "../components/scservices";
import { getDetailCategoryWorks } from "@/app/actions/WorksActions";

const WorksCategoryPage = async (props) => {
    const { idCategory } = await props.params;

    const res = await getDetailCategoryWorks(idCategory);
    const detailCategoryWorks = res?.[0] || {};

    const sctextboxProps = {
        title: detailCategoryWorks?.tenLoaiCongViec || "",
    };
    const scexploreProps = {
        categoryWorks: detailCategoryWorks?.dsNhomChiTietLoai || [],
    };

    return (
        <main className="mainWorksCategory pt-[calc(var(--height-header)_+_40px)]">
            {/* section textbox */}
            <Sctextbox {...sctextboxProps} />

            {/* section popular */}
            <Scpopular />

            {/* section expolore */}
            <Scexplore {...scexploreProps} />

            {/* section Services  */}
            <Scservices />
        </main>
    );
};

export default WorksCategoryPage;
