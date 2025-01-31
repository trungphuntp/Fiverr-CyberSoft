import { getCategoryWorksById } from "@/app/actions/CategoryWorksAction";
import { getDetailWorkById } from "@/app/actions/WorksActions";
import AvatarCard from "@/app/components/AvatarCard/page";
import BreadcumbComponent from "@/app/components/Breadcumb/page";
import Rating from "@/app/components/Rating/page";
import Image from "next/image";
import Link from "next/link";
import ScContentWork from "../components/scContentWork";
import { getUserById } from "@/app/actions/UserActions";
import { getDetailCategoryWorksById } from "@/app/actions/DetailCategoryWorkAction";
import PATH from "@/app/constants/path";
import { cache, Suspense } from "react";
import ComponentLoading from "@/app/components/Loading/page";
import ScSeller from "../components/scSeller";
import ScFAQ from "../components/scFAQ";
import ScReviews from "../components/scReviews";
import { getReviewsByIdWork } from "@/app/actions/ReviewsAction";
import CheckoutDetailWork from "../components/CheckoutDetailWork";

const WorksDetailPage = async (props) => {
    const { idWork } = await props.params;
    // get work infor
    const detailWorkData = await getDetailWorkById(idWork);

    // get category work
    const categoryWorkData = await getCategoryWorksById();

    const { congViec, tenLoaiCongViec, id } = detailWorkData?.[0] || {};
    const { hinhAnh, moTa, nguoiTao, maChiTietLoaiCongViec, tenCongViec, saoCongViec, danhGia } =
        congViec || {};

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

    // get API reviews
    let reviewsData = [];
    if (id) {
        // get Category Moment
        reviewsData = await getReviewsByIdWork(id);
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
        reviews: reviewsData,
        quantityReviews: danhGia || 0,
        star: saoCongViec || 0,
    };

    // console.log(detailWorkData);
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
                    <BreadcumbComponent.item>{tenCongViec || ""}</BreadcumbComponent.item>
                </BreadcumbComponent>
                <div className="container flex justify-between items-stretch">
                    <div className="mainContent">
                        <ScContentWork {...propsScContentWorks} />
                        <ScSeller {...propsScSeller} />
                        <ScFAQ />
                        <ScReviews {...propsReviews} />
                    </div>
                    <aside className="asideDetailWork">
                        <CheckoutDetailWork />
                    </aside>
                </div>
            </Suspense>
        </main>
    );
};

export default WorksDetailPage;
