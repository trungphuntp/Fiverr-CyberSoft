import React from "react";

const HeaderAdmin = ({ children }) => {
  return (
    <div className="headingAdmin py-[12px] px-[20px] bg-[var(--primary-color)] text-white rounded-t-[20px] overflow-hidden">
      <h2 className="h2-admin capitalize text-[18px] font-[m500]">
        {children}
      </h2>
    </div>
  );
};

export default HeaderAdmin;
