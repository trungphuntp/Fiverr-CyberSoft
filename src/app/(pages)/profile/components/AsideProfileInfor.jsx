import { formatDate } from "@/app/utils/format";
import { Divider } from "antd";
import Image from "next/image";
import React from "react";

const AsideProfileInfor = ({
    handleSetShowModal,
    email,
    phone,
    birthday,
    name,
    certification,
    skill,
    avatar,
    handleChangeAvatar,
    handleLogoutProfile,
}) => {
    const handleShowEdit = (e) => {
        e?.stopPropagation();
        e?.preventDefault();
        handleSetShowModal?.(true);
    };

    const _onChangeImg = (e) => {
        const file = e.target.files ? e.target.files[0] : undefined;
        handleChangeAvatar?.(file);
    };

    const _onLogout = (e) => {
        e?.preventDefault();
        e?.stopPropagation();
        handleLogoutProfile?.();
    };

    return (
        <aside className="profileInfor">
            <div className="cardInforProfile">
                <div className="cardInforProfile__avatar">
                    {/* exit icon */}
                    <svg
                        onClick={(e) => {
                            _onLogout(e);
                        }}
                        className="exitIcon h-[16px] w-[16px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                    >
                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                    </svg>
                    {/* avatar */}
                    <div className="cardInforProfile__avatar-img">
                        <div className="avatarUser__wrapper">
                            <Image
                                className="avatar"
                                src={!!avatar ? avatar : "/default-avatar.jpg"}
                                height={150}
                                width={150}
                                alt="avatar"
                            />
                            <input
                                className="avatarInput"
                                type="file"
                                accept="image/*"
                                onChange={_onChangeImg}
                            />
                        </div>
                        {/* name */}
                        <p className="emailUser">
                            {name || ""}
                            <svg
                                onClick={handleShowEdit}
                                className="editIcon h-[16px] w-[16px]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                            >
                                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                            </svg>
                        </p>
                    </div>
                </div>
                <Divider />
                <div className="cardInforProfile__content">
                    <div className="item">
                        <span className="title">
                            <svg
                                className="h-[16px] w-[16px]"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                            </svg>
                            Country
                        </span>
                        <span className="infor hightlight">
                            <Image src={"/vn-icon.svg"} height={16} width={16} alt="vietnam" />
                            Vietnam
                        </span>
                    </div>
                    <div className="item">
                        <span className="title">
                            <svg
                                className="h-[16px] w-[16px]"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                            </svg>
                            Join
                        </span>
                        <span className="infor hightlight">{formatDate(new Date())}</span>
                    </div>
                </div>
            </div>
            <div className="cardInforProfile">
                <div className="cardInforProfile__infor">
                    <div className="cardInforProfile__title">
                        <h5 className="title">Description</h5>
                        <svg
                            onClick={handleShowEdit}
                            className="editIcon h-[16px] w-[16px]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                        >
                            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                        </svg>
                    </div>
                    <div className="cardInforProfile__content">
                        {/* name */}
                        <div className="item">
                            <span className="title">Email:</span>
                            <span className="infor hightlight">{email || ""}</span>
                        </div>
                        <div className="item">
                            <span className="title">Phone:</span>
                            <span className="infor hightlight">{phone || ""}</span>
                        </div>
                        <div className="item">
                            <span className="title">Birthday:</span>
                            <span className="infor hightlight">{birthday || "1/1/2000"}</span>
                        </div>
                    </div>
                </div>
                <Divider />
                {/* Language */}
                <div className="cardInforProfile__infor">
                    <div className="cardInforProfile__title">
                        <h5 className="title">Languages</h5>
                    </div>
                    <div className="cardInforProfile__content">
                        <div className="item">
                            <span className="infor hightlight">English </span>
                        </div>
                        <div className="item">
                            <span className="infor hightlight">Vietnamese</span>
                        </div>
                    </div>
                </div>
                <Divider />
                {/* Skills */}
                <div className="cardInforProfile__infor">
                    <div className="cardInforProfile__title">
                        <h5 className="title">Skills</h5>
                        <svg
                            onClick={handleShowEdit}
                            className="editIcon h-[16px] w-[16px]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                        >
                            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                        </svg>
                    </div>
                    <div className="cardInforProfile__content">
                        {!!skill?.length > 0 ? (
                            skill?.map((skillItem, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <span className="infor hightlight">{skillItem || ""}</span>
                                    </div>
                                );
                            })
                        ) : (
                            <>
                                <div className="item">
                                    <span className="infor hightlight"></span>
                                </div>
                                <div className="item">
                                    <span className="infor hightlight"></span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <Divider />
                {/* Education */}
                <div className="cardInforProfile__infor">
                    <div className="cardInforProfile__title">
                        <h5 className="title">Education</h5>
                        <svg
                            onClick={handleShowEdit}
                            className="editIcon h-[16px] w-[16px]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                        >
                            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                        </svg>
                    </div>
                    <div className="cardInforProfile__content">
                        <div className="item">
                            <span className="infor hightlight">CFD circle </span>
                        </div>
                        <div className="item">
                            <span className="infor hightlight">CYBERSOFT</span>
                        </div>
                    </div>
                </div>
                <Divider />
                {/* Certification */}
                <div className="cardInforProfile__infor">
                    <div className="cardInforProfile__title">
                        <h5 className="title">Certification</h5>
                        <svg
                            onClick={handleShowEdit}
                            className="editIcon h-[16px] w-[16px]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                        >
                            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                        </svg>
                    </div>
                    <div className="cardInforProfile__content">
                        {!!certification?.length > 0 ? (
                            certification?.map((certiItem, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <span className="infor hightlight">{certiItem || ""}</span>
                                    </div>
                                );
                            })
                        ) : (
                            <>
                                <div className="item">
                                    <span className="infor hightlight"> </span>
                                </div>
                                <div className="item">
                                    <span className="infor hightlight"></span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="cardInforProfile">
                <div className="cardInforProfile__infor">
                    <div className="cardInforProfile__title">
                        <h5 className="title">Linked Accounts</h5>
                    </div>
                    <div className="cardInforProfile__content">
                        {/* facebook */}
                        <div className="item">
                            <a
                                href="https://www.facebook.com/trungphuntp/"
                                target="_blank"
                                className="infor hightlight link"
                            >
                                <svg
                                    className="h-[16px] w-[16px]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                                </svg>
                                Facebook
                            </a>
                        </div>
                        {/* github */}
                        <div className="item">
                            <a
                                href="https://github.com/trungphuntp"
                                target="_blank"
                                className="infor hightlight link"
                            >
                                <svg
                                    className="h-[16px] w-[16px]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 496 512"
                                >
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </svg>
                                Github
                            </a>
                        </div>
                        {/* Google */}
                        <div className="item">
                            <a
                                href="https://www.google.com.vn/"
                                target="_blank"
                                className="infor hightlight link"
                            >
                                <svg
                                    className="h-[16px] w-[16px]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 488 512"
                                >
                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                </svg>
                                Google
                            </a>
                        </div>
                        {/* Twitter */}
                        <div className="item">
                            <a
                                href="https://x.com/"
                                target="_blank"
                                className="infor hightlight link"
                            >
                                <svg
                                    className="h-[16px] w-[16px]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                                </svg>
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default AsideProfileInfor;
