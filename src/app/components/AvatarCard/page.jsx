import Image from "next/image";
import React from "react";

const AvatarCard = ({ avt, role, name }) => {
    return (
        <div className="AvatarCard flex items-center gap-[10px] w-full">
            <Image
                src={avt || "/avatar_df.jpg"}
                alt="avatar"
                height={30}
                width={30}
                className="rounded-[50%]"
            />
            <div className="AvatarCard__content w-full">
                <h5 className="AvatarCard__content-role font-[m700] text-[1.6rem] break-words hover:underline">
                    {name || "Guest"}
                </h5>
                <p className="AvatarCard__content-name mt-[5px] text-[1.4rem] text-[var(--text-color-body-2)] font-[m600]">
                    {role || "Seller"}
                </p>
            </div>
        </div>
    );
};

export default AvatarCard;
