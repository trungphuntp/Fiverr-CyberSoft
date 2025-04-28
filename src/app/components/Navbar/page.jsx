"use client";
import { getMenuCategory } from "@/app/actions/WorksActions";
import PATH from "@/app/constants/path";
import { useNavContext } from "@/app/contexts/NavContext/page";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "../Button/page";
import InputSearch from "../InputSearch/page";
import ComponentLoading from "../Loading/page";
import { useDispatch, useSelector } from "react-redux";
import { STORAGE } from "@/app/constants/storage";
import { methodToken } from "@/app/utils/Token";
import NavLoggedAvatar from "../NavLoggedAvatar/page";
import { handleLogout } from "@/app/store/reducers/authReducer";
import { handleSetMessage } from "@/app/store/reducers/messageReducer";

const listIdNav = {
  category: "categoryNav",
  lang: "langNav",
};

const Navbar = () => {
  const pathName = usePathname();
  const searchParam = useSearchParams();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  const { avatar, name, email } = profile || [];
  const { isActiveNav, handleSetActiveNav } = useNavContext();
  const [isDropDownItem, setisDropDownItem] = useState([]);
  const [isLogined, setIsLogined] = useState(false);
  const router = useRouter();
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

  // API categoryAll
  const {
    data: categoryWorksAPI,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["categoryWork"],
    queryFn: getMenuCategory,
    staleTime: 60000,
    cacheTime: 3600000,
  });

  // ref của các item dropdown
  const refDropDown = useRef({});

  // close Nav
  const _onCloseNav = () => {
    document.body.classList.remove("--disable-scroll");
    handleSetActiveNav?.(false);
  };

  useEffect(() => {
    _onCloseNav();
  }, [pathName, searchParam]);

  // close nav when resize 1280
  useEffect(() => {
    const handleSetSize = (e) => {
      if (window.innerWidth >= 1280) {
        _onCloseNav();
      }
    };

    window.addEventListener("resize", handleSetSize);

    return () => {
      window.removeEventListener("resize", handleSetSize);
    };
  }, []);

  // toggle active class dropdown
  const _toggleDropDownActive = (id) => {
    handleSetIsDropDown?.(id);
  };

  // check active Item Nav
  const _handleSetActiveItem = (id) => {
    setisDropDownItem((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // xử lí dropdown item trên nav
  useEffect(() => {
    Object.keys(refDropDown.current).forEach((item) => {
      if (refDropDown.current[item].classList.contains("active")) {
        refDropDown.current[
          item
        ].style.height = `${refDropDown.current[item].scrollHeight}px`;
      } else {
        refDropDown.current[item].style.height = `0px`;
      }
    });
  }, [isDropDownItem]);

  // logout user
  const _OnclickLogout = () => {
    router.push(PATH.HOME);
    dispatch(handleLogout());
    dispatch(handleSetMessage(["Logout success!", "success"]));
    _onCloseNav();
  };

  return (
    <nav className={`navbar ${isActiveNav ? "active" : ""}`}>
      <div
        className="navbar__overlay"
        onClick={() => {
          _onCloseNav();
        }}
      ></div>
      <div className="navbar__content">
        <div className="navbar__content-account">
          {!!isLogined ? (
            <>
              <NavLoggedAvatar
                avatar={avatar}
                email={email}
                name={name}
                logout={_OnclickLogout}
              />
            </>
          ) : (
            <>
              <Button linkIn={PATH.LOGIN} variant="text" className="w-1/2">
                Sign in
              </Button>
              <Button
                linkIn={PATH.REGISTER}
                variant="outline"
                className="w-1/2"
              >
                Join
              </Button>
            </>
          )}
        </div>
        <ul className="navbar__content-list">
          <li>
            <Link className="item active" href="#">
              Fiverr Pro
            </Link>
          </li>
          <li>
            <Link className="item" href="#">
              Explore
            </Link>
          </li>
          <li>
            <Link
              className="item"
              id={listIdNav.category}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                _handleSetActiveItem?.(e.target.id);
                _toggleDropDownActive(e.target.id);
              }}
              href="#"
            >
              category
              <svg
                className="h-[16px] w-[16px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512"
              >
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
              </svg>
            </Link>
            <ul
              className={`itemDropdown ${
                isDropDown.includes(listIdNav.category) ? "active" : ""
              }`}
              ref={(el) => {
                refDropDown.current[listIdNav.category] = el;
              }}
            >
              {isLoading && <ComponentLoading />}
              {categoryWorksAPI?.length > 0 &&
                !isLoading &&
                categoryWorksAPI?.map((item, index) => {
                  const linkDetailCate = PATH.WORKS_CATEGORY + `/${item.id}`;
                  return (
                    <li className="itemDropdown__item" key={item?.id || index}>
                      <Link href={`${linkDetailCate}`}>
                        {item?.tenLoaiCongViec}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </li>
          <li>
            <Link
              className="item"
              id={listIdNav.lang}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                _handleSetActiveItem?.(e.target.id);
                _toggleDropDownActive(e.target.id);
              }}
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[16px] w-[16px]"
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
            </Link>
            <ul
              className={`itemDropdown ${
                isDropDown.includes(listIdNav.lang) ? "active" : ""
              }`}
              ref={(el) => {
                refDropDown.current[listIdNav.lang] = el;
              }}
            >
              <li className="itemDropdown__item">French</li>
              <li className="itemDropdown__item">Japanese</li>
              <li className="itemDropdown__item">Vietnamese</li>
            </ul>
          </li>
          <li>
            <Link className="item" href="#">
              US$ USD
            </Link>
          </li>
          <li>
            <Link className="item" href="#">
              Become a Seller
            </Link>
          </li>
        </ul>
        <div className="navbar__content-search h-[42px] mt-[20px] ">
          <InputSearch placeholder="Find Services" />
        </div>
        <Link
          href={PATH.ADMIN}
          className="mt-4 text-[20px] text-red-400 font-[m700] block text-center hover:opacity-70"
        >
          Access Admin Page
        </Link>
        {/* close */}
        <svg
          className="navbar__content-close text-black"
          onClick={() => {
            _onCloseNav();
          }}
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
