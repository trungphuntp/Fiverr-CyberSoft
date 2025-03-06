"use client";
import { Pagination } from "antd";
import React from "react";

const PaginationComponent = ({
    handleChangePagination,
    defaultCurrent = 1,
    total = 35,
    pageSize = 9,
    linkSubmit = "searchWork",
    ...rest
}) => {
    const onchangePagi = (pageIndex, pageSize) => {
        handleChangePagination?.(pageIndex, pageSize);
    };
    return (
        <div className="PaginationComponent">
            <Pagination
                current={defaultCurrent}
                total={total}
                pageSize={pageSize}
                onChange={onchangePagi}
                showSizeChanger={false}
                {...rest}
            />
        </div>
    );
};

export default PaginationComponent;
