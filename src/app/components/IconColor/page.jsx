import React from "react";

const IconColor = ({
  children,
  bgColor = "#1dbf73",
  className = "",
  ...rest
}) => {
  return (
    <div
      className={`iconColor flex justify-center items-center h-[52px] w-[52px] rounded-full text-white ${className}`}
      style={{
        background: bgColor,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default IconColor;
