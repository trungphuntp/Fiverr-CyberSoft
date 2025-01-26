import { getCategoryWorksById } from "@/app/actions/CategoryWorksAction";
import { getDetailWorkById } from "@/app/actions/WorksActions";
import BreadcumbComponent from "@/app/components/Breadcumb/page";
import { PageName } from "@/app/constants/general";
import Link from "next/link";
import React from "react";

const WorksDetailPage = async (props) => {
    const { idWork } = await props.params;
    const { data: detailWorkData, loading: detailWorkLoading } = await getDetailWorkById(idWork);

    const { data: categoryWorkData, loading: categoryWorkLoading } = await getCategoryWorksById();

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
                    <section className="scContentWork"></section>
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
