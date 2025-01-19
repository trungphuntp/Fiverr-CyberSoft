import React from "react";

const IconTextbox = ({ icon = "/checkedIcon.svg", title = "Title", children, ...rest }) => {
    return (
        <div className="IconTextbox " {...rest}>
            <div className="flex items-center gap-4">
                <img className="h-[24px] w-[24px] " src={icon} alt="icon Checked" />
                <h5 className="text-[1.8rem] font-[m700] leading-[1.2]">{title}</h5>
            </div>
            <p className="mt-[15px]">{children}</p>
        </div>
    );
};

export default IconTextbox;
