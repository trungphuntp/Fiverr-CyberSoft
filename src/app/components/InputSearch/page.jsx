"use client";
import PATH from "@/app/constants/path";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../Button/page";

const InputSearch = ({ placeholder, sizeBtn = "small", ...rest }) => {
    const router = useRouter();
    const [keyword, setKeyword] = useState("");

    // submit search
    const _onSubmit = (e) => {
        e?.stopPropagation();
        e?.preventDefault();
        router.push(`${PATH.SEARCH}?keyword=${keyword.trim()}`);
    };

    const _inputChange = (e) => {
        e?.stopPropagation();
        e?.preventDefault();
        setKeyword(e?.target?.value);
    };

    return (
        <form
            className="inputSearch "
            onSubmit={(e) => {
                _onSubmit(e);
            }}
        >
            <input
                className="inputSearch__search"
                type="text"
                placeholder={placeholder}
                onChange={(e) => {
                    _inputChange(e);
                }}
                {...rest}
            />
            <Button
                type="submit"
                sizeBtn={sizeBtn}
                className="rounded-l-none hover:opacity-60 !h-full"
            >
                Search
            </Button>
        </form>
    );
};

export default InputSearch;
