import { REGEX } from "@/app/constants/format";
import { handleRegisterAdmin } from "@/app/store/reducers/authReducer";
import {
    KeyOutlined,
    LockOutlined,
    MailOutlined,
    PhoneOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Form, Input, Modal, Radio } from "antd";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/page";

const FormCreateAdmin = ({ isActiveCreateAdmin, handleSetModalAdmin }) => {
    const formRef = useRef(null);
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const handleOk = () => {
        formRef.current.submit();
    };

    // close modal
    const handleCancel = (e) => {
        handleSetModalAdmin?.(false);
        form.resetFields();
    };

    // submit form
    const onFinish = async (values) => {
        const payload = {
            ...values,
            email: values.email.toLowerCase().trim(),
            phone: values.phone.trim(),
            name: values.name.trim(),
            role: "ADMIN",
        };
        const res = await dispatch(handleRegisterAdmin?.(payload)).unwrap();
    };

    // submit form fail
    const onFinishFailed = (errorInfo) => {};
    return (
        <Modal
            centered={true}
            title="Create a new administrator"
            open={isActiveCreateAdmin}
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
                name="basic"
                form={form}
                initialValues={{
                    remember: true,
                }}
                ref={formRef}
                autoComplete="off"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                {/* email */}
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                        {
                            type: "email",
                            message: "Please enter a valid email!",
                        },
                    ]}
                >
                    <Input prefix={<MailOutlined />} placeholder="Email" />
                </Form.Item>

                {/* password */}
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                        {
                            min: 6,
                            message: "Password must be at least 6 characters!",
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="Password"
                    />
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
                                    if (!value || rule.getFieldValue("password") === value) {
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
                        prefix={<KeyOutlined />}
                        type="password"
                        placeholder="Confirm Password"
                    />
                </Form.Item>

                {/* name */}
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your name!",
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined />} type="text" placeholder="Name" />
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
                                        return Promise.reject(new Error("Invalid phone number!"));
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
                    <Input prefix={<PhoneOutlined />} type="text" placeholder="Phone" />
                </Form.Item>

                {/* gender */}
                <Form.Item
                    name="gender"
                    rules={[{ required: true, message: "Please select gender!" }]}
                >
                    <Radio.Group>
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default FormCreateAdmin;
