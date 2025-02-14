import { getCategoryWorksById } from "@/app/actions/CategoryWorksAction";
import { getDetailCategoryWorksById } from "@/app/actions/DetailCategoryWorkAction";
import { getUserById } from "@/app/actions/UserActions";
import { getDetailWorkById } from "@/app/actions/WorksActions";
import BreadcumbComponent from "@/app/components/Breadcumb/page";
import ComponentLoading from "@/app/components/Loading/page";
import ReduxProvider from "@/app/components/ReduxProvider/page";
import PATH from "@/app/constants/path";
import Link from "next/link";
import { cache, Suspense } from "react";
import CheckoutDetailWork from "../components/CheckoutDetailWork";
import ScContentWork from "../components/scContentWork";
import ScFAQ from "../components/scFAQ";
import ScReviews from "../components/scReviews";
import ScSeller from "../components/scSeller";

const WorksDetailPage = async (props) => {
    const { idWork } = await props.params;
    // get work infor
    let detailWorkData;
    if (idWork) {
        detailWorkData = await getDetailWorkById(idWork);
    }

    // get category work
    const categoryWorkData = await getCategoryWorksById();

    const { congViec, tenLoaiCongViec, id } = detailWorkData?.[0] || {};
    const {
        hinhAnh,
        moTa,
        nguoiTao,
        maChiTietLoaiCongViec,
        tenCongViec,
        saoCongViec,
        danhGia,
        giaTien,
        moTaNgan,
    } = congViec || {};

    // get API user
    let userData = {};
    if (nguoiTao) {
        userData = await getUserById(nguoiTao);
    }
    const { avatar, name, role, phone } = userData || {};

    // get API detail category works
    let DetailCateWorks = {};
    if (maChiTietLoaiCongViec) {
        DetailCateWorks = await getDetailCategoryWorksById(maChiTietLoaiCongViec);
    }

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

    // get API category works
    let CateWorks = {};
    if (tenLoaiCongViec) {
        // get Category Moment
        CateWorks = await categoryWorkMomentCache(categoryWorkData, tenLoaiCongViec);
        CateWorks = CateWorks?.[0] || {};
    }

    // props section content works
    const propsScContentWorks = {
        hinhAnh,
        moTa,
        avatar,
        name,
        role,
        saoCongViec,
        danhGia,
    };

    // props section seller
    const propsScSeller = {
        avatar,
        name,
        role,
        saoCongViec,
        danhGia,
        phone,
    };

    // props section reviews
    const propsReviews = {
        quantityReviews: danhGia || 0,
        star: saoCongViec || 0,
        idWork: id || "",
    };

    // props asides reviews
    const propsAside = {
        price: giaTien || 0,
        shortDesc: moTaNgan || "",
        idDetailWork: id || "",
    };

    return (
        <main className="mainDetailWork pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)]">
            <Suspense fallback={<ComponentLoading />}>
                <BreadcumbComponent>
                    <BreadcumbComponent.item>
                        <Link href={"/"}>Home</Link>
                    </BreadcumbComponent.item>
                    <BreadcumbComponent.item>
                        <Link href={PATH.WORKS_CATEGORY + `/${CateWorks?.id}`}>
                            {CateWorks?.tenLoaiCongViec || ""}
                        </Link>
                    </BreadcumbComponent.item>
                    <BreadcumbComponent.item>
                        <Link href={PATH.WORKS + `/${DetailCateWorks?.id}`}>
                            {DetailCateWorks?.tenChiTiet || ""}
                        </Link>
                    </BreadcumbComponent.item>
                    <BreadcumbComponent.item isActive={true}>
                        {tenCongViec || ""}
                    </BreadcumbComponent.item>
                </BreadcumbComponent>
                <div className="container flex justify-between items-stretch">
                    <div className="mainContent">
                        <ScContentWork {...propsScContentWorks} />
                        <ScSeller {...propsScSeller} />
                        <ScFAQ />
                        <ReduxProvider>
                            <ScReviews {...propsReviews} />
                        </ReduxProvider>
                    </div>
                    <aside className="asideDetailWork">
                        <ReduxProvider>
                            <CheckoutDetailWork {...propsAside} />
                        </ReduxProvider>
                    </aside>
                </div>
            </Suspense>
        </main>
    );
};

export default WorksDetailPage;
