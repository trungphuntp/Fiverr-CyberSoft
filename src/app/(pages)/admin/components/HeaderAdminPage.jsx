import PATH from "@/app/constants/path";
import Link from "next/link";
import React from "react";

const HeaderAdminPage = ({ isActiveNav, handleSetIsActiveNav }) => {
  const handleClickActiveNav = (e) => {
    e?.stopPropagation();
    e?.preventDefault();
    handleSetIsActiveNav?.(true);
  };

  return (
    <header
      className={`headerAdminPage z-[800] bg-black w-full h-[80px] fixed text-white hidden max-xl:block`}
    >
      <div className="container flex items-center justify-between !flex-row h-full">
        {/* hamberger menu */}
        <svg
          className=" max-xl:block cursor-pointer h-8 w-8 hover:text-[var(--primary-color)] text-[var( --text-color-header)] flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="currentColor"
          onClick={(e) => {
            handleClickActiveNav(e);
          }}
        >
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[3.2rem] font-[m700] text-center">
          Dashboard
        </h1>
        {/* go home button */}
        <Link href={PATH.HOME}>
          <svg
            className=" h-[28px] w-[28px] max-sm:h-[22px] max-sm:w-[22px] cursor-pointer hover:text-[var(--primary-color)]"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default HeaderAdminPage;
