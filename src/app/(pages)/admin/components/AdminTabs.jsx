"use client";
import { adminTab } from "@/app/constants/general";
import React from "react";

const AdminTabs = ({ isTabActive, handleSetTabActive }) => {
    const _onChangeTab = (e, activeTab) => {
        e?.stopPropagation();
        e?.preventDefault();
        handleSetTabActive?.(activeTab);
    };

    return (
        <div className="adminTabs">
            <div className="adminTabs__top">
                <h1 className="adminTabs__top-title">Admin</h1>
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
        </div>
    );
};

export default AdminTabs;
