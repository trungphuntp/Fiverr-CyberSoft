"use client";
import Button from "@/app/components/Button/page";
import { useMessageContext } from "@/app/components/MessageProvider/page";
import { REGEX } from "@/app/constants/format";
import PATH from "@/app/constants/path";
import { handleRegister } from "@/app/store/reducers/authReducer";
import { handleSetMessage } from "@/app/store/reducers/messageReducer";
import {
    KeyOutlined,
    LockOutlined,
    MailOutlined,
    PhoneOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Checkbox, Form, Input, Radio } from "antd";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const FormRegister = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const onFinish = async (values) => {
        const payload = {
            ...values,
            email: values.email.toLowerCase().trim(),
            phone: values.phone.trim(),
            name: values.name.trim(),
        };
        const res = await dispatch(handleRegister?.(payload)).unwrap();
        if (!!res?.email) {
            router.push(PATH.HOME);
        }
    };
    const onFinishFailed = (errorInfo) => {
        dispatch(handleSetMessage(["Something wrong!", "error"]));
    };
    return (
        <Form
            name="basic"
            onFinish={onFinish}
            initialValues={{
                remember: true,
            }}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
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
                <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
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
                                return Promise.reject(new Error("confirm Passwords do not match!"));
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
            <Form.Item name="gender" rules={[{ required: true, message: "Please select gender!" }]}>
                <Radio.Group>
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                </Radio.Group>
            </Form.Item>

            {/* policy */}
            <Form.Item
                name="policy"
                rules={[{ required: true, message: "Please accept the terms!" }]}
            >
                <Checkbox.Group>
                    <Checkbox value="reading">
                        <p className="textPolicy">
                            I agree all statements in{" "}
                            <a href="#" className="link">
                                Terms of service
                            </a>
                        </p>
                    </Checkbox>
                </Checkbox.Group>
            </Form.Item>

            <Form.Item label={null}>
                <Button className="mt-8">Register</Button>
                <Button variant="text" linkIn={PATH.LOGIN}>
                    I am already member
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormRegister;
