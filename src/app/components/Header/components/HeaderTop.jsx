import PATH from "@/app/constants/path";
import { useNavContext } from "@/app/contexts/NavContext/page";
import Link from "next/link";
import Button from "../../Button/page";
import InputSearch from "../../InputSearch/page";
import { methodToken } from "@/app/utils/Token";
import Cookies from "js-cookie";

import { STORAGE } from "@/app/constants/storage";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  handleGetBooking,
  handleGetProfile,
  handleLogout,
} from "@/app/store/reducers/authReducer";
import { useMessageContext } from "../../MessageProvider/page";
import {
  handleResetMessage,
  handleSetMessage,
} from "@/app/store/reducers/messageReducer";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const listIdHeader = {
  lang: "langheader",
};

const HeaderTop = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathName = usePathname();
  const searchParam = useSearchParams();

  const [avatarDropdown, setAvatarDropdown] = useState(false);
  const { handleSetActiveNav } = useNavContext();

  const { profile } = useSelector((state) => state.profile);

  const { avatar, role } = profile || {};
  const [isLogined, setIsLogined] = useState(false);

  const { message, typeMessage } = useSelector((state) => state.message);
  const { messageAPI } = useMessageContext();

  const [isDropDown, setIsDropDown] = useState([]);
  const handleSetIsDropDown = (id) => {
    setIsDropDown((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // message config
  useEffect(() => {
    if (!!message) {
      switch (typeMessage) {
        case "success":
          messageAPI.success(message);
          break;
        case "error":
          messageAPI.error(message);
          break;
        case "warning":
          messageAPI.warning(message);
          break;
        default:
          break;
      }

      dispatch(handleResetMessage());
    }
  }, [message]);

  //  get profile when have token
  useEffect(() => {
    const getProfile = async (idUser) => {
      const res = await dispatch(handleGetProfile(idUser)).unwrap();
      if (!!res?.id) {
        dispatch(handleSetMessage(["Login success!", "success"]));
        dispatch(handleGetBooking());
        return res;
      }
    };

    if (methodToken.get(STORAGE.token) && methodToken.get(STORAGE.idUser)) {
      const idUser = methodToken.get(STORAGE.idUser);
      getProfile(idUser);
    }
  }, []);

  // check login
  useEffect(() => {
    if (
      methodToken.get(STORAGE.token) &&
      methodToken.get(STORAGE.idUser) &&
      !!profile
    ) {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  }, [
    profile,
    methodToken.get(STORAGE.token),
    methodToken.get(STORAGE.idUser),
  ]);

  // show nav
  const _onShowNav = () => {
    document.body.classList.add("--disable-scroll");
    handleSetActiveNav(true);
  };
  // dropdown language
  const _toggleDropDown = (id) => {
    handleSetIsDropDown?.(id);
  };

  // dropdown avatar when logined
  const handleShowDropdownAvatar = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setAvatarDropdown((prev) => !prev);
  };
  // reset avatarDropdown
  useEffect(() => {
    setAvatarDropdown(false);
  }, [pathName, searchParam]);

  // logout user
  const _OnclickLogout = (e) => {
    e?.preventDefault();
    e?.stopPropagation();

    // Gọi dispatch để logout
    router.push(PATH.HOME);
    dispatch(handleLogout());

    // Chuyển hướng về trang chủ

    // Hiển thị thông báo logout thành công
    dispatch(handleSetMessage(["Logout success!", "success"]));
  };

  return (
    <div className="container">
      <div className="header__top h-[var(--height-header)] flex justify-between items-center">
        <div className="header__top-left flex items-center max-sm:w-full ">
          {/* hamberger menu */}
          <svg
            onClick={() => {
              _onShowNav();
            }}
            className="mr-6 hidden max-xl:block cursor-pointer h-8 w-8 hover:text-[var(--primary-color)] text-[var( --text-color-header)] flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentColor"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
          <Link href={PATH.HOME} className="mr-[40px] w-[90px] flex-shrink-0">
            <img src="/logo.svg" alt="logo" />
          </Link>

          {/* search header */}
          <div className="max-w-[295px] h-[42px] max-lg:h-[38px] max-sm:max-w-full max-sm:w-full max-md:hidden">
            <InputSearch placeholder="Find Services" />
          </div>
        </div>
        <div className="header__top-right flex">
          <ul className="actions flex max-xl:hidden">
            <li>
              <a className="item active" href="#">
                Fiverr Business
              </a>
            </li>
            <li>
              <Link className="item " href={PATH.BLOG}>
                Blog
              </Link>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e?.preventDefault();
                  e?.stopPropagation();
                  _toggleDropDown(e.target.id);
                }}
                className="item"
                id={listIdHeader.lang}
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
                </svg>
                English
                <svg
                  className="h-[16px] w-[16px]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
              </a>
              <ul
                className={`itemDropdown ${
                  !!isDropDown?.length > 0 &&
                  isDropDown?.includes(listIdHeader.lang)
                    ? "active"
                    : ""
                }`}
              >
                <li className="itemDropdown_item">Japanese</li>
                <li className="itemDropdown_item">French</li>
                <li className="itemDropdown_item">Vietnamese</li>
              </ul>
            </li>
            <li>
              <a className="item" href="#">
                US$ USD
              </a>
            </li>
            <li>
              <a className="item" href="#">
                Become a Seller
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-2 max-sm:hidden">
            {!isLogined ? (
              <>
                <Button variant="text" sizeBtn="small" linkIn={PATH.LOGIN}>
                  Sign in
                </Button>
                <Button
                  variant="outline"
                  sizeBtn="small"
                  linkIn={PATH.REGISTER}
                >
                  Join
                </Button>
              </>
            ) : (
              <div
                className="avatarLoginedWrapper"
                onClick={handleShowDropdownAvatar}
              >
                <div className="avatarLogin">
                  <Image
                    src={!!avatar ? avatar : "/default-avatar.jpg"}
                    alt="avatar icon"
                    height={40}
                    width={40}
                  />
                </div>
                <div
                  className={`avatarLoginedWrapper__dropdown ${
                    !!avatarDropdown ? "active" : ""
                  }`}
                >
                  <Link href={PATH.PROFILE}>Account Details</Link>
                  {(role === "Admin" ||
                    role === "admin" ||
                    role === "ADMIN") && (
                    <Link href={PATH.ADMIN}>Access Admin Page</Link>
                  )}
                  <a onClick={_OnclickLogout} href="#">
                    Sign out
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
