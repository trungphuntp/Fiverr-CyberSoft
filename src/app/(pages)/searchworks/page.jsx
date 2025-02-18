"use client";
import BreadcumbComponent from "@/app/components/Breadcumb/page";
import Link from "next/link";
import ScToolkit from "./components/scToolkit";
import { getSearchWorks } from "@/app/actions/WorksActions";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import Button from "@/app/components/Button/page";
import ScListworks from "./components/scListworks";

const LIMIT_PRODUCT = 8;
const SearchPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchParamObject = Object.fromEntries(searchParams.entries());

    const {
        data: dataGetSearchWorks,
        error,
        isPending: loadingGetSearchWorks,
        mutate: fetchingGetSearchWorks,
    } = useMutation({
        mutationKey: ["searchWorks"],
        mutationFn: (query) => getSearchWorks(query),
    });

    // update search param
    const updateSearchParams = (objParam = {}) => {
        const newParamsObject = {
            ...objParam,
            pageSize: LIMIT_PRODUCT,
            pageIndex: !!objParam?.pageIndex ? objParam?.pageIndex : 1,
        };
        const newSearchParams = new URLSearchParams(newParamsObject).toString();
        router.push(`?${newSearchParams}`);
    };

    // fetch api when search param change
    useEffect(() => {
        updateSearchParams(searchParamObject);
        if (!!searchParamObject) {
            fetchingGetSearchWorks(searchParamObject);
        }
    }, [searchParams]);

    const propsListWorks = {
        works: dataGetSearchWorks?.data || [],
        loading: loadingGetSearchWorks,
    };

    return (
        <main className="mainWorks pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)] relative">
            {/* breakcumb */}
            <BreadcumbComponent>
                <BreadcumbComponent.item>
                    <Link href={"/"}>{"Home"}</Link>
                </BreadcumbComponent.item>
                <BreadcumbComponent.item></BreadcumbComponent.item>
                <BreadcumbComponent.item isActive={true}>searchworks</BreadcumbComponent.item>
            </BreadcumbComponent>
            <div className="container">
                <h1 className="heading mt-8 max-md:text-center">Results for </h1>
            </div>
            <ScToolkit />
            <ScListworks {...propsListWorks} />
        </main>
    );
};

export default SearchPage;
