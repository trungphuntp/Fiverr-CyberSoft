import { adminTab } from "@/app/constants/general";
import PATH from "@/app/constants/path";
import Link from "next/link";
import React from "react";

const AdminTabs = ({
  isTabActive,
  handleSetTabActive,
  isActiveNav,
  handleSetIsActiveNav,
}) => {
  const _onChangeTab = (e, activeTab) => {
    e?.stopPropagation();
    e?.preventDefault();
    handleSetTabActive?.(activeTab);
    handleSetIsActiveNav?.(false);
  };
  const handleCloseNav = (e) => {
    e?.stopPropagation();
    e?.preventDefault();
    handleSetIsActiveNav?.(false);
  };

  return (
    <div className={`adminTabs ${isActiveNav ? "isActive" : ""}`}>
      <div className="adminNav pt-[90px] absolute z-10 bg-white h-full px-[30px]">
        <div className="adminTabs__top">
          <h1 className="adminTabs__top-title"> Navigation</h1>
        </div>
        <div className="adminTabs__list">
          <ul className="listMenu">
            <li>
              <a
                onClick={(e) => {
                  _onChangeTab(e, adminTab.users);
                }}
                className={`listMenu__item ${
                  isTabActive === adminTab.users ? "active" : ""
                }`}
                href="#"
              >
                Manage users
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  _onChangeTab(e, adminTab.works);
                }}
                className={`listMenu__item ${
                  isTabActive === adminTab.works ? "active" : ""
                }`}
                href="#"
              >
                Manage works
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  _onChangeTab(e, adminTab.category);
                }}
                className={`listMenu__item ${
                  isTabActive === adminTab.category ? "active" : ""
                }`}
                href="#"
              >
                Manage job categories
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  _onChangeTab(e, adminTab.detailCategory);
                }}
                className={`listMenu__item ${
                  isTabActive === adminTab.detailCategory ? "active" : ""
                }`}
                href="#"
              >
                Manage services
              </a>
            </li>
          </ul>
        </div>

        {/* go home button */}
        <Link href={PATH.HOME}>
          <svg
            className=" h-[28px] w-[28px] max-sm:h-[22px] max-sm:w-[22px] cursor-pointer hover:text-[var(--primary-color)] absolute top-[4%] max-xl:hidden block"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
          </svg>
        </Link>

        {/* close nav button */}
        <svg
          className="text-black h-[28px] w-[28px] absolute top-[5%] right-[5%] z-30 cursor-pointer hover:opacity-70 max-xl:block hidden"
          onClick={() => {
            handleCloseNav();
          }}
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </div>
      {/* opacity */}
      <div
        className="opacitynav"
        onClick={(e) => {
          handleCloseNav(e);
        }}
      ></div>
    </div>
  );
};

export default AdminTabs;
