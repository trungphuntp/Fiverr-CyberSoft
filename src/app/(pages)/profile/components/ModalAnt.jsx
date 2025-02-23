"use client";
import React, { useEffect, useState } from "react";
import { Modal, Spin } from "antd";
import Image from "next/image";
import pencil_icon from "../../../../../public/pencil-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { handleSetProfile } from "../../../store/reducers/authReducer";
import Profile from "../../../services/Profile";
import { handleSetMessage } from "../../../store/reducers/messageReducer";
import { useFormik } from "formik";
import * as Yup from "yup";

const ModalAnt = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [originalValues, setOriginalValues] = useState(null);
  // 1. Xác thực bằng Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required").min(3, "At least 3 chars"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^(03|05|07|08|09)\d{8}$/, "Invalid phone format."),
    birthday: Yup.string().required("Birthday is required"),
    gender: Yup.string() .required("gender is required").oneOf(["Nam", "Nữ"], "Gender must be Nam or Nữ"),
    skill: Yup.string().nullable(),
    certification: Yup.string().nullable(),
  });

  // 2. Khởi tạo Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      birthday: "",
      gender: "",
      skill: "",
      certification: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Xử lý submit form
      setIsUpdating(true);

      // Tạo payload
      const payload = {
        ...values,
        gender: values.gender.toLowerCase() === "nam",
        role: profile?.role, // giữ nguyên role
        skill: values.skill
          ? values.skill
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean)
          : [],
        certification: values.certification
          ? values.certification
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean)
          : [],
      };

      // console.log("Payload gửi đi:", payload);

      Profile.putUserById(profile.id, payload)
        .then((response) => {
          dispatch(handleSetProfile(response.data.content));
          setIsModalOpen(false);
          setIsUpdating(false);

          dispatch(
            handleSetMessage(["Cập nhật thông tin thành công!", "success"])
          );
          setTimeout(() => {
            window.location.reload();
          }, 1500);

          // Tuỳ bạn có reload hay không:
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
          setIsModalOpen(false);
          setIsUpdating(false);
          dispatch(handleSetMessage(["Cập nhật thất bại!", "error"]));
        });
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
    resetForm,
  } = formik;

  // 3. Khi profile thay đổi => cập nhật formik values
  useEffect(() => {
    if (profile) {
      setValues({
        name: profile.name || "",
        email: profile.email || "",
        phone: profile.phone || "",
        birthday: profile.birthday || "",
        gender:
          profile.gender === true || profile.gender === "male" ? "Nam" : "Nữ",
        skill: Array.isArray(profile.skill)
          ? profile.skill.join(",")
          : typeof profile.skill === "string"
          ? profile.skill
          : "",
        certification: Array.isArray(profile.certification)
          ? profile.certification.join(",")
          : typeof profile.certification === "string"
          ? profile.certification
          : "",
      });
    }
  }, [profile, setValues]);

  // 4. Mở/Đóng Modal
  const showModal = () => {
    // Lưu dữ liệu gốc vào originalValues
    setOriginalValues({ ...formik.values });
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    if (originalValues) {
      formik.setValues(originalValues);
    }
    // Đóng Modal
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="cursor-pointer" onClick={showModal}>
        <Image src={pencil_icon} width={16} height={16} alt="Edit" />
      </div>

      <Modal
        title="Edit Profile"
        open={isModalOpen}
        onOk={handleSubmit} // onOk gọi formik handleSubmit
        onCancel={handleCancel}
      >
        {isUpdating ? (
          <Spin tip="Đang cập nhật..." />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="border rounded-md w-full py-2  px-4 text-gray-500 cursor-not-allowed bg-gray-100"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                readOnly
              />
              {errors.email && touched.email && (
                <p className="text-xl  text-red-500 ">{errors.email}</p>
              )}
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className="border border-solid rounded-md  focus:border-blue-500   w-full py-2 px-4"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <p className="text-xl text-red-500 ">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter your phone"
                className="border border-solid rounded-md  focus:border-blue-500  py-2 px-4 w-full"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && touched.phone && (
                <p className="text-xl text-red-500 ">{errors.phone}</p>
              )}
            </div>

            {/* Birthday */}
            <div>
              <label htmlFor="birthday">Birthday</label>
              <input
                id="birthday"
                name="birthday"
                type="date"
                placeholder="Enter your birthday"
                className="border border-solid rounded-md focus:border-blue-500   py-2 px-4 w-full p-2"
                value={values.birthday}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.birthday && touched.birthday && (
                <p className="text-xl text-red-500 ">{errors.birthday}</p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label htmlFor="gender">Gender</label>
              <input
                id="gender"
                name="gender"
                type="text"
                placeholder="Enter Nam/Nữ"
                className="border border-solid rounded-md  focus:border-blue-500  py-2 px-4 w-full p-2"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.gender && touched.gender && (
                <p className="text-xl text-red-500 ">{errors.gender}</p>
              )}
            </div>

            {/* Skill */}
            <div>
              <label htmlFor="skill">Skill</label>
              <input
                id="skill"
                name="skill"
                type="text"
                placeholder="VD: React,Nodejs"
                className="border border-solid rounded-md focus:border-blue-500   py-2 px-4 w-full p-2"
                value={values.skill}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.skill && touched.skill && (
                <p className="text-xl text-red-500 ">{errors.skill}</p>
              )}
            </div>

            {/* Certification */}
            <div>
              <label htmlFor="certification">Certification</label>
              <input
                id="certification"
                name="certification"
                type="text"
                placeholder="VD: AWS,GoogleCloud"
                className="border border-solid rounded-md  py-2 px-4 focus:border-blue-500   w-full p-2"
                value={values.certification}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.certification && touched.certification && (
                <p className="text-xl text-red-500 ">{errors.certification}</p>
              )}
            </div>
          </form>
        )}
      </Modal>
    </>
  );
};

export default ModalAnt;
