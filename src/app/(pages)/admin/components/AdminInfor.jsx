"use client";
import Button from "@/app/components/Button/page";
import InputSearch from "@/app/components/InputSearch/page";
import PaginationComponent from "@/app/components/PaginationComponent/page";
import { adminTab } from "@/app/constants/general";
import { handleResetMessage, handleSetMessage } from "@/app/store/reducers/messageReducer";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const AdminInfor = ({
    isTabActive,
    data,
    pageIndex,
    pageSize,
    totalRow,
    handleChangePagination,
    handleSetModalAdmin,
    handleSetActiveAdd,
    handleDeleteCategory,
    handleDeleteDetailCategory,
    handleDeleteWork,
    handleDeleteUser,
    handleSetActiveEdit,
    handleGetInforItemByid,
    handleSetAddAdmin,
}) => {
    const dispatch = useDispatch();
    const [titleManage, setTitleManage] = useState("");
    const [isMobile, setIsMobile] = useState(false);
    const [modalConfirmDelete, setModalConfirmDelete] = useState(false);
    const [idItemDelete, setIdItemDelete] = useState("");

    useEffect(() => {
        const handleSetMobile = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        handleSetMobile();
        window.addEventListener("resize", handleSetMobile);

        return () => {
            window.removeEventListener("resize", handleSetMobile);
        };
    }, []);

    // ================= DELETE HANDLE =================
    const showModalDelete = () => {
        setModalConfirmDelete(true);
    };
    const handleSetDeleteId = (id) => {
        setIdItemDelete(id);
    };
    const handleOkeDelete = () => {
        switch (isTabActive) {
            case adminTab.users:
                handleDeleteUser?.(idItemDelete);
                break;
            case adminTab.works:
                handleDeleteWork?.(idItemDelete);
                break;
            case adminTab.category:
                handleDeleteCategory?.(idItemDelete);
                break;
            case adminTab.detailCategory:
                handleDeleteDetailCategory?.(idItemDelete);
                break;
        }
        setModalConfirmDelete(false);
    };
    const handleCancelDelete = () => {
        setIdItemDelete("");
        setModalConfirmDelete(false);
    };

    useEffect(() => {
        if (!!isTabActive) {
            switch (isTabActive) {
                case adminTab.users:
                    setTitleManage("Manage users");
                    break;
                case adminTab.works:
                    setTitleManage(" Manage works");
                    break;
                case adminTab.category:
                    setTitleManage(" Manage job categories");
                    break;
                case adminTab.detailCategory:
                    setTitleManage("Manage services");
                    break;
            }
        }
    }, [isTabActive]);

    // form create admin
    const handleShowCreateAdmin = (e) => {
        e?.stopPropagation();
        e?.preventDefault();
        handleSetModalAdmin?.(true);
    };

    // form add admin
    const handleShowAddAdmin = (e) => {
        e?.stopPropagation();
        e?.preventDefault();
        handleSetAddAdmin?.(true);
    };

    // form add item
    const handleShowAddItem = (e) => {
        e?.stopPropagation();
        e?.preventDefault();
        handleSetActiveAdd?.(true);
    };

    // form edit item
    const handleShowEditItem = (e, id) => {
        e?.stopPropagation();
        e?.preventDefault();
        handleSetActiveEdit?.(true);
        handleGetInforItemByid?.(id);
    };

    return (
        <div className="adminInfor">
            <h2 className="adminInfor__title"> {titleManage || ""}</h2>
            <div className="flex justify-center flex-col gap-4">
                <a
                    href="#"
                    className="createAd"
                    onClick={(e) => {
                        handleShowCreateAdmin(e);
                    }}
                >
                    Create a new administrator
                </a>
                <a
                    href="#"
                    className="AddAdmin"
                    onClick={(e) => {
                        handleShowAddAdmin(e);
                    }}
                >
                    Change role user
                </a>
            </div>

            <div className="adminInfor__search">
                <InputSearch linkSubmit="adminSearch" />
            </div>
            <div className="adminInfor__search flex justify-end">
                <Button className="hover:opacity-70" onClick={handleShowAddItem}>
                    Add new
                </Button>
            </div>
            {/* ======= DESKTOP UI =======*/}
            {/* user */}
            {!isMobile && isTabActive === adminTab.users && (
                <table className="adminInfor__list" align="center">
                    <thead>
                        <tr className="adminInfor__list-head">
                            <th> ID User</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {!!data?.length > 0 &&
                            data?.map((item, index) => {
                                const { id, name, email, gender, phone, role } = item || {};
                                const genderUser = !!gender ? "male" : "female";

                                return (
                                    <tr className="adminInfor__list-row" key={id || index}>
                                        <td>{id || ""}</td>
                                        <td>{name || ""}</td>
                                        <td>{email || ""}</td>
                                        <td>{genderUser || ""}</td>
                                        <td>{phone || ""}</td>
                                        <td>{role || "USER"}</td>
                                        <td>
                                            <div className="actions flex gap-4 justify-end">
                                                <Button
                                                    onClick={(e) => {
                                                        handleShowEditItem(e, id);
                                                    }}
                                                    sizeBtn="small"
                                                    variant="blue"
                                                >
                                                    View
                                                </Button>
                                                <Button
                                                    sizeBtn="small"
                                                    variant="error"
                                                    onClick={(e) => {
                                                        e?.stopPropagation();
                                                        e?.preventDefault();
                                                        showModalDelete(true);
                                                        handleSetDeleteId(id);
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            )}
            {/* works */}
            {!isMobile && isTabActive === adminTab.works && (
                <table className="adminInfor__list" align="center">
                    <thead>
                        <tr className="adminInfor__list-head">
                            <th> ID Work</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rate</th>
                            <th>Star</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {!!data?.length > 0 &&
                            data?.map((item, index) => {
                                const { id, tenCongViec, giaTien, danhGia, saoCongViec } =
                                    item || {};
                                return (
                                    <tr className="adminInfor__list-row" key={id || index}>
                                        <td>{id || ""}</td>
                                        <td>{tenCongViec || ""}</td>
                                        <td>{`$${giaTien}` || ""}</td>
                                        <td>{danhGia || ""}</td>
                                        <td>{saoCongViec || ""}</td>
                                        <td>
                                            <div className="actions flex gap-4 justify-end">
                                                <Button
                                                    onClick={(e) => {
                                                        handleShowEditItem(e, id);
                                                    }}
                                                    sizeBtn="small"
                                                    variant="blue"
                                                >
                                                    View
                                                </Button>
                                                <Button
                                                    sizeBtn="small"
                                                    variant="error"
                                                    onClick={(e) => {
                                                        e?.stopPropagation();
                                                        e?.preventDefault();
                                                        showModalDelete(true);
                                                        handleSetDeleteId(id);
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            )}
            {/* category work */}
            {!isMobile && isTabActive === adminTab.category && (
                <table className="adminInfor__list" align="center">
                    <thead>
                        <tr className="adminInfor__list-head">
                            <th> ID Category Work</th>
                            <th>Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {!!data?.length > 0 &&
                            data?.map((item, index) => {
                                const { id, tenLoaiCongViec } = item || {};
                                return (
                                    <tr className="adminInfor__list-row" key={id || index}>
                                        <td>{id || ""}</td>
                                        <td>{tenLoaiCongViec || ""}</td>
                                        <td>
                                            <div className="actions flex gap-4 justify-end">
                                                <Button
                                                    onClick={(e) => {
                                                        handleShowEditItem(e, id);
                                                    }}
                                                    sizeBtn="small"
                                                    variant="blue"
                                                >
                                                    View
                                                </Button>
                                                <Button
                                                    sizeBtn="small"
                                                    variant="error"
                                                    onClick={(e) => {
                                                        e?.stopPropagation();
                                                        e?.preventDefault();
                                                        showModalDelete(true);
                                                        handleSetDeleteId(id);
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            )}

            {/* detail category */}
            {!isMobile && isTabActive === adminTab.detailCategory && (
                <table className="adminInfor__list" align="center">
                    <thead>
                        <tr className="adminInfor__list-head">
                            <th> ID Category Work</th>
                            <th>Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {!!data?.length > 0 &&
                            data?.map((item, index) => {
                                const { id, tenNhom } = item || {};
                                return (
                                    <tr className="adminInfor__list-row" key={id || index}>
                                        <td>{id || ""}</td>
                                        <td>{tenNhom || ""}</td>
                                        <td>
                                            <div className="actions flex gap-4 justify-end">
                                                <Button
                                                    onClick={(e) => {
                                                        handleShowEditItem(e, id);
                                                    }}
                                                    sizeBtn="small"
                                                    variant="blue"
                                                >
                                                    View
                                                </Button>
                                                <Button
                                                    sizeBtn="small"
                                                    variant="error"
                                                    onClick={(e) => {
                                                        e?.stopPropagation();
                                                        e?.preventDefault();
                                                        showModalDelete(true);
                                                        handleSetDeleteId(id);
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            )}

            {/*======= MOBILE UI =======*/}
            {/* user */}
            {!!isMobile && isTabActive === adminTab.users && (
                <div className="tablesInfo">
                    {!!data?.length > 0 &&
                        data?.map((item, index) => {
                            const { id, name, email, gender, phone, role } = item || {};
                            const genderUser = !!gender ? "male" : "female";
                            return (
                                <table
                                    className="adminInfor__list mobile"
                                    key={id || index}
                                    align="center"
                                >
                                    <tbody>
                                        <tr className="adminInfor__list-row">
                                            <th colSpan={2} className="title">
                                                {`ID User ${id || ""}`}
                                            </th>
                                        </tr>
                                        <tr className="adminInfor__list-row">
                                            <th className="title">Name</th>
                                            <td className="item">{name || ""}</td>
                                        </tr>
                                        <tr className="adminInfor__list-row">
                                            <th className="title">Email</th>
                                            <td className="item">{email || ""}</td>
                                        </tr>
                                        <tr className="adminInfor__list-row">
                                            <th className="title">Gender</th>
                                            <td className="item">{genderUser}</td>
                                        </tr>
                                        <tr className="adminInfor__list-row">
                                            <th className="title">Phone</th>
                                            <td className="item">{phone || ""}</td>
                                        </tr>
                                        <tr className="adminInfor__list-row">
                                            <th className="title">Role</th>
                                            <td className="item">{role || USER}</td>
                                        </tr>
                                        <tr className="adminInfor__list-row">
                                            <td colSpan={2} className="action">
                                                <div className="actions flex gap-4 justify-end flex-wrap">
                                                    <Button
                                                        sizeBtn="small"
                                                        onClick={(e) => {
                                                            handleShowEditItem(e, id);
                                                        }}
                                                        variant="blue"
                                                    >
                                                        onClick=
                                                        {(e) => {
                                                            handleShowEditItem(e, id);
                                                        }}{" "}
                                                        View
                                                    </Button>
                                                    <Button
                                                        sizeBtn="small"
                                                        variant="error"
                                                        onClick={(e) => {
                                                            e?.stopPropagation();
                                                            e?.preventDefault();
                                                            showModalDelete(true);
                                                            handleSetDeleteId(id);
                                                        }}
                                                    >
                                                        Delete
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            );
                        })}
                </div>
            )}

            {/* works */}
            {!!isMobile && isTabActive === adminTab.works && (
                <div className="tablesInfo">
                    {!!data?.length > 0 &&
                        data?.map((item, index) => {
                            const { id, tenCongViec, giaTien, danhGia, saoCongViec } = item || {};
                            return (
                                <table
                                    className="adminInfor__list mobile"
                                    key={id || index}
                                    align="center"
                                >
                                    <tbody>
                                        <tr className="adminInfor__list-row">
                                            <th colSpan={2} className="title">
                                                {`ID Work ${id || ""}`}
                                            </th>
                                        </tr>
                                        <tr className="adminInfor__list-row">
                                            <th className="title">Name</th>
                                            <td className="item">{tenCongViec || ""}</td>
                                        </tr>
                                        <tr className="adminInfor__list-row">
                                            <th className="title">Price</th>
                                            <td className="item">{`$${giaTien}` || ""}</td>
                                        </tr>
                                        <tr className="adminInfor__list-row">
                                            <th className="title">Rate</th>
                                            <td className="item">{danhGia || ""}</td>
                                        </tr>
                                        <tr className="adminInfor__list-row">
                                            <th className="title">Star</th>
                                            <td className="item">{saoCongViec || ""}</td>
                                        </tr>
                                        <tr className="adminInfor__list-row">
                                            <td colSpan={2} className="action">
                                                <div className="actions flex gap-4 justify-end flex-wrap">
                                                    <Button
                                                        onClick={(e) => {
                                                            handleShowEditItem(e, id);
                                                        }}
                                                        sizeBtn="small"
                                                        variant="blue"
                                                    >
                                                        View
                                                    </Button>
                                                    <Button
                                                        sizeBtn="small"
                                                        variant="error"
                                                        onClick={(e) => {
                                                            e?.stopPropagation();
                                                            e?.preventDefault();
                                                            showModalDelete(true);
                                                            handleSetDeleteId(id);
                                                        }}
                                                    >
                                                        Delete
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            );
                        })}
                </div>
            )}
            {/*  category work  */}
            {!!isMobile && isTabActive === adminTab.category && (
                <div className="tablesInfo">
                    {!!data?.length > 0 &&
                        data?.map((item, index) => {
                            const { id, tenLoaiCongViec } = item || {};
                            return (
                                <table
                                    className="adminInfor__list mobile"
                                    key={id || index}
                                    align="center"
                                >
                                    <tbody>
                                        <tr className="adminInfor__list-row">
                                            <th colSpan={2} className="title">
                                                {`ID CATEGORY ${id || ""}`}
                                            </th>
                                        </tr>
                                        <tr className="adminInfor__list-row">
                                            <th className="title">Name</th>
                                            <td className="item">{tenLoaiCongViec || ""}</td>
                                        </tr>
                                        <tr className="adminInfor__list-row">
                                            <td colSpan={2} className="action">
                                                <div className="actions flex gap-4 justify-end flex-wrap">
                                                    <Button
                                                        onClick={(e) => {
                                                            handleShowEditItem(e, id);
                                                        }}
                                                        sizeBtn="small"
                                                        variant="blue"
                                                    >
                                                        View
                                                    </Button>
                                                    <Button
                                                        sizeBtn="small"
                                                        variant="error"
                                                        onClick={(e) => {
                                                            e?.stopPropagation();
                                                            e?.preventDefault();
                                                            showModalDelete(true);
                                                            handleSetDeleteId(id);
                                                        }}
                                                    >
                                                        Delete
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            );
                        })}
                </div>
            )}
            {/* detail category work  */}
            {!!isMobile && isTabActive === adminTab.detailCategory && (
                <div className="tablesInfo">
                    {!!data?.length > 0 &&
                        data?.map((item, index) => {
                            const { id, tenNhom } = item || {};
                            return (
                                <table
                                    className="adminInfor__list mobile"
                                    key={id || index}
                                    align="center"
                                >
                                    <tbody>
                                        <tr className="adminInfor__list-row">
                                            <th colSpan={2} className="title">
                                                {`ID SERVICES ${id || ""}`}
                                            </th>
                                        </tr>
                                        <tr className="adminInfor__list-row">
                                            <th className="title">Name</th>
                                            <td className="item">{tenNhom || ""}</td>
                                        </tr>
                                        <tr className="adminInfor__list-row">
                                            <td colSpan={2} className="action">
                                                <div className="actions flex gap-4 justify-end flex-wrap">
                                                    <Button
                                                        onClick={(e) => {
                                                            handleShowEditItem(e, id);
                                                        }}
                                                        sizeBtn="small"
                                                        variant="blue"
                                                    >
                                                        View
                                                    </Button>
                                                    <Button
                                                        sizeBtn="small"
                                                        variant="error"
                                                        onClick={(e) => {
                                                            e?.stopPropagation();
                                                            e?.preventDefault();
                                                            showModalDelete(true);
                                                            handleSetDeleteId(id);
                                                        }}
                                                    >
                                                        Delete
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            );
                        })}
                </div>
            )}

            <div className="adminInfor__pagi">
                <PaginationComponent
                    defaultCurrent={pageIndex}
                    total={totalRow}
                    pageSize={pageSize}
                    handleChangePagination={handleChangePagination}
                />
            </div>

            <Modal
                title="Confirm Delete"
                open={modalConfirmDelete}
                onOk={handleOkeDelete}
                onCancel={handleCancelDelete}
                okText="OK"
                cancelText="Cancel"
            >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <ExclamationCircleOutlined
                        style={{ color: "red", fontSize: "24px", marginRight: "10px" }}
                    />
                    <span style={{ color: "red", fontWeight: "bold" }}>
                        Are you sure you want to delete this item? This action cannot be undone.
                    </span>
                </div>
            </Modal>
        </div>
    );
};

export default AdminInfor;
