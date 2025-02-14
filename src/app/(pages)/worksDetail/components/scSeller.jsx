import BigCardAvatar from "@/app/components/BigCardAvatar/page";
import React from "react";

const ScSeller = ({ avatar, name, role, saoCongViec, danhGia, phone }) => {
    return (
        <section className="scSeller pt-[50px]">
            <h2 className="title_2 mb-[30px]">About The Seller</h2>
            <BigCardAvatar
                avt={avatar || null}
                name={name || ""}
                role={role || ""}
                saoCongViec={saoCongViec || 0}
                danhGia={danhGia || 0}
                phone={phone || 0}
            />
        </section>
    );
};

export default ScSeller;
