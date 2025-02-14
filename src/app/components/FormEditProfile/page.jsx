"use client";
import { putUserById } from "@/app/actions/UserActions";
import { DATE_FORMAT, REGEX } from "@/app/constants/format";
import { handleGetProfile } from "@/app/store/reducers/authReducer";
import { handleSetMessage } from "@/app/store/reducers/messageReducer";
import { formatDate, formatDateDayjs } from "@/app/utils/format";
import { DatePicker, Form, Input, Modal, Radio } from "antd";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/page";

const FormEditProfile = ({ profile, isShowModal, handleSetShowModal }) => {
    const formRef = useRef(null);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [profileInforForm, setprofileInforForm] = useState({
        ...profile,
        gender: profile?.gender === true ? "male" : "female",
        birthday: moment(profile?.birthday, DATE_FORMAT),
        skill: profile?.skill.join(", ") || "",
        certification: profile?.certification.join(", ") || "",
    });
    useEffect(() => {
        if (!!profile) {
            setprofileInforForm({
                ...profile,
                gender: profile?.gender === true ? "male" : "female",
                birthday: moment(profile?.birthday, DATE_FORMAT),
                skill: profile?.skill.join(", ") || "",
                certification: profile?.certification.join(", ") || "",
            });
        }
    }, [profile]);

    // when success modal
    const handleOk = () => {
        formRef.current.submit();
    };

    // close modal
    const handleCancel = (e) => {
        handleSetShowModal?.(false);
        form.resetFields();
    };

    // submit form
    const onFinish = async (values) => {
        const { name, email, phone, birthday, gender, skill, certification, password } =
            values || {};
        const genderPayload = gender === "male" ? true : false;
        const birthdayPayload = formatDateDayjs(birthday);

        let arraySkill;
        if (!!skill?.length > 0) {
            arraySkill = skill?.split(",");
            arraySkill = arraySkill?.map((skillItem) => {
                return skillItem.trim();
            });
        } else {
            arraySkill = [];
        }

        let arrayCertification;
        if (!!certification?.length > 0) {
            arrayCertification = certification?.split(",");
            arrayCertification = arrayCertification?.map((certiItem) => {
                return certiItem.trim();
            });
        } else {
            arrayCertification = [];
        }

        const payload = {
            id: profileInforForm?.id || "",
            name: name.trim() || "",
            email: email.toLowerCase().trim() || "",
            password: !!password ? password : "",
            phone: phone.trim() || "",
            birthday: birthdayPayload || "1/1/2000",
            avatar: profileInforForm?.avatar || "",
            gender: genderPayload,
            role: "USER",
            skill: arraySkill || [],
            certification: arrayCertification || [],
            bookingJob: profileInforForm?.bookingJob || [],
        };
        // check is Changed Profile
        if (
            JSON.stringify({
                ...profileInforForm,
                gender: profileInforForm?.gender === "male" ? true : false,
                certification: profileInforForm.certification?.split(",")?.map((certiItem) => {
                    return certiItem.trim();
                }),
                skill: profileInforForm.skill?.split(",")?.map((skillItem) => {
                    return skillItem.trim();
                }),
                birthday: formatDate(profileInforForm.birthday),
            }) !== JSON.stringify(payload)
        ) {
            const res = await putUserById(profileInforForm?.id, payload);
            console.log("res", res);
            if (res?.id) {
                dispatch(handleSetMessage(["Update profile successfully!", "success"]));
                dispatch(handleGetProfile(profileInforForm?.id));
            } else {
                dispatch(handleSetMessage(["Update profile failed!", "error"]));
            }
        } else {
            dispatch(handleSetMessage(["There are no changes to the profile!", "error"]));
        }

        // handleSetShowModal?.(false);
    };
    // submit form fail
    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo);

        dispatch(handleSetMessage(["Something wrong!", "error"]));
    };

    return (
        <div>
            <Modal
                centered={true}
                title="Update Profile"
                open={isShowModal}
                onOk={handleOk}
                onCancel={handleCancel}
                className="formEditModal"
                footer={(_, { OkBtn, CancelBtn }) => (
                    <div className="flex gap-[12px] items-center justify-end">
                        <Button variant="error" onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button onClick={handleOk}>Submit</Button>
                    </div>
                )}
            >
                <Form
                    form={form}
                    className="formEditProfile"
                    ref={formRef}
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    initialValues={profileInforForm}
                >
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
                    </div>
                    <div className="row">
                        {/* name */}
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: "Please input your name!" }]}
                        >
                            <Input placeholder="Name" />
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
                    {/* birthday */}
                    <div className="row">
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
                </Form>
            </Modal>
        </div>
    );
};

export default FormEditProfile;
