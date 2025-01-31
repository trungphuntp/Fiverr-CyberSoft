import React from "react";
import Rating from "../Rating/page";
import Button from "../Button/page";

const FormRating = () => {
    return (
        <form className="formRating">
            <div className="formRating__top">
                <h3 className="formRating__top-title">Leave some comments</h3>
                <div className="formRating__top-rate">
                    <Rating defaultValue={4} />
                    Rating
                </div>
            </div>
            <textarea className="formRating__text" rows={4}></textarea>
            <Button className="formRating__btn" type="submit" sizeBtn="small">
                Comment
            </Button>
        </form>
    );
};

export default FormRating;
