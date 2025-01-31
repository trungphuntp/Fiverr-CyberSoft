"use client";
import Button from "@/app/components/Button/page";
import { Tabs } from "antd";
import React from "react";
const { TabPane } = Tabs;

const CheckoutDetailWork = () => {
    return (
        <div className="checkoutDetailWork">
            <Tabs defaultActiveKey="1" type="card">
                <TabPane tab="basic" key="1">
                    <div className="checkoutDetailWork__pane">
                        <div className="checkoutDetailWork__pane-top">
                            <h5 className="type">Basic</h5>
                            <h5 className="price">US$5</h5>
                        </div>
                        <p className="checkoutDetailWork__pane-desc">
                            1000 Words US$5 2x500 words or 1x1000 Words articles 1 Day Delivery Up
                            to 1,000 words SEO keywords
                        </p>
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
                        <Button className="btnPrimary" sizeBtn="small">{`Continue (US$)`}</Button>
                        <Button variant="text" className="btnText">
                            Compare Packages
                        </Button>
                    </div>
                </TabPane>
                <TabPane tab="Standard" key="2">
                    <div className="checkoutDetailWork__pane">
                        <div className="checkoutDetailWork__pane-top">
                            <h5 className="type">Standard</h5>
                            <h5 className="price">US$5</h5>
                        </div>
                        <p className="checkoutDetailWork__pane-desc">
                            1000 Words US$5 2x500 words or 1x1000 Words articles 1 Day Delivery Up
                            to 1,000 words SEO keywords
                        </p>
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
                        <Button className="btnPrimary" sizeBtn="small">{`Continue (US$)`}</Button>
                        <Button variant="text" className="btnText">
                            Compare Packages
                        </Button>
                    </div>
                </TabPane>
                <TabPane tab="Premium" key="3">
                    <div className="checkoutDetailWork__pane">
                        <div className="checkoutDetailWork__pane-top">
                            <h5 className="type">Premium</h5>
                            <h5 className="price">US$5</h5>
                        </div>
                        <p className="checkoutDetailWork__pane-desc">
                            1000 Words US$5 2x500 words or 1x1000 Words articles 1 Day Delivery Up
                            to 1,000 words SEO keywords
                        </p>
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
                        <Button className="btnPrimary" sizeBtn="small">{`Continue (US$)`}</Button>
                        <Button variant="text" className="btnText">
                            Compare Packages
                        </Button>
                    </div>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default CheckoutDetailWork;
