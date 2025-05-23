import { getCategoryWorksById } from "@/app/actions/CategoryWorksAction";
import { getWorksByIdCategoryWork } from "@/app/actions/WorksActions";
import BreadcumbComponent from "@/app/components/Breadcumb/page";
import ComponentLoading from "@/app/components/Loading/page";
import PATH from "@/app/constants/path";
import dynamic from "next/dynamic";
import Link from "next/link";
import { cache, Suspense } from "react";

const ScToolkit = dynamic(() => import("../components/scToolkit"), {
    suspense: true,
});
const ScListworks = dynamic(() => import("../components/scListworks"), {
    suspense: true,
});

const WorksPage = async (props) => {
    const { idWorks } = await props.params;

    // get list works
    const worksData = await getWorksByIdCategoryWork(idWorks);
    // get catogory works
    const categoryWorkData = await getCategoryWorksById();

    // get 1 infor categoryWorks
    const workCate = worksData?.[0] || {};

    // cache Category Moment
    const categoryWorkMomentCache = cache((listCategoryWork, nameCategoryWork) => {
        let result = {};
        if (listCategoryWork && nameCategoryWork) {
            result = listCategoryWork?.filter((cate) => {
                return cate?.tenLoaiCongViec === nameCategoryWork;
            });
        }
        return result;
    });

    // get Category Moment
    const categoryWorkMoment = await categoryWorkMomentCache(
        categoryWorkData,
        workCate?.tenLoaiCongViec
    );
    // props section list works
    const propsListWorks = {
        idWorks,
    };

    return (
        <main className="mainWorks pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)] relative">
            {/* breakcumb */}
            <BreadcumbComponent>
                <BreadcumbComponent.item>
                    <Link href={"/"}>{"Home"}</Link>
                </BreadcumbComponent.item>
                <BreadcumbComponent.item>
                    <Link href={`${PATH.WORKS_CATEGORY}/${categoryWorkMoment?.[0]?.id || ""}`}>
                        {categoryWorkMoment?.[0]?.tenLoaiCongViec || ""}
                    </Link>
                </BreadcumbComponent.item>
                <BreadcumbComponent.item isActive={true}>
                    {worksData?.[0]?.tenChiTietLoai || ""}
                </BreadcumbComponent.item>
            </BreadcumbComponent>
            <div className="container">
                <h1 className="heading mt-8 max-md:text-center">
                    {worksData?.[0]?.tenChiTietLoai || ""}
                </h1>
            </div>
            <Suspense fallback={<ComponentLoading />}>
                <ScToolkit />
            </Suspense>
            <Suspense fallback={<ComponentLoading />}>
                <ScListworks {...propsListWorks} />
            </Suspense>
        </main>
    );
};

export default WorksPage;
