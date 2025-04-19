"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const BlogItem = ({ id, src, title, heading, text }) => {
  const handleClick = () => {
    const blogData = { title, heading, text, src };
    localStorage.setItem("blogData", JSON.stringify(blogData)); // Lưu vào localStorage
  };

  return (
    <div className="blog__itemPage">
      <Link href={`/blog/${id}`}>
        <div className="blog-list__item" onClick={handleClick}>
          <div className="blog-list__media">
            <Image
              className="blog-list__media__image"
              src={src}
              alt={title}
              width={300}
              height={200}
            />
          </div>
          <p className="blog-list__title">{title}</p>
          <h2 className="blog-list__heading">{heading}</h2>
          <p className="blog-list__text">{text}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
