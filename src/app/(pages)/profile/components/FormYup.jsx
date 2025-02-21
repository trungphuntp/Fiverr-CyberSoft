"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormYup = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must have at least 2 characters"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must have at least 6 characters"),
  });

  // 2. Tạo formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Xử lý submit form
      console.log("Form values:", values);
      alert("Form submitted successfully!");
    },
  });
  // 3. Giải nén helper từ formik
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;
  return <div></div>;
};

export default FormYup;
