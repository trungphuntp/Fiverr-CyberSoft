"use client";
import { deleteHireWorkById } from "@/app/actions/HireWorkActions";
import { uploadAvatar } from "@/app/actions/UserActions";
import FormEditProfile from "@/app/components/FormEditProfile/page";
import { STORAGE } from "@/app/constants/storage";
import { handleGetBooking, handleGetProfile, handleLogout } from "@/app/store/reducers/authReducer";
import { handleSetMessage } from "@/app/store/reducers/messageReducer";
import { methodToken } from "@/app/utils/Token";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsideProfileInfor from "./components/AsideProfileInfor";
import ProfileContent from "./components/ProfileContent";
import { useRouter } from "next/navigation";
import PATH from "@/app/constants/path";

const ProfilePage = () => {
    const [isShowModal, setIsShowModal] = useState(false);

    const dispatch = useDispatch();
    const router = useRouter();
    const { profile } = useSelector((state) => state.profile);
    const { bookingJob, email, phone, birthday, avatar, name, certification, skill } =
        profile || {};

    // delete the hired job
    const handleDeleteHiredJob = async (id) => {
        const res = await deleteHireWorkById(id);
        if (res?.statusCode === 200) {
            dispatch(handleSetMessage(["Delete the hired job successfully!", "success"]));
            dispatch(handleGetBooking());
        }
    };

    const handleSetShowModal = (state) => {
        setIsShowModal(state);
    };

    // Gửi ảnh lên API
    const handleChangeAvatar = async (linkImg) => {
        if (!linkImg) return;
        const res = await uploadAvatar(linkImg);
        if (res?.id) {
            dispatch(handleSetMessage(["Update profile successfully!", "success"]));
            dispatch(handleGetProfile(methodToken.get(STORAGE.idUser)));
        }
    };

    // profile Content Props
    const profileContentProps = {
        books: bookingJob || [],
    };

    // logout user
    const handleLogoutProfile = () => {
        // Gọi dispatch để logout
        dispatch(handleLogout());

        // Xóa thông tin trong Cookies
        methodToken.remove(STORAGE.token);
        methodToken.remove(STORAGE.idUser);

        // Chuyển hướng về trang chủ
        router.push(PATH.HOME);

        // Hiển thị thông báo logout thành công
        dispatch(handleSetMessage(["Logout success!", "success"]));
    };

    // Aside Profile Infor Props
    const asideProfileInfortProps = {
        email,
        phone,
        birthday,
        avatar,
        name,
        certification,
        skill,
        handleChangeAvatar,
        handleSetShowModal,
        handleLogoutProfile,
    };

    return (
        <main className="mainProfile pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)] relative">
            <div className="container my-8">
                <AsideProfileInfor {...asideProfileInfortProps} />
                <ProfileContent
                    handleDeleteHiredJob={handleDeleteHiredJob}
                    {...profileContentProps}
                />
            </div>
            <FormEditProfile
                profile={profile}
                isShowModal={isShowModal}
                handleSetShowModal={handleSetShowModal}
            />
        </main>
    );
};

export default ProfilePage;
