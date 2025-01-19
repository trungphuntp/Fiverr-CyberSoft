import React from "react";
import Button from "../Button/page";

const InputSearch = ({ placeholder, sizeBtn = "small", ...rest }) => {
    return (
        <form className="inputSearch ">
            <input
                className="inputSearch__search"
                type="text"
                placeholder={placeholder}
                {...rest}
            />
            <Button sizeBtn={sizeBtn} className="rounded-l-none hover:opacity-60 !h-full">
                Search
            </Button>
        </form>
    );
};

export default InputSearch;
