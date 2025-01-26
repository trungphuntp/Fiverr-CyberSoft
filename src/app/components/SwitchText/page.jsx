"use client";
import { Switch } from "antd";
import { useState } from "react";

const SwitchText = ({ id, children }) => {
    const [active, setActive] = useState(false);

    const _toggleActiveSwitch = () => {
        setActive((prev) => !prev);
    };

    return (
        <div
            className="SwitchText flex items-center justify-center gap-[12px]"
            onClick={(e) => {
                _toggleActiveSwitch();
            }}
        >
            <Switch className="SwitchText__switch" size="small" id={id} checked={active} />
            <p className="SwitchText__text">{children}</p>
        </div>
    );
};

export default SwitchText;
