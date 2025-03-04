"use client";
import {
    deleteCategoryWork,
    getCategoryWorksById,
    getCategoryWorkSearch,
} from "@/app/actions/CategoryWorksAction";
import {
    deleteDetailCategoryWorksById,
    getDetailCategoryWorksById,
    getDetailCategoryWorksSearch,
} from "@/app/actions/DetailCategoryWorkAction";
import { deleteUserById, getUserById, getUserSearch } from "@/app/actions/UserActions";
import { deleteWorksById, getSearchWorks, getWorksById } from "@/app/actions/WorksActions";
import FormCreateAdmin from "@/app/components/FormCreateAdmin/page";
import FormEditAdmin from "@/app/components/FormEditAdmin/page";
import PopupAddItemAdmin from "@/app/components/PopupAddItemAdmin/page";
import { adminTab } from "@/app/constants/general";
import { handleSetMessage } from "@/app/store/reducers/messageReducer";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminInfor from "./components/AdminInfor";
import AdminTabs from "./components/AdminTabs";
import FormAddAdmin from "@/app/components/FormAddAdmin/page";

const LIMIT_ITEM = 6;
const AdminPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchParamObject = Object.fromEntries(searchParams.entries());
    const { profile } = useSelector((state) => state.profile);

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

    // modal add admin active
    const [isActiveAddAdmin, setisActiveAddAdmin] = useState(false);
    const handleSetAddAdmin = (active) => {
        setisActiveAddAdmin(active);
    };

    // modal add new item
    const [isActiveAdd, setIsActiveAdd] = useState(false);
    const handleSetActiveAdd = (active) => {
        setIsActiveAdd(active);
    };

    // modal edit new item
    const [isActiveEdit, setIsActiveEdit] = useState(false);
    const handleSetActiveEdit = (active) => {
        setIsActiveEdit(active);
    };

    // data edit by id
    const [dataEdit, setDataEdit] = useState(null);
    const handleSetDataEdit = (data) => {
        setDataEdit(data);
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
    // ============= fetch api when search param change =============
    const handleFetchingAPI = () => {
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
    };
    useEffect(() => {
        handleFetchingAPI();
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

    // API ALL CATEGORY
    const {
        data: allCategoryData,
        isPending: allCategoryDataLoading,
        mutate: fetchingAllCategoryData,
    } = useMutation({
        mutationKey: ["AllCategory"],
        mutationFn: () => getCategoryWorksById(),
    });
    useEffect(() => {
        if (isTabActive === adminTab.detailCategory) {
            fetchingAllCategoryData();
        }
    }, [isTabActive === adminTab.detailCategory]);

    // API ALL DETAIL CATEGORY
    const {
        data: allDetailCategoryData,
        isPending: allDetailCategoryDataLoading,
        mutate: fetchingAllDetailCategoryData,
    } = useMutation({
        mutationKey: ["AllDetailCategory"],
        mutationFn: () => getDetailCategoryWorksById(),
    });
    useEffect(() => {
        if (isTabActive === adminTab.works) {
            fetchingAllDetailCategoryData();
        }
    }, [isTabActive === adminTab.works]);
    // =========================== handle DELETE ===========================
    // delete category
    const handleDeleteCategory = async (id) => {
        if (!!id) {
            const res = await deleteCategoryWork(id);
            if (res?.statusCode === 200) {
                dispatch(handleSetMessage(["Delete Item Successfully!", "success"]));
                handleFetchingAPI();
            }
        }
    };
    // delete detail category
    const handleDeleteDetailCategory = async (id) => {
        if (!!id) {
            const res = await deleteDetailCategoryWorksById(id);
            if (res?.statusCode === 200) {
                dispatch(handleSetMessage(["Delete Item Successfully!", "success"]));
                handleFetchingAPI();
            }
        }
    };
    // delete work
    const handleDeleteWork = async (id) => {
        if (!!id) {
            const res = await deleteWorksById(id);
            if (res?.statusCode === 200) {
                dispatch(handleSetMessage(["Delete Item Successfully!", "success"]));
                handleFetchingAPI();
            }
        }
    };
    // delete user
    const handleDeleteUser = async (id) => {
        if (!!id) {
            const res = await deleteUserById(id);
            if (res?.statusCode === 200) {
                dispatch(handleSetMessage(["Delete Item Successfully!", "success"]));
                handleFetchingAPI();
            }
        }
    };
    // =========================== handle EDIT ===========================
    const handleGetInforItemByid = async (id) => {
        if (!!isTabActive && !!id) {
            switch (isTabActive) {
                case adminTab.users:
                    const resUser = await getUserById(id);
                    handleSetDataEdit(resUser);
                    break;
                case adminTab.works:
                    const resWork = await getWorksById(id);
                    // maChiTietLoaiCongViec
                    const AllDetailCate = (await getDetailCategoryWorksById()) || [];
                    if (!!AllDetailCate?.length > 0 && !!resWork?.maChiTietLoaiCongViec) {
                        const parentItemDetailCategory = AllDetailCate?.filter((detailCate) => {
                            let isParent = false;
                            if (!!detailCate?.dsChiTietLoai?.length > 0) {
                                detailCate?.dsChiTietLoai?.forEach((itemDetailCate) => {
                                    if (itemDetailCate?.id === resWork?.maChiTietLoaiCongViec) {
                                        isParent = true;
                                    }
                                });
                            }
                            if (!!isParent) {
                                return detailCate;
                            }
                        });

                        handleSetDataEdit({
                            ...resWork,
                            chaCacLoaiCongViec: parentItemDetailCategory || [],
                        });
                    }

                    break;
                case adminTab.category:
                    const resCategory = await getCategoryWorksById(id);
                    handleSetDataEdit(resCategory);

                    break;
                case adminTab.detailCategory:
                    const resDetail = await getDetailCategoryWorksById(id);
                    handleSetDataEdit(resDetail);
                    break;
            }
        }
    };

    // =========================== PAGINATION ===========================
    const handleChangePagination = (page, pageSize) => {
        updateSearchParams({ ...searchParamObject, pageIndex: page, pageSize: pageSize });
    };
    //=========================== handle get data for table ===========================
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
        handleSetActiveAdd,
        handleDeleteCategory,
        handleDeleteDetailCategory,
        handleDeleteWork,
        handleDeleteUser,
        handleSetActiveEdit,
        handleGetInforItemByid,
        handleSetAddAdmin,
        ...handleGetData,
    };

    // form new admin props
    const propsFormCreateAdmin = {
        isActiveCreateAdmin,
        handleSetModalAdmin,
        handleFetchingAPI,
    };

    // form new admin props
    const propsFormAddAdmin = {
        isActiveAddAdmin,
        handleSetAddAdmin,
        handleFetchingAPI,
    };

    //  add form props
    const propsAddForm = {
        isTabActive,
        handleSetActiveAdd,
        isActiveAdd,
        handleFetchingAPI,
        dataCategory: allCategoryData,
        dataDetailCategory: allDetailCategoryData,
    };

    //  edit form props
    const propsEditForm = {
        isTabActive,
        handleSetActiveEdit,
        isActiveEdit,
        handleFetchingAPI,
        dataCategory: allCategoryData,
        dataDetailCategory: allDetailCategoryData,
        dataEdit,
    };

    return (
        <main className="mainAdmin pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)] relative">
            {profile?.role === "ADMIN" && (
                <>
                    <div className="container py-8">
                        {/* admin tabs */}
                        <AdminTabs {...propsAdminTab} />
                        {/* admin infor */}
                        <AdminInfor {...propsAdminInfor} />
                    </div>
                    <FormAddAdmin {...propsFormAddAdmin} />
                    <FormCreateAdmin {...propsFormCreateAdmin} />
                    <PopupAddItemAdmin {...propsAddForm} />
                    <FormEditAdmin {...propsEditForm} />
                </>
            )}
        </main>
    );
};

export default AdminPage;
