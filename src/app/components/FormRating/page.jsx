"use client";
import { useState } from "react";
import Button from "../Button/page";
import Rating from "../Rating/page";

const FormRating = ({ handleSendReviews }) => {
    const [starValue, setStarValue] = useState(4);
    const [contentRating, setContentRating] = useState("");

    const _onSubmitRating = (e) => {
        e?.stopPropagation();
        e?.preventDefault();
        handleSendReviews?.(contentRating, starValue);
        _onResetForm();
    };

    // handle reset form rating
    const _onResetForm = () => {
        setStarValue(4);
        setContentRating("");
    };

    const _onChangeStar = (star) => {
        setStarValue(star);
    };

    const _onChangeContentRating = (e) => {
        e?.stopPropagation();
        e?.preventDefault();
        setContentRating(e?.target?.value);
    };
    return (
        <form className="formRating" onSubmit={_onSubmitRating}>
            <div className="formRating__top">
                <h3 className="formRating__top-title">Leave some comments</h3>
                <div className="formRating__top-rate">
                    <Rating value={starValue} onChange={_onChangeStar} />
                    Rating
                </div>
            </div>
            <textarea
                className="formRating__text"
                rows={4}
                value={contentRating}
                onChange={_onChangeContentRating}
            ></textarea>
            <Button className="formRating__btn" type="submit" sizeBtn="small">
                Comment
            </Button>
        </form>
    );
};

export default FormRating;
