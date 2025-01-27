import { Rate } from "antd";
import React from "react";

const Rating = ({ disabled = false, ...rest }) => {
    return <Rate className="ratingComponent" disabled={disabled} {...rest} />;
};

export default Rating;
