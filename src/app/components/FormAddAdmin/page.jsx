"use client";
import { handleSetMessage } from "@/app/store/reducers/messageReducer";
import { UserOutlined } from "@ant-design/icons";
import { Form, Input, Modal, Select } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/page";
import { getUserById, putUserById } from "@/app/actions/UserActions";

const FormAddAdmin = ({ handleSetAddAdmin, isActiveAddAdmin, handleFetchingAPI }) => {
    const [roleInitial, setroleInitial] = useState(null);
    const [dataUser, setDataUser] = useState(null);
    const [dataFormEditAdmin, setdataFormEditAdmin] = useState(null);

    const formRef = useRef(null);
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        setdataFormEditAdmin({
            searchid: dataUser?.id,
            roleUser: dataUser?.role,
        });
    }, [JSON.stringify(dataUser)]);

    const _onChangeRole = (value) => {
        setdataFormEditAdmin({
            searchid: dataUser?.id,
            roleUser: value,
        });
    };

    // liên tục set lại form cho đến giá trị đúng nhất
    if (!!dataFormEditAdmin) {
        form.setFieldsValue(dataFormEditAdmin);
    }

    const handleOk = () => {
        formRef.current.submit();
    };

    // close modal
    const handleCancel = (e) => {
        handleSetAddAdmin?.(false);
        setDataUser(null);
        setdataFormEditAdmin(null);
        setroleInitial(null);
        form.resetFields();
    };

    // submit form
    const onFinish = async (values) => {
        console.log("values", values);
        const { searchid } = values || {};
        const res = await getUserById(searchid);
        if (res?.id) {
            setDataUser(res);
            setroleInitial(res?.role);
        }
    };

    // change role
    const onChangeRole = async () => {
        if (!!dataUser && !!dataFormEditAdmin && roleInitial !== dataFormEditAdmin?.roleUser) {
            const payload = {
                ...dataUser,
                role: dataFormEditAdmin?.roleUser,
            };
            const res = await putUserById(dataUser?.id, payload);
            if (res?.id) {
                dispatch(handleSetMessage(["Change role successfully", "success"]));
                handleFetchingAPI?.();
                handleCancel();
            }
        } else {
            dispatch(handleSetMessage(["The data does not change!", "error"]));
        }
    };

    // submit form fail
    const onFinishFailed = (errorInfo) => {
        dispatch(handleSetMessage(["Something wrong!", "error"]));
    };

    return (
        <Modal
            centered={true}
            title="Add administrator"
            open={isActiveAddAdmin}
            onOk={handleOk}
            onCancel={handleCancel}
            init
            className="formEditModal"
            footer={(_, { OkBtn, CancelBtn }) => (
                <div className="flex gap-[12px] items-center justify-end">
                    <Button variant="error" onClick={handleCancel}>
                        Cancel
                    </Button>
                    {!!dataUser?.id && <Button onClick={onChangeRole}>Submit</Button>}
                    <Button onClick={handleOk} variant="blue">
                        Search Role
                    </Button>
                </div>
            )}
        >
            <Form
                form={form}
                name="formaddAdmin"
                ref={formRef}
                autoComplete="off"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={dataFormEditAdmin}
            >
                {/* id */}
                <Form.Item
                    label="ID User"
                    name="searchid"
                    rules={[
                        {
                            required: true,
                            message: "Please input ID user!",
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined />} placeholder="ID User" />
                </Form.Item>
                {/* ROLE */}
                {!!dataUser?.id && (
                    <Form.Item label="Role" name="roleUser">
                        <Select
                            style={{ width: 200 }}
                            placeholder="Search to role"
                            optionFilterProp="label"
                            onChange={_onChangeRole}
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
                )}
            </Form>
        </Modal>
    );
};

export default FormAddAdmin;
