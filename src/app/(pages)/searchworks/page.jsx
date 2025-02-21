"use client";
import Link from "next/link";
import { getSearchWorks } from "@/app/actions/WorksActions";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import BreadcumbComponent from "@/app/components/Breadcumb/page";
import ComponentLoading from "@/app/components/Loading/page";

const ScToolkit = dynamic(() => import("./components/scToolkit"), {
    suspense: true,
});
const ScListworks = dynamic(() => import("./components/scListworks"), {
    suspense: true,
});

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
            keyword: !!objParam?.keyword ? objParam?.keyword : "",
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

    // PAGINATION
    const handleChangePagination = (page, pageSize) => {
        updateSearchParams({ ...searchParamObject, pageIndex: page, pageSize: pageSize });
    };

    const propsListWorks = {
        works: dataGetSearchWorks?.data || [],
        pageIndex: dataGetSearchWorks?.pageIndex || 1,
        pageSize: dataGetSearchWorks?.pageSize || LIMIT_PRODUCT,
        totalRow: dataGetSearchWorks?.totalRow || 35,
        loading: loadingGetSearchWorks,
        handleChangePagination,
    };
    return (
        <main className="mainSearchWorks pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)] relative">
            <BreadcumbComponent>
                <BreadcumbComponent.item>
                    <Link href="/">Home</Link>
                </BreadcumbComponent.item>
                <BreadcumbComponent.item isActive={true}>
                    {`Results for "${searchParamObject?.keyword || ""}"`}
                </BreadcumbComponent.item>
            </BreadcumbComponent>

            <div className="container">
                <h1 className="heading mt-8 max-md:text-center">
                    {`Results for "${searchParamObject?.keyword || ""}"`}
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

export default SearchPage;
