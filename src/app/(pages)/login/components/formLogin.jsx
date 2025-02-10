"use client";
import Button from "@/app/components/Button/page";
import { useMessageContext } from "@/app/components/MessageProvider/page";
import PATH from "@/app/constants/path";
import { handleLogin } from "@/app/store/reducers/authReducer";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FormLogin = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { profile, loading } = useSelector((state) => state.profile);
    const { messageAPI } = useMessageContext();

    useEffect(() => {}, [profile, loading.login, loading.profile]);

    const onFinish = async (values) => {
        const res = await dispatch(handleLogin(values)).unwrap();
        console.log(res);

        if (!!res?.user?.id) {
            messageAPI
                .open({
                    type: "loading",
                    content: "Loading...",
                    duration: 1,
                })
                .then(() => messageAPI.success("Login success!", 0.7))
                .then(() => {
                    router.push(PATH.HOME);
                });
        } else {
            messageAPI.error("Email or Password does not exist!");
        }
    };
    const onFinishFailed = (errorInfo) => {
        messageAPI.error("Something wrong!");
    };
    return (
        <Form
            name="basic"
            onFinish={onFinish}
            initialValues={{
                remember: true,
            }}
            // onFinishFailed={onFinishFailed}
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
