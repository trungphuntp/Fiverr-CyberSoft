"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const BlogDetailPage = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [blogData, setBlogData] = useState({
    title: "",
    heading: "",
    text: " ",
    src: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("blogData");
    if (storedData) {
      setBlogData(JSON.parse(storedData));
    }
  }, []);

  return (
    <main className="BlogDetail container py-20 pt-[calc(var(--height-header)_+_40px)] max-xl:pt-[var(--height-header)]">
      <div className=" flex blogDetail flex-col items-center justify-center">
        <p className="text-xl blogDetail__title">{blogData.title}</p>
        <h1 className="text-3xl font-bold blogDetail__heading">
          {blogData.heading}
        </h1>
        <div className="flex justify-center items-center space-x-4 mb-4">
          <p className="text-xl font-bold ">By Fiverr Team</p>
          <span>|</span>
          <p className="text-xl font-bold "> September 18, 2024</p>
        </div>
        {blogData.src ? (
          <Image
            src={blogData.src}
            alt={blogData.title}
            width={775}
            height={515}
          />
        ) : (
          <p>Hình ảnh không khả dụng</p>
        )}
          <p className="text-xl blogDetail__text">{blogData.text}</p>
        <div>
          <p className="blogDetail__content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            dolores veritatis facere aliquam eligendi laboriosam dolor
            doloremque tempora tempore beatae iusto alias omnis quam
            necessitatibus magnam obcaecati ex excepturi hic voluptatem unde,
            illum optio eius sapiente enim. Sapiente, fugiat doloremque
            aspernatur dolore at quam, quasi autem error suscipit ipsum cum
            fugit? Quibusdam modi ipsam aperiam tempore officiis perspiciatis!
            Aliquam odit molestias temporibus. Hic sint est doloribus sequi
            laboriosam consectetur eum quidem, dolor cupiditate, magnam error,
            incidunt impedit fuga vero iusto id earum architecto optio quis
            obcaecati voluptate magni quaerat inventore itaque! Sequi nihil
            maiores esse. Laboriosam sapiente odio vitae eaque!{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default BlogDetailPage;
