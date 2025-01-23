"use client";
import React, { useEffect, useRef, useState } from "react";

const WorksPage = () => {
    const divRefs = useRef([]); // Tạo một ref mảng để tham chiếu nhiều div
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        divRefs.current.forEach((div, index) => {
            if (div) {
                if (index === activeIndex) {
                    // Nếu div có class "active", đặt height bằng scrollHeight
                    div.style.height = `${div.scrollHeight}px`;
                } else {
                    // Nếu không active, đặt height về giá trị cố định
                    div.style.height = "50px";
                }
            }
        });
    }, [activeIndex]); // Chạy effect khi activeIndex thay đổi

    return (
        <div>
            {[0, 1, 2].map((index) => (
                <div key={index} style={{ marginBottom: "20px" }}>
                    <button onClick={() => setActiveIndex(index)}>
                        {activeIndex === index ? "Thu gọn" : `Mở rộng Div ${index + 1}`}
                    </button>
                    <div
                        id="123321"
                        ref={(el) => {
                            console.log(el.id);
                            divRefs.current[index] = el;
                        }}
                        className={activeIndex === index ? "active" : ""}
                        style={{
                            width: "300px",
                            height: "50px", // Chiều cao mặc định
                            overflow: "hidden",
                            background: "lightblue",
                            transition: "height 0.5s ease",
                        }}
                    >
                        <p>Nội dung của Div {index + 1}</p>
                        <p>Thêm nội dung vào div {index + 1} để kiểm tra.</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WorksPage;
