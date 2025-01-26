import { getCategoryWorksById } from "@/app/actions/CategoryWorksAction";
import { getWorksByIdCategoryWork } from "@/app/actions/WorksActions";
import BreadcumbComponent from "@/app/components/Breadcumb/page";
import PATH from "@/app/constants/path";
import Link from "next/link";
import { cache } from "react";
import ScListworks from "./components/scListworks";
import ScToolkit from "./components/scToolkit";

const WorksPage = async (props) => {
    const { idWorks } = await props.params;

    const { data: worksData, loading: worksLoading } = await getWorksByIdCategoryWork(idWorks);
    const { data: categoryWorkData, loading: categoryWorkLoading } = await getCategoryWorksById();
    const propsListWorks = {
        works: worksData,
        loading: worksLoading,
    };

    // cache categoryWorks
    const workCate = worksData?.[0] || {};

    const categoryWorkMomentCache = cache((listCategoryWork, nameCategoryWork) => {
        let result = {};
        if (listCategoryWork && nameCategoryWork) {
            result = listCategoryWork?.filter((cate) => {
                return cate?.tenLoaiCongViec === nameCategoryWork;
            });
        }
        return result;
    });
    const categoryWorkMoment = await categoryWorkMomentCache(
        categoryWorkData,
        workCate?.tenLoaiCongViec
    );
    console.log(worksData);

    return (
        <main className="mainWorks pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)]">
            <BreadcumbComponent>
                <BreadcumbComponent.item>
                    <Link href={"/"}>{"Home"}</Link>
                </BreadcumbComponent.item>
                <BreadcumbComponent.item>
                    <Link href={`${PATH.WORKS_CATEGORY}/${categoryWorkMoment?.[0]?.id || ""}`}>
                        {categoryWorkMoment?.[0]?.tenLoaiCongViec || ""}
                    </Link>
                </BreadcumbComponent.item>
                <BreadcumbComponent.item>
                    {categoryWorkMoment?.[0]?.tenLoaiCongViec || ""}
                </BreadcumbComponent.item>
            </BreadcumbComponent>
            <div className="container">
                <h1 className="heading mt-8 max-md:text-center">
                    {worksData?.[0]?.tenChiTietLoai || ""}
                </h1>
            </div>
            <ScToolkit />
            <ScListworks {...propsListWorks} />
        </main>
    );
};

export default WorksPage;
