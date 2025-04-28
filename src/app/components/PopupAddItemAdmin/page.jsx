import { postCategoryWork } from "@/app/actions/CategoryWorksAction";
import { getDetailCategoryWorksById } from "@/app/actions/DetailCategoryWorkAction";
import { postUser } from "@/app/actions/UserActions";
import { postWorks, updateThumbWork } from "@/app/actions/WorksActions";
import { DATE_FORMAT, REGEX } from "@/app/constants/format";
import { adminTab } from "@/app/constants/general";
import {
  handleResetMessage,
  handleSetMessage,
} from "@/app/store/reducers/messageReducer";
import { formatDateDayjs } from "@/app/utils/format";
import { DatePicker, Form, Input, Modal, Radio, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/page";

const PopupAddItemAdmin = ({
  isActiveAdd,
  handleSetActiveAdd,
  isTabActive,
  dataCategory,
  dataDetailCategory,
  handleFetchingAPI,
}) => {
  const dispatch = useDispatch();
  const [valueCategory, setValueCategory] = useState();
  const [valueDetailCategory, setValueDetailCategory] = useState();
  const [itemDetailCategory, setItemDetailCategory] = useState();
  const { profile } = useSelector((state) => state.profile);
  const [linkThumbnailWorks, setLinkThumbnailWorks] = useState({});
  const [linkThumbnailDetailCategory, setLinkThumbnailDetailCategory] =
    useState({});
  const formRef = useRef(null);
  const [form] = Form.useForm();

  const handleOk = () => {
    formRef.current.submit();
  };

  // close modal
  const handleCancel = (e) => {
    handleSetActiveAdd?.(false);
    form.resetFields();
    setValueCategory(null);
    setValueDetailCategory(null);
    setItemDetailCategory(null);
    setLinkThumbnailWorks(null);
    setTimeout(() => {
      dispatch(handleResetMessage());
    }, 1000);
  };

  // submit form
  const onFinish = async (values) => {
    console.log("values", values);
    switch (isTabActive) {
      case adminTab.works:
        const { name, rate, price, description, shortDescription, star } =
          values || {};
        if (!!linkThumbnailWorks?.file) {
          const payload = {
            tenCongViec: name || "",
            danhGia: Number(rate || 1),
            giaTien: Number(price || 1),
            nguoiTao: profile?.id || "",
            hinhAnh: "",
            moTa: description || "",
            maChiTietLoaiCongViec: itemDetailCategory || 1,
            moTaNgan: shortDescription || "",
            saoCongViec: star,
          };

          const resPost = await postWorks(payload);
          if (resPost?.tenCongViec) {
            const resThumb = await updateThumbWork(
              resPost?.id,
              linkThumbnailWorks?.file
            );
            if (resThumb?.tenCongViec) {
              dispatch(
                handleSetMessage(["Add new work successfully!", "success"])
              );
              handleFetchingAPI?.();
              handleCancel();
            }
          }
        } else {
          dispatch(handleSetMessage(["Please add thumbnail!", "error"]));
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
          roleUser,
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
          role: roleUser || "USER",
          certification: certification?.split(", ") || "",
        };

        const resPostUser = await postUser(payloadUser);
        console.log(resPostUser);
        if (resPostUser?.email) {
          dispatch(handleSetMessage(["Add new user successfully!", "success"]));
          handleFetchingAPI?.();
          handleCancel();
        } else if (resPostUser?.status === 400) {
          dispatch(handleSetMessage(["Email already exists!", "error"]));
        } else {
          dispatch(handleSetMessage(["Something wrong!", "error"]));
        }

        break;
      case adminTab.category:
        const { name: NameCategory } = values || {};
        const payload = {
          tenLoaiCongViec: NameCategory || "",
        };
        const res = await postCategoryWork(payload);

        if (!!res?.id) {
          dispatch(
            handleSetMessage(["Add new category successfully!", "success"])
          );
          handleFetchingAPI?.();
          handleCancel();
        }
        break;
      case adminTab.detailCategory:
        // ERROR API
        // if (!!linkThumbnailDetailCategory?.file) {
        //     const { name: NameDetailCategory } = values || {};
        //     const payload = {
        //         tenChiTiet: NameDetailCategory || "",
        //     };
        //     const res = await postDetailCategory(payload);
        //     console.log(res);

        //     if (!!res?.tenChiTiet) {
        //         const resThumb = await updateThumbDetailCategory(
        //             linkThumbnailDetailCategory?.file
        //         );

        //         const payloadAddCategory = {
        //             id: res?.id || "",
        //             tenChiTiet: NameDetailCategory || "",
        //             maLoaiCongViec: valueCategory?.value || "",
        //             danhSachChiTiet: [],
        //         };
        //         const addCategoryForDetailCate = await putNewItemForDetailCategory(
        //             payloadAddCategory
        //         );
        //         console.log("resThumb", resThumb);
        //         console.log("addCategoryForDetailCate", addCategoryForDetailCate);

        //         if (
        //             !!resThumb?.statusCode === 200 &&
        //             !!addCategoryForDetailCate?.statusCode === 200
        //         ) {
        //             dispatch(
        //                 handleSetMessage([
        //                     "Add new detail category successfully!",
        //                     "success",
        //                 ])
        //             );
        //             fetchDetailCate?.();
        //             handleCancel();
        //         }
        //     }
        // } else {
        //     dispatch(handleSetMessage(["Please add thumbnail!", "error"]));
        // }
        break;
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
  const _onChangeDetailCategory = async (value) => {
    if (!!value) {
      const res = (await getDetailCategoryWorksById(value)) || {};
      if (!!res?.id) {
        // set Detail Cate
        setValueDetailCategory(res?.dsChiTietLoai);
        // set Item Detail Cate
        setItemDetailCategory(null);
      }
    }
  };
  const _onChangeItemForDetailCategory = async (value) => {
    setItemDetailCategory(value);
  };
  // ======================== HANDLE DATA USER ========================
  // ======================== HANDLE DATA CATEGORY ========================

  // ======================== HANDLE DATA DETAIL CATERGORY ========================
  const _onChangeImgDetailCategory = (e) => {
    const file = e.target.files ? e.target.files[0] : undefined;
    const urlImg = URL.createObjectURL(file);
    setLinkThumbnailDetailCategory({ file, urlImg });
  };

  // _onChange select when isActiveAdd ===  adminTab.detailCategory
  const _onChangeCategory = (value, option) => {
    setValueCategory(option);
  };

  return (
    <Modal
      centered={true}
      title="Add new"
      open={isActiveAdd}
      onOk={handleOk}
      onCancel={handleCancel}
      className="formEditModal"
      footer={(_, { OkBtn, CancelBtn }) => (
        <div className="flex gap-[12px] items-center justify-end">
          <Button variant="error" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleOk} variant="blue">
            Add
          </Button>
        </div>
      )}
    >
      <Form
        form={form}
        className="formEditProfile"
        ref={formRef}
        name="addForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        {/* USER FORM ADD */}
        {isTabActive === adminTab.users && (
          <>
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
                <Input placeholder="Email" />
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
              {/* confirm password */}
              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your confirm password!",
                  },
                  (rule) => {
                    // callback trả về rule
                    return {
                      validator(_, value) {
                        if (
                          !value ||
                          rule.getFieldValue("password") === value
                        ) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("confirm Passwords do not match!")
                        );
                      },
                    };
                  },
                ]}
              >
                <Input.Password
                  type="password"
                  placeholder="Confirm Password"
                />
              </Form.Item>
            </div>
            <div className="row">
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
              {/* birthday */}
              <Form.Item
                label={"Birthday"}
                name="birthday"
                rules={[{ required: true, message: "Please select birthday!" }]}
              >
                <DatePicker format={DATE_FORMAT} />
              </Form.Item>
            </div>
            <div className="row mt-8">
              {/* gender */}
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

              {/* role user */}
              <Form.Item label="Role" name="roleUser">
                <Select
                  style={{ width: 200 }}
                  placeholder="Search to role"
                  optionFilterProp="label"
                  options={[
                    {
                      value: "USER",
                      label: "User",
                    },
                    {
                      value: "ADMIN",
                      label: "Admin",
                    },
                  ]}
                />
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
        {/* CATEGORY FORM ADD */}
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

        {/* DETAIL CATEGORY FORM ADD */}
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
                <input
                  className="thumbInput"
                  type="file"
                  accept="image/*"
                  onChange={_onChangeImgDetailCategory}
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
                value={valueDetailCategory}
                onChange={_onChangeCategory}
                style={{ width: 200 }}
                placeholder="Search to option"
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

        {/* WorkS FORM ADD */}
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
                  value={valueDetailCategory}
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
                            label: item?.tenNhom || "",
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
                  value={itemDetailCategory}
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
                            label: item?.tenChiTiet || "",
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
              rules={[
                { required: true, message: "Please input short description!" },
              ]}
            >
              <TextArea
                style={{ minHeight: 100 }}
                placeholder="Short Description"
              />
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

export default PopupAddItemAdmin;
