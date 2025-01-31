import { Rate } from "antd";
import React from "react";

const Rating = ({ className, saoCongViec, danhGia, disabled = false, ...rest }) => {
    return (
        <div className={`ratingComponent ${!!className ? className : ""}`}>
            <Rate className="ratingComponent__star" disabled={disabled} {...rest} />
            {!!saoCongViec && (
                <span className="ratingComponent__numRate">{saoCongViec || "0"}</span>
            )}
            {!!danhGia && (
                <span className="ratingComponent__quantityRate">{`(${danhGia || "0"})`}</span>
            )}
        </div>
    );
};

export default Rating;
