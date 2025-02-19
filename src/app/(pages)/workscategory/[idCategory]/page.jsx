import { getDetailCategoryWorksByIdCate } from "@/app/actions/WorksActions";
import BreadcumbComponent from "@/app/components/Breadcumb/page";
import ComponentLoading from "@/app/components/Loading/page";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";

const Scpopular = dynamic(() => import("../components/scpopular"), {
    suspense: true,
});
const Scservices = dynamic(() => import("../components/scservices"), {
    suspense: true,
});
const Sctextbox = dynamic(() => import("../components/sctextbox"), {
    suspense: true,
});
const Scexplore = dynamic(() => import("../components/scexplore"), {
    suspense: true,
});

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
            <Suspense fallback={<ComponentLoading />}>
                <Sctextbox {...sctextboxProps} />
            </Suspense>

            <BreadcumbComponent>
                <BreadcumbComponent.item>
                    <Link href={"/"}>{"Home"}</Link>
                </BreadcumbComponent.item>
                <BreadcumbComponent.item isActive={true}>
                    {detailCategoryWorks?.tenLoaiCongViec || ""}
                </BreadcumbComponent.item>
            </BreadcumbComponent>
            {/* section popular */}
            <Suspense fallback={<ComponentLoading />}>
                <Scpopular />
            </Suspense>

            <Suspense fallback={<ComponentLoading />}>
                {/* section expolore */}
                <Scexplore {...scexploreProps} />
            </Suspense>

            <Suspense fallback={<ComponentLoading />}>
                {/* section Services  */}
                <Scservices />
            </Suspense>
        </main>
    );
};

export default WorksCategoryPage;
