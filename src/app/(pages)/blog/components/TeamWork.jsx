import Image from "next/image";
import React from "react";

const TeamWork = ({ width, height, src, text, title, heading }) => {
  return (
    <div className="blog__team   flex justify-center items-center ">
      <div className="blog__team__left">
        <Image
          className="blog__team__img cursor-pointer"
          style={{ width: "420px", height: "420px" }}
          src={src}
          alt="fiverr"
        ></Image>
      </div>
      <div className="blog__team__right  ">
        <div className="blog__team__content">
          <p className="blog__team__title">{title}</p>
          <h2 className="blog__team__heading cursor-pointer">{heading}</h2>
          <p className="blog__team__text">{text} </p>
        </div>
      </div>
    </div>
  );
};

export default TeamWork;
