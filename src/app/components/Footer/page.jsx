"use client";
import PATH from "@/app/constants/path";
import { useNavContext } from "@/app/contexts/NavContext/page";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const { refFooter } = useNavContext();
  return (
    <footer
      ref={refFooter}
      className="footer pt-[65px] border-[#e4e5e7] border-t-[1px] border-solid"
    >
      <div className="container">
        <div className="footer__content grid grid-cols-5 pb-[55px] max-lg:grid-cols-3 max-xs:grid-cols-2 max-xs:gap-8 max-xxs:grid-cols-1">
          <div className="footer__content-list">
            <h3 className="title">Categories</h3>
            <ul className="list ">
              <li>
                <Link className="item" href="#">
                  Graphics & Design
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Writing & Translation
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Video & Animation
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Music & Audio
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Programming & Tech
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Data
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Business
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__content-list">
            <h3 className="title">About</h3>
            <ul className="list">
              <li>
                <Link className="item" href="#">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Press & News
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Intellectual Property Claims
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Investor Relations
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__content-list">
            <h3 className="title">Support</h3>
            <ul className="list">
              <li>
                <Link className="item" href="#">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Trust & Safety
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Selling on Fiverr
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Buying on Fiverr
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__content-list">
            <h3 className="title">Communlty</h3>
            <ul className="list">
              <li>
                <Link className="item" href="#">
                  Events
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Forum
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Community Standards
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Podcast
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Affiliates
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Invite a Friend
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Become a Seller
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__content-list">
            <h3 className="title">Categories</h3>
            <ul className="list">
              <li>
                <Link className="item" href="#">
                  Fiverr Business
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Fiverr Pro
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Fiverr Studios
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Fiverr Logo Maker
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Fiverr Guides
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Get Inspired
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Fiverr Select
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  ClearVoice
                  <p className="item__subtext">Content Marketing</p>
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Fiverr Workspace
                  <p className="item__subtext">Invoice Software</p>
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Learn
                  <p className="item__subtext">Online Courses</p>
                </Link>
              </li>
              <li>
                <Link className="item" href="#">
                  Working Not Working
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom flex justify-between items-center max-lg:flex-col">
          <div className="footer__bottom-left flex items-center gap-10 pt-[20px] pb-[40px] max-lg:flex-col">
            <Link href={PATH.HOME}>
              <img className="w-[90px]" src="/logo.svg" alt="logo fiverr" />
            </Link>
            <p className="footerCopy text-[#b5b6ba]">
              © Fiverr International Ltd. 2024
            </p>
          </div>
          <div className="footer__bottom-right flex items-center gap-[65px] max-lg:flex-col  max-lg:pb-[30px]">
            <div className="socialIcons">
              <a href="#" className="socialIcons__item">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
              </a>
              <a href="#" className="socialIcons__item">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
              </a>
              <a href="#" className="socialIcons__item">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
              <a href="#" className="socialIcons__item">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
                </svg>
              </a>
              <a href="#" className="socialIcons__item">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>
            <div className="footerActions flex gap-[25px]">
              <button
                style={{ transitionDuration: "0.3s" }}
                className="rounded-full transition-all hover:bg-[#F5F5F5] h-[38px] px-[12px] cursor-pointer font-[m600] flex items-center gap-4"
              >
                <svg
                  className="h-[14px] w-[14px]"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
                </svg>
                English
              </button>
              <button
                style={{ transitionDuration: "0.3s" }}
                className="rounded-full transition-all hover:bg-[#F5F5F5] h-[38px] px-[12px] cursor-pointer font-[m600] flex items-center"
              >
                US$ USD
              </button>
              <button
                style={{ transitionDuration: "0.3s" }}
                className="hover:bg-[#F5F5F5] opacity-80 hover:opacity-100 transition-all h-[32px] w-[32px] rounded-[50%] border border-solid hover:border-[transparent] border-[var(--text-color-body-2)] flex justify-center items-center"
              >
                <svg
                  className="text-[var(--text-color-body-2)] h-[50%] w-[50%]"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
