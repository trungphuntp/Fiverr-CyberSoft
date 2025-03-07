"use client";
import { putCategoryWork } from "@/app/actions/CategoryWorksAction";
import { getDetailCategoryWorksById } from "@/app/actions/DetailCategoryWorkAction";
import { putUserById } from "@/app/actions/UserActions";
import { putWorksById, updateThumbWork } from "@/app/actions/WorksActions";
import { DATE_FORMAT, REGEX } from "@/app/constants/format";
import { adminTab } from "@/app/constants/general";
import { handleResetMessage, handleSetMessage } from "@/app/store/reducers/messageReducer";
import { formatDateDayjs } from "@/app/utils/format";
import { DatePicker, Form, Input, Modal, Radio, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import moment from "moment";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/page";

const FormEditAdmin = ({
    isActiveEdit,
    handleSetActiveEdit,
    isTabActive,
    dataCategory,
    dataDetailCategory,
    handleFetchingAPI,
    dataEdit,
}) => {
    const dispatch = useDispatch();
    const formRef = useRef(null);
    const [form] = Form.useForm();
    const { profile } = useSelector((state) => state.profile);

    const [valueCategory, setValueCategory] = useState();
    const [valueDetailCategory, setValueDetailCategory] = useState();
    const [itemDetailCategory, setItemDetailCategory] = useState();

    // IMG FILE
    const [linkThumbnailWorks, setLinkThumbnailWorks] = useState(null);
    const [linkThumbnailDetailCategory, setLinkThumbnailDetailCategory] = useState(null);
    const [linkThumbnailUser, setLinkThumbnailUser] = useState(null);

    // data form
    const [dataFormEdit, setDataFormEdit] = useState(null);
    useEffect(() => {
        if (!!dataEdit) {
            if (isTabActive === adminTab.users) {
                setDataFormEdit({
                    ...dataEdit,
                    gender: dataEdit?.gender === true ? "male" : "female",
                    birthday: moment(dataEdit?.birthday, DATE_FORMAT),
                    skill: !!dataEdit?.skill ? dataEdit?.skill.join(", ") : "",
                    certification: !!dataEdit?.certification
                        ? dataEdit?.certification.join(", ")
                        : "",
                });
                setLinkThumbnailUser({ file: null, urlImg: dataEdit?.avatar });
            }
            if (isTabActive === adminTab.works) {
                setDataFormEdit({
                    name: dataEdit?.tenCongViec || "",
                    price: dataEdit?.giaTien || "",
                    rate: dataEdit?.danhGia || "",
                    star: dataEdit?.saoCongViec || "",
                    shortDescription: dataEdit?.moTaNgan || "",
                    description: dataEdit?.moTa || "",
                    detailCategory: dataEdit?.chaCacLoaiCongViec?.[0]?.id,
                    itemDetailCategory: dataEdit?.maChiTietLoaiCongViec,
                });
                setLinkThumbnailWorks({ file: null, urlImg: dataEdit?.hinhAnh });
                setValueDetailCategory(dataEdit?.chaCacLoaiCongViec?.[0]?.dsChiTietLoai);
                setItemDetailCategory(dataEdit?.maChiTietLoaiCongViec);
            }

            if (isTabActive === adminTab.category) {
                setDataFormEdit({ name: dataEdit?.tenLoaiCongViec || "" });
            }

            if (isTabActive === adminTab.detailCategory) {
                setDataFormEdit({
                    name: dataEdit?.tenNhom || "",
                    category: dataEdit?.maLoaiCongviec,
                });
                setLinkThumbnailDetailCategory({ file: null, urlImg: dataEdit?.hinhAnh });
            }
        }
    }, [JSON.stringify(dataEdit)]);
    if (!!dataFormEdit) {
        form.setFieldsValue(dataFormEdit);
    }

    // oke modal
    const handleOk = () => {
        formRef.current.submit();
    };
    // close modal
    const handleCancel = (e) => {
        handleSetActiveEdit?.(false);
        setValueCategory(null);
        setValueDetailCategory(null);
        setItemDetailCategory(null);
        setLinkThumbnailWorks(null);
        setLinkThumbnailDetailCategory(null);
        setLinkThumbnailUser(null);
        setTimeout(() => {
            dispatch(handleResetMessage());
        }, 1000);
        form.resetFields();
    };
    // submit form
    const onFinish = async (values) => {
        console.log("values", values);
        switch (isTabActive) {
            case adminTab.works:
                const { name, rate, price, description, shortDescription, star } = values || {};
                const payloadWork = {
                    tenCongViec: name || "",
                    danhGia: Number(rate || 1),
                    giaTien: Number(price || 1),
                    nguoiTao: profile?.id || "",
                    hinhAnh: "",
                    moTa: description || "",
                    maChiTietLoaiCongViec: itemDetailCategory,
                    moTaNgan: shortDescription || "",
                    saoCongViec: star,
                };
                const resEditWork = await putWorksById(dataEdit?.id, payloadWork);
                console.log(resEditWork);
                if (!!resEditWork?.statusCode === 200) {
                    dispatch(handleSetMessage(["Edit work successfully!", "success"]));
                } else {
                    dispatch(handleSetMessage(["Edit work failed!", "error"]));
                }

                if (!!linkThumbnailWorks?.file) {
                    const resThumb = await updateThumbWork(
                        resEditWork?.id || dataEdit?.id,
                        linkThumbnailWorks?.file
                    );
                    console.log(resThumb);

                    if (resThumb?.id) {
                        dispatch(handleSetMessage(["Edit thumbnail successfully!", "success"]));
                    }
                }

                break;
            case adminTab.users:
                const {
                    birthday,
                    certification,
                    email,
                    gender,
                    name: nameuser,
                    password,
                    phone,
                    skill,
                } = values || {};

                const payloadUser = {
                    name: nameuser?.trim() || "",
                    email: email?.toLowerCase().trim() || "",
                    password: password.trim() || "",
                    phone: phone.trim() || "",
                    birthday: formatDateDayjs(birthday),
                    gender: gender === "male" ? true : false,
                    role: "USER",
                    skill: skill?.split(", ") || "",
                    certification: certification?.split(", ") || "",
                };
                const resEditUser = await putUserById(dataEdit?.id, payloadUser);
                if (resEditUser?.statusCode === 200) {
                    dispatch(handleSetMessage(["Edit user successfully!", "success"]));
                    handleFetchingAPI?.();
                    handleCancel();
                } else {
                    dispatch(handleSetMessage(["Something wrong!", "error"]));
                }

                break;
            case adminTab.category:
                const { name: NameCategory } = values || {};
                const payloadCategory = {
                    tenLoaiCongViec: NameCategory || "",
                };
                const res = await putCategoryWork(dataEdit?.id, payloadCategory);
                if (!!res?.statusCode === 200) {
                    dispatch(handleSetMessage(["Add new category successfully!", "success"]));
                    handleFetchingAPI?.();
                    handleCancel();
                }
                break;
            case adminTab.detailCategory:
            // ERROR API
            // const { name: NameDetailCategory } = values || {};
            // const payloadDetailCate = {
            //     id: dataEdit?.id,
            //     tenChiTiet: NameDetailCategory || "",
            // };
            // const resDetailCatee = await putCategoryWork(dataEdit?.id, payloadDetailCate);
            // console.log(resDetailCatee);
            // if (!!res?.tenChiTiet) {
            //     const resThumb = await updateThumbDetailCategory(
            //         dataEdit?.id,
            //         linkThumbnailDetailCategory?.file
            //     );

            //     const payloadAddCategory = {
            //         id: res?.id || "",
            //         tenChiTiet: NameDetailCategory || "",
            //         maLoaiCongViec: valueCategory || "",
            //         danhSachChiTiet: [],
            //     };
            //     const addCategoryForDetailCate = await putNewItemForDetailCategory(
            //         payloadAddCategory
            //     );

            //     if (
            //         !!resThumb?.statusCode === 200 &&
            //         !!addCategoryForDetailCate?.statusCode === 200
            //     ) {
            //         dispatch(
            //             handleSetMessage([
            //                 "Add new detail category successfully!",
            //                 "success",
            //             ])
            //         );
            //         fetchDetailCate?.();
            //         handleCancel();
            //     }
            // }
            // break;
        }
    };

    // submit form fail
    const onFinishFailed = (errorInfo) => {
        dispatch(handleSetMessage(["Something wrong!", "error"]));
    };

    // ======================== HANDLE DATA WORKS ========================
    const _onChangeImgWorks = (e) => {
        const file = e.target.files ? e.target.files[0] : undefined;
        const urlImg = URL.createObjectURL(file);
        setLinkThumbnailWorks({ file, urlImg });
    };
    const _onChangeItemForDetailCategory = async (value, option) => {
        setItemDetailCategory(value);
        setDataFormEdit({
            ...dataFormEdit,
            itemDetailCategory: value,
        });
    };
    const _onChangeDetailCategory = async (value, option) => {
        if (!!value) {
            const res = (await getDetailCategoryWorksById(value)) || {};
            if (!!res?.id) {
                // set Detail Cate
                setValueDetailCategory(res?.dsChiTietLoai);
                // set Item Detail Cate
                setItemDetailCategory(null);
                setDataFormEdit({
                    ...dataFormEdit,
                    detailCategory: value,
                    itemDetailCategory: null,
                });
            }
        }
    };
    // ======================== HANDLE DATA USER ========================

    // ======================== HANDLE DATA CATEGORY ========================

    // ======================== HANDLE DATA DETAIL CATERGORY ========================
    const _onChangeImgDetailCategory = (e) => {
        const file = e.target.files ? e.target.files[0] : undefined;
        const urlImg = URL.createObjectURL(file);
        setLinkThumbnailDetailCategory({ file, urlImg });
    };

    // _onChange select when isActiveEdit ===  adminTab.detailCategory
    const _onChangeCategory = (value, option) => {
        setValueCategory(value);
    };

    return (
        <Modal
            centered={true}
            title="Edit item"
            open={isActiveEdit}
            onOk={handleOk}
            onCancel={handleCancel}
            className="formEditModal"
            footer={(_, { OkBtn, CancelBtn }) => (
                <div className="flex gap-[12px] items-center justify-end">
                    <Button variant="error" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button onClick={handleOk} variant="blue">
                        Confirm
                    </Button>
                </div>
            )}
        >
            <Form
                form={form}
                className="formEditProfile"
                ref={formRef}
                name="EditForm"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                initialValues={dataFormEdit}
            >
                {/* USER FORM EDIT */}
                {isTabActive === adminTab.users && (
                    <>
                        <Form.Item label={"Avatar"} name="avatar">
                            <div className="thumb circle">
                                <Image
                                    src={
                                        !!linkThumbnailUser?.urlImg
                                            ? linkThumbnailUser.urlImg
                                            : "/default-avatar.jpg"
                                    }
                                    alt="thumb work"
                                    height={100}
                                    width={100}
                                    quality={99}
                                />
                            </div>
                        </Form.Item>
                        <div className="row">
                            {/* email */}
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    { required: true, message: "Please input your email!" },
                                    {
                                        type: "email",
                                        message: "Please enter a valid email!",
                                    },
                                ]}
                            >
                                <Input placeholder="Email" disabled={true} />
                            </Form.Item>
                            {/* name */}
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[{ required: true, message: "Please input your name!" }]}
                            >
                                <Input placeholder="Name" />
                            </Form.Item>
                        </div>
                        <div className="row">
                            {/* password */}
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        validator(_, value) {
                                            if (!!value && value?.length < 6) {
                                                return new Error(
                                                    "Password must be at least 6 characters!"
                                                );
                                            }
                                            return Promise.resolve();
                                        },
                                    },
                                ]}
                            >
                                <Input.Password placeholder="Password" />
                            </Form.Item>
                            {/* phone */}
                            <Form.Item
                                label="Phone"
                                name="phone"
                                rules={[
                                    (rule) => {
                                        // callback trả về rule
                                        if (!!rule.getFieldValue("phone")) {
                                            return {
                                                // dùng validator kết hợp rule để validate form phone
                                                validator(_, value) {
                                                    if (REGEX.phone.test(value)) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(
                                                        new Error("Invalid phone number!")
                                                    );
                                                },
                                            };
                                        } else {
                                            return {
                                                required: true,
                                                message: "Please input your phone!",
                                            };
                                        }
                                    },
                                ]}
                            >
                                <Input placeholder="Phone" />
                            </Form.Item>
                        </div>
                        <div className="row">
                            {/* birthday */}
                            <Form.Item
                                label={"Birthday"}
                                name="birthday"
                                rules={[{ required: true, message: "Please select birthday!" }]}
                            >
                                <DatePicker format={DATE_FORMAT} />
                            </Form.Item>
                        </div>
                        {/* gender */}
                        <div className="row mt-8">
                            <Form.Item
                                label={"Gender"}
                                name="gender"
                                rules={[{ required: true, message: "Please select gender!" }]}
                            >
                                <Radio.Group>
                                    <Radio value="male">Male</Radio>
                                    <Radio value="female">Female</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div className="row">
                            <Form.Item label="Certification" name="certification">
                                <Input placeholder="CFD, CyberSoft, FPT, ..." />
                            </Form.Item>
                            <Form.Item label="Skill" name="skill">
                                <Input placeholder="HTML, CSS, JS, ..." />
                            </Form.Item>
                        </div>
                    </>
                )}
                {/* CATEGORY FORM EDIT */}
                {isTabActive === adminTab.category && (
                    <>
                        {/* name */}
                        <Form.Item
                            label="Name Category"
                            name="name"
                            rules={[{ required: true, message: "Please input your name!" }]}
                        >
                            <Input placeholder="Name" />
                        </Form.Item>
                    </>
                )}

                {/* DETAIL CATEGORY FORM EDIT */}
                {isTabActive === adminTab.detailCategory && (
                    <>
                        <Form.Item label={"Thumbnail"} name="thumbnail">
                            <div className="thumb">
                                <Image
                                    src={
                                        !!linkThumbnailDetailCategory?.urlImg
                                            ? linkThumbnailDetailCategory.urlImg
                                            : "/default_img.jpg"
                                    }
                                    alt="thumb work"
                                    height={100}
                                    width={100}
                                    quality={99}
                                />
                            </div>
                        </Form.Item>

                        {/* name */}
                        <Form.Item
                            label="Name Detail Category"
                            name="name"
                            rules={[{ required: true, message: "Please input name!" }]}
                        >
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item
                            label="Category"
                            name={"category"}
                            rules={[{ required: true, message: "Please input category!" }]}
                        >
                            <Select
                                showSearch
                                onChange={_onChangeCategory}
                                style={{ width: 200 }}
                                placeholder="Search to Select"
                                optionFilterProp="label"
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? "")
                                        .toLowerCase()
                                        .localeCompare((optionB?.label ?? "").toLowerCase())
                                }
                                options={
                                    !!dataCategory?.length > 0
                                        ? dataCategory?.map((item) => {
                                              return {
                                                  value: item?.id || "",
                                                  label: item?.tenLoaiCongViec || "",
                                              };
                                          })
                                        : []
                                }
                            />
                        </Form.Item>
                    </>
                )}

                {/* WorkS FORM EDIT */}
                {isTabActive === adminTab.works && (
                    <>
                        <Form.Item label={"Thumbnail"} name="thumbnail">
                            <div className="thumb">
                                <Image
                                    src={
                                        !!linkThumbnailWorks?.urlImg
                                            ? linkThumbnailWorks.urlImg
                                            : "/default_img.jpg"
                                    }
                                    alt="thumb work"
                                    height={100}
                                    width={100}
                                    quality={99}
                                />
                                <input
                                    className="thumbInput"
                                    type="file"
                                    accept="image/*"
                                    onChange={_onChangeImgWorks}
                                />
                            </div>
                        </Form.Item>

                        <div className="row">
                            {/* name */}
                            <Form.Item
                                label="Work Name"
                                name="name"
                                rules={[
                                    { required: true, message: "Please input your name work!" },
                                ]}
                            >
                                <Input placeholder="Work Name" />
                            </Form.Item>
                            {/* price */}
                            <Form.Item
                                label="Price"
                                name="price"
                                rules={[{ required: true, message: "Please input price!" }]}
                            >
                                <Input type="number" placeholder="Price" />
                            </Form.Item>
                        </div>
                        <div className="row">
                            {/* rate */}
                            <Form.Item
                                label="Rate"
                                name="rate"
                                rules={[{ required: true, message: "Please input rate!" }]}
                            >
                                <Input type="number" placeholder="Rate" />
                            </Form.Item>
                            {/* Star */}
                            <Form.Item
                                label="Star"
                                name="star"
                                rules={[
                                    { required: true, message: "Please input star!" },
                                    {
                                        validator: (_, value) => {
                                            if (Number(value) > 5 || Number(value) < 0) {
                                                return Promise.reject(
                                                    "Stars are only allowed from 1 to 5"
                                                );
                                            }

                                            return Promise.resolve();
                                        },
                                    },
                                ]}
                            >
                                <Input type="number" min={0} max={5} placeholder="Star" />
                            </Form.Item>
                        </div>
                        <div className="row">
                            {/* Detail Category */}
                            <Form.Item
                                label="Detail Category"
                                name={"detailCategory"}
                                rules={[
                                    { required: true, message: "Please input detail category!" },
                                ]}
                            >
                                <Select
                                    showSearch
                                    onChange={_onChangeDetailCategory}
                                    style={{ width: 200 }}
                                    placeholder="Search to Detail Category"
                                    optionFilterProp="label"
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? "")
                                            .toLowerCase()
                                            .localeCompare((optionB?.label ?? "").toLowerCase())
                                    }
                                    options={
                                        !!dataDetailCategory?.length > 0
                                            ? dataDetailCategory?.map((item) => {
                                                  return {
                                                      value: item?.id || "",
                                                      label: `${item?.id} ${item?.tenNhom || ""}`,
                                                  };
                                              })
                                            : []
                                    }
                                />
                            </Form.Item>

                            {/* Item Detail Category */}
                            <Form.Item
                                label="Detail"
                                name={"itemDetailCategory"}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input item detail category!",
                                    },
                                ]}
                            >
                                {/*Item  Detail Category */}
                                <Select
                                    showSearch
                                    onChange={_onChangeItemForDetailCategory}
                                    style={{ width: 200 }}
                                    placeholder="Search to select"
                                    optionFilterProp="label"
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? "")
                                            .toLowerCase()
                                            .localeCompare((optionB?.label ?? "").toLowerCase())
                                    }
                                    options={
                                        !!valueDetailCategory?.length > 0
                                            ? valueDetailCategory?.map((item) => {
                                                  return {
                                                      value: item?.id || "",
                                                      label: `${item?.id} ${
                                                          item?.tenChiTiet || ""
                                                      }`,
                                                  };
                                              })
                                            : []
                                    }
                                />
                            </Form.Item>
                        </div>
                        {/* Short Description */}
                        <Form.Item
                            label={"Short Description"}
                            name="shortDescription"
                            rules={[{ required: true, message: "Please input short description!" }]}
                        >
                            <TextArea style={{ minHeight: 100 }} placeholder="Short Description" />
                        </Form.Item>
                        {/* Description */}
                        <Form.Item
                            label={"Description"}
                            name="description"
                            rules={[{ required: true, message: "Please input description!" }]}
                        >
                            <TextArea style={{ minHeight: 100 }} placeholder="Description" />
                        </Form.Item>
                    </>
                )}
            </Form>
        </Modal>
    );
};

export default FormEditAdmin;
