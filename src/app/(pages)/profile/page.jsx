"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Spin, Anchor } from "antd";
import linkedin_icon from "../../../../public/linkedin_icon.svg";
import google_icon from "../../../../public/google-icon.svg";
import github_icon from "../../../../public/github-icon.svg";
import instagram_icon from "../../../../public/instagram_icon.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation"; // <
import { handleSetMessage } from "../../store/reducers/messageReducer";
import ModalAnt from "./components/ModalAnt";
import HireWorkServices from "../../services/HireWorkServices";
import DetailCategoryWorkServices from "../../services/DetailCategoryWorkServices";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { profile, loading } = useSelector((state) => state.profile);
  // console.log(authState);
  const [hireWorkList, setHireWorkList] = useState([]);
  const [loadingHireWork, setLoadingHireWork] = useState(false);

  useEffect(() => {
    // Nếu cần call API ngay khi có profile
    if (profile) {
      fetchHireWork();
    }
  }, [profile]);

  // Hàm call API getMyHiredWork
  const fetchHireWork = () => {
    setLoadingHireWork(true);
    HireWorkServices.getMyHiredWork()
      .then((response) => {
        // API trả về dữ liệu trong response.data (hoặc tùy theo cấu trúc)
        // Giả sử response.data.content là mảng công việc
        // Hoặc nếu API trả về mảng gốc, ta dùng trực tiếp
        setHireWorkList(response.data.content || []);
        console.log("Danh sách công việc đã thuê:", response.data.content);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh sách công việc đã thuê:", error);
      })
      .finally(() => {
        setLoadingHireWork(false);
      });
  };
  // xóa HireWork
  const deleteHireWork = (id) => {
    HireWorkServices.deleteHireWorkById(id)
      .then((response) => {
        // Xóa thành công
        // Cập nhật lại danh sách công việc
        fetchHireWork();
        dispatch(handleSetMessage(["Xóa thành cồng", "success"]));
      })
      .catch((error) => {
        dispatch(handleSetMessage(["Xóa không thành cồng", "error"]));
        console.error("Lỗi khi xóa công việc đã thuê:", error);
      });
  };
  // đế trang chi tiết
  const handleViewDetail = (idWork) => {
    // Chuyển hướng đến /worksDetail/[idWork]
    router.push(`/worksDetail/${idWork}`);
  };
  if (loading.profile) {
    return <p>Đang tải dữ liệu...</p>;
  }

  return (
    <div className="MainProfileUser container  pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)]">
      {profile ? (
        <div className="grid contentProfile  mx-auto gap-x-4 grid-cols-3  mt-10 mb-10">
          {/* content-left */}
          <div className=" col-span-1">
            <div className="content-left flex flex-col items-center bg-gray-100 p-4 rounded-lg">
              <Avatar size={128} style={{ fontSize: "48px" }}>
                {profile.email ? profile.email.charAt(0).toUpperCase() : "?"}
              </Avatar>
              <p className="text text-3xl  font-semibold mt-2 border-b-2 border-gray-500">
                {profile.name}
              </p>
            </div>
            {/* profile */}
            <div className=" ">
              <div className="skill  bg-gray-100 p-4 space-y-6 ">
                <div className="flex content-text">
                  <h2 className="  text-3xl font-bold">Skill</h2>
                  <ModalAnt profile={profile} />
                </div>
                <p>
                  {" "}
                  {Array.isArray(profile.skill)
                    ? profile.skill.join(", ")
                    : profile.skill}
                </p>
              </div>
              <div className="education bg-gray-100 p-4 space-y-6 ">
                <div className="content-text">
                  <h2 className=" text-3xl font-bold">Education</h2>
                  <ModalAnt profile={profile} />
                </div>
                <p></p>
              </div>
              <div className="  certificate bg-gray-100 p-4  space-y-6">
                <div className="content-text ">
                  <h2 className=" text-3xl font-bold">Certificate</h2>
                  <ModalAnt profile={profile} />
                </div>
                <p> {profile.certification}</p>
              </div>
            </div>
            {/* Social */}
            <div className="social bg-gray-100 p-4 space-y-3 ">
              <h2 className="text-3xl font-bold  ">Linked Account</h2>
              <a
                className="flex justify-between "
                href="https://www.facebook.com/"
              >
                <Image src={linkedin_icon} width={16} height={16}></Image>
                <span> https://www.facebook.com</span>
              </a>
              <a className="flex justify-between " href="">
                <Image src={google_icon} width={16} height={16}></Image>
                <span> https://www.google.com</span>
              </a>{" "}
              <a className="flex justify-between " href="https://github.com/">
                <Image src={github_icon} width={16} height={16}></Image>
                <span> https://wwwgithub.com</span>
              </a>{" "}
              <a
                className="flex justify-between "
                href="https://www.instagram.com/"
              >
                <Image src={instagram_icon} width={16} height={16}></Image>
                <span> https://www.instagram.com</span>
              </a>
            </div>
          </div>
          {/* content-right */}
          <div className=" col-span-2 content-right  bg-gray-100 p-6 space-y-6 rounded-lg">
            <div className="w-full  text-2xl space-y-6">
              <div className="flex justify-between items-center">
                <h1 className=" description mb-2 text-3xl">Description</h1>

                <div className="-mt-8">
                  <ModalAnt profile={profile} />
                </div>
              </div>
              <div className=" flex space-x-16 ">
                <p className="font-semibold">Name:</p>
                <p className="text-2xl">{profile.name}</p>
              </div>

              <div className=" flex space-x-16 ">
                <p className="font-semibold">Email:</p>
                <p>{profile.email}</p>
              </div>

              <div className=" flex space-x-16 ">
                <p className="font-semibold">Phone:</p>
                <p>{profile.phone}</p>
              </div>
              <div className=" flex space-x-16 ">
                <p className="font-semibold">Birthday:</p>
                <p>{profile.birthday}</p>
              </div>

              <div className=" flex space-x-16 ">
                <p className="font-semibold">Gender:</p>
                <p>
                  {" "}
                  {profile.gender === true || profile.gender === "male"
                    ? "  Nam"
                    : "Nữ"}
                </p>
              </div>
            </div>
            <div className="HireWork ">
              <h2 className="text-3xl font-bold mb-8">Hire Work List</h2>
              {loadingHireWork ? (
                <Spin />
              ) : (
                <div>
                  {hireWorkList && hireWorkList.length > 0 ? (
                    hireWorkList.map((item, index) => (
                      <div
                        key={index}
                        className="mb-2 bg-white p-4 rounded-md flex items-start gap-4"
                      >
                        {/* Tuỳ vào cấu trúc dữ liệu item */}
                        <Image
                          src={item.congViec.hinhAnh}
                          width={160}
                          height={160}
                        ></Image>
                        <div className="contentHireWork">
                          <div className="flex justify-between mb-2">
                            <h2 className="text-2xl  font-bold">
                              {item.congViec.tenCongViec}
                            </h2>
                            <p> {item.ngayThue}</p>
                          </div>
                          <p className="textHireWork ">{item.congViec.moTa}</p>
                          <div className="mt-4 buttonHire text-right space-x-2">
                            <button
                              onClick={() => handleViewDetail(item.congViec.id)}
                              className="py-2 px-6 rounded-md text-white bg-blue-500 font-semibold"
                            >
                              Chi tiết
                            </button>
                            <button
                              onClick={() => deleteHireWork(item.id)}
                              className="py-2 px-6 rounded-md bg-red-500 text-white font-semibold "
                            >
                              Xóa
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>Chưa có công việc nào được thuê.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Spin />
      )}
    </div>
  );
};

export default ProfilePage;
