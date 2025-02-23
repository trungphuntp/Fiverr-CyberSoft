import Image from "next/image";
import React from "react";

const BlogItem = ({ src, title, heading, text }) => {
  return (
    <div className="mt-20">
      <div className="blog-list__item ">
        <Image className="blog-list__image " src={src} alt={title} />
        <p className="blog-list__title">{title}</p>
        <h2 className="blog-list__heading">{heading}</h2>
        <p className="blog-list__text">{text}</p>
      </div>
    </div>
  );
};

export default BlogItem;
