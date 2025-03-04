"use client";
import ReduxProvider from "@/app/components/ReduxProvider/page";
import PATH from "@/app/constants/path";
import { handleSetMessage } from "@/app/store/reducers/messageReducer";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const LayoutAdmin = ({ children }) => {
    const { profile } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const router = useRouter();
    if (!!profile?.role !== "ADMIN") {
        router.push(PATH.HOME);
        dispatch(
            handleSetMessage(["You do not have permission to access the admin page", "error"])
        );
    }
    return <ReduxProvider>{children}</ReduxProvider>;
};

export default LayoutAdmin;
