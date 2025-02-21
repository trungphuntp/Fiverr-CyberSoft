"use client";
import React, { useState } from "react";
import { Anchor } from "antd";

const { Link } = Anchor;

const AnchorAnt = ({ items = [] }) => {
  const [selectedKey, setSelectedKey] = useState(null);

  const handleClick = (key) => {
    // Toggle hiển thị nội dung: nhấn lần thứ hai ẩn đi
    setSelectedKey(selectedKey === key ? null : key);
  };

  // Tạo thanh Anchor nằm ngang
  return (
    <div className="rounded-md shadow w-full p-4 flex flex-col items-center justify-between">
      <Anchor
        direction="horizontal"
        affix={false}
        className="flex justify-between items-center"
      >
        {items.map((item) => (
          <div key={item.key} className="cursor-pointer">
            <Link
              href={item.href}
              title={
                <span onClick={() => handleClick(item.key)}>
                  {item.title}
                </span>
              }
            />
          </div>
        ))}
      </Anchor>
      {/* Hiển thị nội dung của mục được chọn dưới thanh Anchor */}
      {selectedKey && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          {items.find((item) => item.key === selectedKey)?.content}
        </div>
      )}
    </div>
  );
};

export default AnchorAnt;
