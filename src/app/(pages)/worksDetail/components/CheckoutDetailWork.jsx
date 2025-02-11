"use client";
import { postHireWork } from "@/app/actions/HireWorkActions";
import Button from "@/app/components/Button/page";
import PATH from "@/app/constants/path";
import { STORAGE } from "@/app/constants/storage";
import { handleSetMessage } from "@/app/store/reducers/messageReducer";
import { formatDate } from "@/app/utils/format";
import { methodToken } from "@/app/utils/Token";
import { Tabs } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
const { TabPane } = Tabs;

const CheckoutDetailWork = ({ price, shortDesc, idDetailWork }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { profile } = useSelector((state) => state.profile);
    const { id } = profile || {};
    // handle hire work
    const handleHireWork = async (e) => {
        e?.preventDefault();
        e?.stopPropagation();

        if (!methodToken.get(STORAGE.token) && !methodToken.get(STORAGE.idUser) && !profile) {
            dispatch(handleSetMessage(["Hired failed job", "error"]));
            router.push(PATH.LOGIN);
        }
        const now = new Date();
        const payload = {
            maCongViec: idDetailWork || "",
            maNguoiThue: id || "",
            ngayThue: formatDate(now || ""),
            hoanThanh: false,
        };

        const res = await postHireWork(payload);
        if (res?.id) {
            dispatch(handleSetMessage(["Hired successfully job", "success"]));
            router.push(PATH.PROFILE);
        } else {
            dispatch(handleSetMessage(["Hired failed job", "error"]));
        }
    };

    return (
        <div className="checkoutDetailWork">
            {/* tabs antd */}
            <Tabs
                defaultActiveKey="1"
                type="card"
                items={[
                    {
                        key: "1",
                        label: "basic",
                        children: (
                            <div className="checkoutDetailWork__pane">
                                <div className="checkoutDetailWork__pane-top">
                                    <h5 className="type">Basic</h5>
                                    <h5 className="price">{`US$${price || 0}`}</h5>
                                </div>
                                <p className="checkoutDetailWork__pane-desc">{shortDesc || ""}</p>
                                <div className="checkoutDetailWork__pane-days">
                                    <p className="text">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                                            <path d="M9 4H7v5h5V7H9V4z"></path>
                                        </svg>
                                        14 Days Delivery
                                    </p>
                                    <p className="text">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                                            <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                                        </svg>
                                        Unlimited Revisions
                                    </p>
                                </div>
                                <div className="checkoutDetailWork__pane-feature">
                                    <p className="text">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 11 9"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#1dbf73"
                                        >
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                        Good fearture
                                    </p>
                                    <p className="text">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 11 9"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#1dbf73"
                                        >
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                        Good fearture
                                    </p>
                                    <p className="text">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 11 9"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#1dbf73"
                                        >
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                        Good fearture
                                    </p>
                                    <p className="text">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 11 9"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#1dbf73"
                                        >
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                        Good fearture
                                    </p>
                                </div>
                                <Button
                                    className="btnPrimary"
                                    onClick={handleHireWork}
                                    sizeBtn="small"
                                >{`Continue (${price || 0}US$)`}</Button>
                                <Button variant="text" className="btnText">
                                    Compare Packages
                                </Button>
                            </div>
                        ),
                    },
                    {
                        key: "2",
                        label: "Standard",
                        children: (
                            <div className="checkoutDetailWork__pane">
                                <div className="checkoutDetailWork__pane-top">
                                    <h5 className="type">Standard</h5>
                                    <h5 className="price">{`US$${price * 2 || 20}`}</h5>
                                </div>
                                <p className="checkoutDetailWork__pane-desc">{shortDesc || ""}</p>
                                <div className="checkoutDetailWork__pane-days">
                                    <p className="text">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                                            <path d="M9 4H7v5h5V7H9V4z"></path>
                                        </svg>
                                        14 Days Delivery
                                    </p>
                                    <p className="text">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                                            <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                                        </svg>
                                        Unlimited Revisions
                                    </p>
                                </div>
                                <div className="checkoutDetailWork__pane-feature">
                                    <p className="text">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 11 9"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#1dbf73"
                                        >
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                        Good fearture
                                    </p>
                                    <p className="text">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 11 9"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#1dbf73"
                                        >
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                        Good fearture
                                    </p>
                                    <p className="text">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 11 9"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#1dbf73"
                                        >
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                        Good fearture
                                    </p>
                                    <p className="text">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 11 9"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#1dbf73"
                                        >
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                        Good fearture
                                    </p>
                                </div>
                                <Button
                                    className="btnPrimary"
                                    onClick={handleHireWork}
                                    sizeBtn="small"
                                >{`Continue (${price * 2 || 20}US$)`}</Button>
                                <Button variant="text" className="btnText">
                                    Compare Packages
                                </Button>
                            </div>
                        ),
                    },
                    {
                        key: "3",
                        label: "Premium",
                        children: (
                            <div className="checkoutDetailWork__pane">
                                <div className="checkoutDetailWork__pane-top">
                                    <h5 className="type">Premium</h5>
                                    <h5 className="price">{`US$${price * 3 || 50}`}</h5>
                                </div>
                                <p className="checkoutDetailWork__pane-desc">{shortDesc || ""}</p>
                                <div className="checkoutDetailWork__pane-days">
                                    <p className="text">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                                            <path d="M9 4H7v5h5V7H9V4z"></path>
                                        </svg>
                                        14 Days Delivery
                                    </p>
                                    <p className="text">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                                            <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                                        </svg>
                                        Unlimited Revisions
                                    </p>
                                </div>
                                <div className="checkoutDetailWork__pane-feature">
                                    <p className="text">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 11 9"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#1dbf73"
                                        >
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                        Good fearture
                                    </p>
                                    <p className="text">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 11 9"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#1dbf73"
                                        >
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                        Good fearture
                                    </p>
                                    <p className="text">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 11 9"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#1dbf73"
                                        >
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                        Good fearture
                                    </p>
                                    <p className="text">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 11 9"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#1dbf73"
                                        >
                                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                        </svg>
                                        Good fearture
                                    </p>
                                </div>
                                <Button
                                    className="btnPrimary"
                                    onClick={handleHireWork}
                                    sizeBtn="small"
                                >{`Continue (${price * 3 || 50}US$)`}</Button>
                                <Button variant="text" className="btnText">
                                    Compare Packages
                                </Button>
                            </div>
                        ),
                    },
                ]}
            ></Tabs>
        </div>
    );
};

export default CheckoutDetailWork;
