"use client";
import Button from "@/app/components/Button/page";
import PATH from "@/app/constants/path";
import { handleLogin } from "@/app/store/reducers/authReducer";
import { handleSetMessage } from "@/app/store/reducers/messageReducer";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FormLogin = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { profile, loading } = useSelector((state) => state.profile);

    useEffect(() => {}, [profile, loading.login, loading.profile]);

    const onFinish = async (values) => {
        const res = await dispatch(handleLogin(values)).unwrap();
        if (!!res?.user?.id) {
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
            onFinishFailed={onFinishFailed}
            initialValues={{
                remember: true,
            }}
            autoComplete="off"
            layout="vertical"
        >
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
                <Input prefix={<UserOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Please input your password!",
                    },
                ]}
            >
                <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item label={null}>
                <Button className="mt-8">Login</Button>
                <Button variant="text" linkIn={PATH.REGISTER}>
                    Register now ?
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormLogin;
