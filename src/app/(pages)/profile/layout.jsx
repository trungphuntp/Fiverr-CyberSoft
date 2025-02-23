import ReduxProvider from "@/app/components/ReduxProvider/page";
import React from "react";

const layoutProfile = ({ children }) => {
    return <ReduxProvider>{children}</ReduxProvider>;
};

export default layoutProfile;
