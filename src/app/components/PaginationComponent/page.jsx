import { Pagination } from "antd";
import React from "react";

const PaginationComponent = ({
    handleChangePagination,
    defaultCurrent = 1,
    total = 35,
    pageSize = 9,
    ...rest
}) => {
    const onchangePagi = (pageIndex, pageSize) => {
        handleChangePagination?.(pageIndex, pageSize);
    };
    return (
        <div className="PaginationComponent">
            <Pagination
                defaultCurrent={defaultCurrent}
                total={total}
                pageSize={pageSize}
                onChange={onchangePagi}
                {...rest}
            />
        </div>
    );
};

export default PaginationComponent;
