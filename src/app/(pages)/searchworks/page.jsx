"use client";
import Link from "next/link";
import { getSearchWorks } from "@/app/actions/WorksActions";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import ScToolkit from "./components/scToolkit";
import ScListworks from "./components/scListworks";
import BreadcumbComponent from "@/app/components/Breadcumb/page";

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
        <main classname="mainWorks pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)] relative">
            <BreadcumbComponent>
                <BreadcumbComponent.Item>
                    <Link href="/">Home</Link>
                </BreadcumbComponent.Item>
                <BreadcumbComponent.Item isActive={true}>
                    {`Results for "${searchParamObject?.keyword || ""}"`}
                </BreadcumbComponent.Item>
            </BreadcumbComponent>
            <div classname="container">
                <h1 classname="heading mt-8 max-md:text-center">
                    {`Results for "${searchParamObject?.keyword || ""}`}
                </h1>
            </div>
            <ScToolkit />
            <ScListworks {...propsListWorks} />
        </main>
    );
};

export default SearchPage;
