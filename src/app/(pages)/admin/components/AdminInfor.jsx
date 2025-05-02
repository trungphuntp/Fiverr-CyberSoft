"use client";
import Button from "@/app/components/Button/page";
import CardPerformance from "@/app/components/CardPerformance/page";
import HeaderAdmin from "@/app/components/HeaderAdmin/page";
import IconColor from "@/app/components/IconColor/page";
import InputSearch from "@/app/components/InputSearch/page";
import PaginationComponent from "@/app/components/PaginationComponent/page";
import { adminTab } from "@/app/constants/general";
import {
  BulbOutlined,
  CarryOutOutlined,
  ExclamationCircleOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import { useEffect, useMemo, useState } from "react";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = ["#6200EA", "#26A69A", "#9C27B0", "#FFBB28"];

const AdminInfor = ({
  isTabActive,
  data,
  pageIndex,
  pageSize,
  totalRow,
  handleChangePagination,
  handleSetActiveAdd,
  handleDeleteCategory,
  handleDeleteDetailCategory,
  handleDeleteWork,
  handleDeleteUser,
  handleSetActiveEdit,
  handleGetInforItemByid,
  totalUser,
  totalWork,
  totalCash,
}) => {
  const [titleManage, setTitleManage] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [modalConfirmDelete, setModalConfirmDelete] = useState(false);
  const [idItemDelete, setIdItemDelete] = useState("");

  const dataLineChart = useMemo(() => {
    let result = [];
    switch (isTabActive) {
      case adminTab.works:
        result = [
          { name: "January", cash: 1 },
          { name: "February", cash: 2 },
          { name: "March", cash: 3 },
          { name: "April", cash: 5 },
          { name: "May", cash: 8 },
          { name: "June", cash: 6 },
          { name: "July", cash: 10 },
          { name: "August", cash: 8 },
          { name: "September", cash: 9 },
          { name: "October", cash: 7 },
          { name: "November", cash: 10 },
          { name: "December", cash: 12 },
        ];
        break;
      case adminTab.category:
        result = [
          { name: "January", cash: 1 },
          { name: "February", cash: 2 },
          { name: "March", cash: 3 },
          { name: "April", cash: 5 },
          { name: "May", cash: 8 },
          { name: "June", cash: 6 },
          { name: "July", cash: 10 },
          { name: "August", cash: 8 },
          { name: "September", cash: 9 },
          { name: "October", cash: 7 },
          { name: "November", cash: 10 },
          { name: "December", cash: 12 },
        ];
        break;
      case adminTab.detailCategory:
        result = [
          { name: "January", cash: 7 },
          { name: "February", cash: 5 },
          { name: "March", cash: 3 },
          { name: "April", cash: 5 },
          { name: "May", cash: 8 },
          { name: "June", cash: 5 },
          { name: "July", cash: 6 },
          { name: "August", cash: 8 },
          { name: "September", cash: 9 },
          { name: "October", cash: 7 },
          { name: "November", cash: 8 },
          { name: "December", cash: 10 },
        ];
        break;
      case adminTab.users:
        result = [
          { name: "January", cash: 9 },
          { name: "February", cash: 5 },
          { name: "March", cash: 4 },
          { name: "April", cash: 5 },
          { name: "May", cash: 6 },
          { name: "June", cash: 2 },
          { name: "July", cash: 4 },
          { name: "August", cash: 2 },
          { name: "September", cash: 5 },
          { name: "October", cash: 6 },
          { name: "November", cash: 10 },
          { name: "December", cash: 12 },
        ];
        break;
    }

    return result;
  }, [isTabActive]);

  const dataCircleChart = useMemo(() => {
    let result = [];
    switch (isTabActive) {
      case adminTab.works:
        result = [
          { name: "Alpha", value: 500 },
          { name: "Beta", value: 300 },
          { name: "Gramma", value: 200 },
          { name: "Delta", value: 200 },
        ];
        break;
      case adminTab.category:
        result = [
          { name: "Alpha", value: 400 },
          { name: "Beta", value: 200 },
          { name: "Gramma", value: 200 },
          { name: "Delta", value: 300 },
        ];
        break;
      case adminTab.detailCategory:
        result = [
          { name: "Alpha", value: 600 },
          { name: "Beta", value: 500 },
          { name: "Gramma", value: 100 },
          { name: "Delta", value: 100 },
        ];
        break;
      case adminTab.users:
        result = [
          { name: "Alpha", value: 200 },
          { name: "Beta", value: 300 },
          { name: "Gramma", value: 400 },
          { name: "Delta", value: 500 },
        ];
        break;
    }
    return result;
  }, [isTabActive]);

  const dataColumn = useMemo(() => {
    let result = [];
    switch (isTabActive) {
      case adminTab.works:
        result = [
          {
            mon: "January",
            LastYear: 15000,
            ThisYear: 20000,
          },
          {
            mon: "February",
            LastYear: 20000,
            ThisYear: 25000,
          },
          {
            mon: "March",
            LastYear: 25000,
            ThisYear: 30000,
          },
          {
            mon: "April",
            LastYear: 35000,
            ThisYear: 40000,
          },
          {
            mon: "May",
            LastYear: 30000,
            ThisYear: 40000,
          },
          {
            mon: "June",
            LastYear: 45000,
            ThisYear: 50000,
          },
          {
            mon: "July",
            LastYear: 55000,
            ThisYear: 60000,
          },
        ];
        break;
      case adminTab.category:
        result = [
          {
            mon: "January",
            LastYear: 25000,
            ThisYear: 20000,
          },
          {
            mon: "February",
            LastYear: 30000,
            ThisYear: 75000,
          },
          {
            mon: "March",
            LastYear: 45000,
            ThisYear: 60000,
          },
          {
            mon: "April",
            LastYear: 55000,
            ThisYear: 40000,
          },
          {
            mon: "May",
            LastYear: 20000,
            ThisYear: 30000,
          },
          {
            mon: "June",
            LastYear: 45000,
            ThisYear: 50000,
          },
          {
            mon: "July",
            LastYear: 55000,
            ThisYear: 60000,
          },
        ];
        break;
      case adminTab.detailCategory:
        result = [
          {
            mon: "January",
            LastYear: 65000,
            ThisYear: 50000,
          },
          {
            mon: "February",
            LastYear: 50000,
            ThisYear: 35000,
          },
          {
            mon: "March",
            LastYear: 45000,
            ThisYear: 70000,
          },
          {
            mon: "April",
            LastYear: 35000,
            ThisYear: 60000,
          },
          {
            mon: "May",
            LastYear: 20000,
            ThisYear: 40000,
          },
          {
            mon: "June",
            LastYear: 45000,
            ThisYear: 60000,
          },
          {
            mon: "July",
            LastYear: 25000,
            ThisYear: 70000,
          },
        ];

        break;
      case adminTab.users:
        result = [
          {
            mon: "January",
            LastYear: 75000,
            ThisYear: 60000,
          },
          {
            mon: "February",
            LastYear: 50000,
            ThisYear: 35000,
          },
          {
            mon: "March",
            LastYear: 45000,
            ThisYear: 50000,
          },
          {
            mon: "April",
            LastYear: 35000,
            ThisYear: 60000,
          },
          {
            mon: "May",
            LastYear: 50000,
            ThisYear: 45000,
          },
          {
            mon: "June",
            LastYear: 25000,
            ThisYear: 34000,
          },
          {
            mon: "July",
            LastYear: 35000,
            ThisYear: 80000,
          },
        ];
        break;
    }
    return result;
  }, [isTabActive]);

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
          setTitleManage("users");
          break;
        case adminTab.works:
          setTitleManage("works");
          break;
        case adminTab.category:
          setTitleManage("job categories");
          break;
        case adminTab.detailCategory:
          setTitleManage("services");
          break;
      }
    }
  }, [isTabActive]);

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
    <div className="leftAdmin ml-auto pb-10">
      {/* section admin infor */}
      <section className="adminInfor">
        <HeaderAdmin>{`Manage ${titleManage} information`}</HeaderAdmin>
        <div className="adminInfor__search">
          <InputSearch linkSubmit="adminSearch" />
        </div>

        <div className="adminInfor__actions flex justify-end gap-4 flex-wrap max-md:justify-start mt-[30px]">
          {/* actions head */}
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
                <th>#</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {!!data?.length > 0 &&
                data?.map((item, index) => {
                  const { id, name, email, gender, phone, role, avatar } =
                    item || {};
                  const genderUser = !!gender ? "male" : "female";
                  return (
                    <tr className="adminInfor__list-row" key={id || index}>
                      <td>{id || ""}</td>
                      <td>
                        <div className="avatarUser">
                          <img
                            src={avatar || "/default-avatar.jpg"}
                            alt="avatar user"
                          />
                        </div>
                      </td>
                      <td>{name || ""}</td>
                      <td>{email || ""}</td>
                      <td>
                        <p
                          className={`tagAdmin ${
                            genderUser === "male"
                              ? "maleGender"
                              : "femaleGender"
                          }`}
                        >
                          {genderUser || "female"}
                        </p>
                      </td>
                      <td>
                        <p
                          className={`tagAdmin ${
                            role === "USER" ? "userrole" : "adminrole"
                          }`}
                        >
                          {role || "USER"}
                        </p>
                      </td>
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
                <th>#</th>
                <th>Thumb</th>
                <th>Name</th>
                <th>Price</th>
                <th>Rate</th>
                <th>Star</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {!!data?.length > 0 &&
                data?.map((item, index) => {
                  const {
                    id,
                    tenCongViec,
                    giaTien,
                    danhGia,
                    saoCongViec,
                    hinhAnh,
                  } = item || {};
                  return (
                    <tr className="adminInfor__list-row" key={id || index}>
                      <td>{id || ""}</td>
                      <td>
                        <div className="thumbItem">
                          <img
                            src={hinhAnh || "/default_img.jpg"}
                            alt="thunb item"
                          />
                        </div>
                      </td>
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
                <th>#</th>
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
                <th>#</th>
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
                const { id, name, email, gender, phone, role, avatar } =
                  item || {};
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
                          {`# ${id || ""}`}
                        </th>
                      </tr>
                      <tr className="adminInfor__list-row">
                        <th colSpan={2}>
                          <div className="h-[100px] w-[100px] mx-auto overflow-hidden rounded-full">
                            <img
                              className="h-full w-full object-cover"
                              src={avatar || "default-avatar.jpg"}
                              alt="avatar user"
                            />
                          </div>
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
                        <td>
                          <p
                            className={`tagAdmin ${
                              genderUser === "male"
                                ? "maleGender"
                                : "femaleGender"
                            }`}
                          >
                            {genderUser || "female"}
                          </p>
                        </td>
                      </tr>
                      <tr className="adminInfor__list-row">
                        <th className="title">Phone</th>
                        <td className="item">{phone || ""}</td>
                      </tr>
                      <tr className="adminInfor__list-row">
                        <th className="title">Role</th>
                        <td className="item">
                          <p
                            className={`tagAdmin ${
                              role === "USER" ? "userrole" : "adminrole"
                            }`}
                          >
                            {role || "USER"}
                          </p>
                        </td>
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
                const { id, tenCongViec, giaTien, danhGia, saoCongViec } =
                  item || {};
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
              Are you sure you want to delete this item? This action cannot be
              undone.
            </span>
          </div>
        </Modal>
      </section>
      {/* section performance*/}
      <section className="performanceInfor mt-16">
        <HeaderAdmin>performance information</HeaderAdmin>
        <div className="flex justify-between flex-wrap gap-[12px] max-lg:justify-center">
          <CardPerformance
            icon={() => {
              return (
                <IconColor bgColor="#DD5600">
                  <TeamOutlined />
                </IconColor>
              );
            }}
            title={"Total Users"}
            numberData={`${totalUser}M`}
            trend="increase"
            trendPercent={"27.1%"}
          />
          <CardPerformance
            icon={() => {
              return (
                <IconColor bgColor="#CC3238">
                  <CarryOutOutlined />
                </IconColor>
              );
            }}
            title={"Total Jobs"}
            numberData={`${totalWork}00`}
            trend="decrease"
            trendPercent={"14.1%"}
          />
          <CardPerformance
            icon={() => {
              return (
                <IconColor>
                  <BulbOutlined />
                </IconColor>
              );
            }}
            title={"Total Cash"}
            numberData={`${totalCash}00$`}
            trend="increase"
            trendPercent={"34.1%"}
          />
        </div>
      </section>
      {/* section line chart */}(
      <section className="adminChart mt-16">
        <HeaderAdmin>Sales rate</HeaderAdmin>
        <div className="py-10">
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={dataLineChart}>
              {/* màu gradient */}
              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff7300" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#ff7300" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" scale={"point"} />
              <YAxis unit="%" />
              <Tooltip />
              {/* Area*/}
              <Area
                unit={"%"}
                type="monotone"
                dataKey="cash"
                stroke="#ff7300"
                fill="url(#colorPv)" // Use gradient here
              />
              {/* Line */}
              <Line
                unit={"%"}
                type="monotone"
                dataKey="cash"
                stroke="#F7B924"
                strokeWidth={3}
                dot={{
                  r: 4,
                  stroke: "#ff7300",
                  strokeWidth: 2,
                  fill: "#fff",
                }}
                activeDot={{ r: 6 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </section>
      ){/* section double chart column */}
      <section className="doubleChart  pt-24">
        <div className="flex mt-20 gap-5 max-lg:flex-col max-lg:gap-[42px]">
          <div className={"flex-[2]"}>
            <HeaderAdmin> Revenue Breakdown</HeaderAdmin>
            {/* 2 cột */}
            <ResponsiveContainer
              width="100%"
              height={400}
              className={"mt-[32px]"}
            >
              <BarChart
                data={dataColumn}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mon" />
                <YAxis unit="$" />
                <Tooltip />
                <Legend />
                <Bar dataKey="LastYear" fill="#B07FF4" name="Last Year" />
                <Bar dataKey="ThisYear" fill="#6200EA" name="This Year" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className={"flex-1"}>
            <HeaderAdmin>Segments</HeaderAdmin>
            {/* tròn */}
            <ResponsiveContainer
              width="100%"
              height={300}
              className={"mt-[32px]"}
            >
              <PieChart>
                <Tooltip />
                <Legend />
                <Pie
                  data={dataCircleChart}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminInfor;
