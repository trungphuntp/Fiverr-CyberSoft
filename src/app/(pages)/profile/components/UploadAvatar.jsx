"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Profile from "../../../services/Profile";
import { useDispatch } from "react-redux";
import { updateAvatar } from "../../../store/reducers/authReducer"; // đảm bảo import đúng slice của bạn
import pencil_icon from "../../../../../public/pencil-icon.svg";

const UploadAvatar = ({ onUploadSuccess, avatarUrl }) => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleUpload = async () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("formFile", file); // Đảm bảo key là "formFile"

      try {
        const response = await Profile.postAvatar(file);
        const newAvatarUrl = response.data.content.avatar;
        // console.log("Avatar uploaded successfully:", newAvatarUrl);

        // Cập nhật avatar vào Redux qua action updateAvatar
        dispatch(updateAvatar(newAvatarUrl));

        // Gọi callback để truyền URL ảnh mới lên component cha nếu cần
        if (onUploadSuccess) {
          onUploadSuccess(newAvatarUrl);
        }
      } catch (error) {
        // console.error("Error uploading avatar:", error);
      }
    } else {
      // console.error("No file selected");
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click(); // Kích hoạt sự kiện click của input file
  };

  return (
    <div>
      {/* Ẩn input file nhưng vẫn giữ chức năng */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }} // Ẩn input file
        onChange={handleUpload} // Xử lý khi chọn file
      />
      {/* Avatar có thể click được */}
      <div
        onClick={handleAvatarClick}
        className="cursor-pointer flex flex-col items-center space-y-3"
      >
        {avatarUrl ? (
          <div className="avatar">
            <Image
              src={avatarUrl}
              alt="Avatar"
              width={128}
              height={128}
              className="rounded-full avatar-img "
            />
          </div>
        ) : (
          <div className="w-[128px] h-[128px] rounded-full bg-slate-300 flex justify-center items-center text-3xl text-white">
            U
          </div>
        )}
        <Image width={16} height={16} src={pencil_icon}></Image>
      </div>
    </div>
  );
};

export default UploadAvatar;
