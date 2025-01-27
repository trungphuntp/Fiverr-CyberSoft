"use client";
import useDebounce from "@/app/hooks/useDebounce";
import { Spin } from "antd";

const ComponentLoading = ({ spin, children }) => {
    if (spin) {
        return (
            <div className="loadingComponent">
                <Spin />
            </div>
        );
    }
    return <div className="loadingComponent">{children}</div>;
};

export default ComponentLoading;
