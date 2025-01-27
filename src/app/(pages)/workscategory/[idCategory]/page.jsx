import { getDetailCategoryWorksByIdCate } from "@/app/actions/WorksActions";
import BreadcumbComponent from "@/app/components/Breadcumb/page";
import Link from "next/link";
import Scpopular from "../components/scpopular";
import Scservices from "../components/scservices";
import Sctextbox from "../components/sctextbox";
import Scexplore from "../components/scexplore";

const WorksCategoryPage = async (props) => {
    const { idCategory } = await props.params;
    const res = await getDetailCategoryWorksByIdCate(idCategory);
    const detailCategoryWorks = res?.[0] || {};

    const sctextboxProps = {
        title: detailCategoryWorks?.tenLoaiCongViec || "",
    };
    const scexploreProps = {
        idWorks: idCategory,
    };

    return (
        <main className="mainWorksCategory relative pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)]">
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
