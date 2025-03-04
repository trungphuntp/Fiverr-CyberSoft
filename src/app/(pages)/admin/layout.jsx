import ReduxProvider from "@/app/components/ReduxProvider/page";
import React from "react";

const LayoutAdmin = ({ children }) => {
    return <ReduxProvider>{children}</ReduxProvider>;
};

export default LayoutAdmin;
