"use client";
import { getCategoryWorkSearch } from "@/app/actions/CategoryWorksAction";
import { getDetailCategoryWorksSearch } from "@/app/actions/DetailCategoryWorkAction";
import { getUserSearch } from "@/app/actions/UserActions";
import { getSearchWorks } from "@/app/actions/WorksActions";
import { adminTab } from "@/app/constants/general";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import AdminInfor from "./components/AdminInfor";
import AdminTabs from "./components/AdminTabs";
import { useRouter, useSearchParams } from "next/navigation";
import FormCreateAdmin from "@/app/components/FormCreateAdmin/page";
import ReduxProvider from "@/app/components/ReduxProvider/page";

const LIMIT_ITEM = 6;
const AdminPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchParamObject = Object.fromEntries(searchParams.entries());

    // active tabs
    const [isTabActive, setisTabActive] = useState(adminTab.users);
    const handleSetTabActive = (activeTab) => {
        setisTabActive(activeTab);
    };

    // modal create admin active
    const [isActiveCreateAdmin, setisActiveCreateAdmin] = useState(false);
    const handleSetModalAdmin = (active) => {
        setisActiveCreateAdmin(active);
    };

    // update search param
    const updateSearchParams = (objParam = {}) => {
        const newParamsObject = {
            ...objParam,
            pageSize: LIMIT_ITEM,
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
            switch (isTabActive) {
                case adminTab.users:
                    fetchingUserData(searchParamObject);
                    break;
                case adminTab.works:
                    fetchingWorksData(searchParamObject);
                    break;
                case adminTab.category:
                    fetchingCategoryData(searchParamObject);

                    break;
                case adminTab.detailCategory:
                    fetchingDetailCategoryWorksData(searchParamObject);
                    break;
            }
        }
    }, [searchParams, isTabActive]);

    // set page 1 when change active
    useEffect(() => {
        updateSearchParams({
            ...searchParamObject,
            pageSize: LIMIT_ITEM,
            pageIndex: 1,
            keyword: "",
        });
    }, [isTabActive]);

    // API user
    const {
        data: userData,
        isPending: userLoading,
        mutate: fetchingUserData,
    } = useMutation({
        mutationKey: ["userSearch"],
        mutationFn: (query) => getUserSearch(query),
    });
    // Works user
    const {
        data: worksData,
        isPending: worksLoading,
        mutate: fetchingWorksData,
    } = useMutation({
        mutationKey: ["worksSearch"],
        mutationFn: (query) => getSearchWorks(query),
    });

    // API Category Works
    const {
        data: categoryData,
        isPending: categoryLoading,
        mutate: fetchingCategoryData,
    } = useMutation({
        mutationKey: ["categorySearch"],
        mutationFn: (query) => getCategoryWorkSearch(query),
    });

    // API Detail Category Works
    const {
        data: DetailCategoryWorksData,
        isPending: DetailCategoryWorksLoading,
        mutate: fetchingDetailCategoryWorksData,
    } = useMutation({
        mutationKey: ["DetailCategorySearch"],
        mutationFn: (query) => getDetailCategoryWorksSearch(query),
    });

    // PAGINATION
    const handleChangePagination = (page, pageSize) => {
        updateSearchParams({ ...searchParamObject, pageIndex: page, pageSize: pageSize });
    };

    // handle get data for table
    const handleGetData = useMemo(() => {
        let data = null;
        let pageIndex = Number(searchParamObject?.pageIndex || 1);
        let pageSize = Number(searchParamObject?.pageSize || 1);
        let totalRow = 35;
        switch (isTabActive) {
            case adminTab.users:
                data = userData?.data || [];
                totalRow = userData?.totalRow || 35;
                break;
            case adminTab.works:
                data = worksData?.data || [];
                totalRow = worksData?.totalRow || 35;
                break;
            case adminTab.category:
                data = categoryData?.data || [];
                totalRow = categoryData?.totalRow || 35;
                break;
            case adminTab.detailCategory:
                data = DetailCategoryWorksData?.data || [];
                totalRow = DetailCategoryWorksData?.totalRow || 35;
                break;
        }
        return {
            data,
            pageIndex,
            pageSize,
            totalRow,
        };
    }, [isTabActive, userData, worksData, categoryData, DetailCategoryWorksData]);

    // props Admin Tab
    const propsAdminTab = { isTabActive, handleSetTabActive };

    // props Admin Infor
    const propsAdminInfor = {
        handleChangePagination,
        isTabActive,
        handleSetModalAdmin,
        ...handleGetData,
    };

    const propsFormAdmin = {
        isActiveCreateAdmin,
        handleSetModalAdmin,
    };

    return (
        <main className="mainAdmin pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)] relative">
            <div className="container py-8">
                {/* admin tabs */}
                <AdminTabs {...propsAdminTab} />
                {/* admin infor */}
                <ReduxProvider>
                    <AdminInfor {...propsAdminInfor} />
                </ReduxProvider>
            </div>
            <FormCreateAdmin {...propsFormAdmin} />
        </main>
    );
};

export default AdminPage;
