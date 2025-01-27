import { getCategoryWorksById } from "@/app/actions/CategoryWorksAction";
import { getDetailWorkById } from "@/app/actions/WorksActions";
import AvatarCard from "@/app/components/AvatarCard/page";
import BreadcumbComponent from "@/app/components/Breadcumb/page";
import Rating from "@/app/components/Rating/page";
import Image from "next/image";
import Link from "next/link";
import ScContentWork from "../components/scContentWork";

const WorksDetailPage = async (props) => {
    const { idWork } = await props.params;
    const { data: detailWorkData, loading: detailWorkLoading } = await getDetailWorkById(idWork);

    const { data: categoryWorkData, loading: categoryWorkLoading } = await getCategoryWorksById();

    const { congViec, tenNguoiTao } = detailWorkData?.[0] || {};
    const { hinhAnh, moTa } = congViec || {};

    // props section content works
    const propsScContentWorks = {
        tenNguoiTao,
        hinhAnh,
        moTa,
    };

    console.log(detailWorkData);

    return (
        <main className="mainDetailWork pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)]">
            <BreadcumbComponent>
                <BreadcumbComponent.item>
                    <Link href={"/"}>Home</Link>
                </BreadcumbComponent.item>
                <BreadcumbComponent.item></BreadcumbComponent.item>
            </BreadcumbComponent>

            <div className="container">
                <div className="mainContent">
                    <ScContentWork {...propsScContentWorks} />
                    <section className="scSeller"></section>
                    <section className="scFAQ"></section>
                    <section className="scReviews"></section>
                </div>
                <aside className="asideDetailWork"></aside>
            </div>
        </main>
    );
};

export default WorksDetailPage;
