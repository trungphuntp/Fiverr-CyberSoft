import React from "react";
import Sctextbox from "../components/sctextbox";
import Scpopular from "../components/scpopular";
import Scexplore from "../components/scexplore";
import Scservices from "../components/scservices";
import { getDetailCategoryWorksByIdCate } from "@/app/actions/WorksActions";
import BreadcumbComponent from "@/app/components/Breadcumb/page";
import Link from "next/link";
import { PageName } from "@/app/constants/general";

const WorksCategoryPage = async (props) => {
    const { idCategory } = await props.params;

    const { data, loading: detailCategoryLoading } = await getDetailCategoryWorksByIdCate(
        idCategory
    );
    const detailCategoryWorks = data?.[0] || {};

    const sctextboxProps = {
        title: detailCategoryWorks?.tenLoaiCongViec || "",
        loading: detailCategoryLoading,
    };
    const scexploreProps = {
        categoryWorks: detailCategoryWorks?.dsNhomChiTietLoai || [],
        loading: detailCategoryLoading,
    };
    console.log(detailCategoryWorks);

    return (
        <main className="mainWorksCategory pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)]">
            {/* section textbox */}
            <Sctextbox {...sctextboxProps} />

            <BreadcumbComponent>
                <BreadcumbComponent.item>
                    <Link href={"/"}>{"Home"}</Link>
                </BreadcumbComponent.item>
                <BreadcumbComponent.item>
                    {detailCategoryWorks?.tenLoaiCongViec || ""}
                </BreadcumbComponent.item>
            </BreadcumbComponent>
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
