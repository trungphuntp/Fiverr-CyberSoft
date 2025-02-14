import Image from "next/image";
import Button from "../Button/page";
import Rating from "../Rating/page";

const BigCardAvatar = ({ avt = "/default_img.jpg", name, role, saoCongViec, phone, danhGia }) => {
    return (
        <div className="BigCardAvatar">
            <Image
                className="BigCardAvatar__img"
                src={avt || "/default-avatar.jpg"}
                alt="img big card"
                height={110}
                width={110}
                sizes="(max-width: 576px) 90px"
            />
            <div className="BigCardAvatar__content">
                <h3 className="BigCardAvatar__content-name">{name || ""}</h3>
                <p className="BigCardAvatar__content-role">{role || ""}</p>
                <Rating
                    value={saoCongViec || 0}
                    disabled={true}
                    saoCongViec={saoCongViec || 0}
                    danhGia={danhGia || 0}
                />
                <Button
                    variant="outlineGrey"
                    linkOut={`tel:${phone || 0}`}
                    className="BigCardAvatar__content-btn"
                >
                    Contact Me
                </Button>
            </div>
        </div>
    );
};

export default BigCardAvatar;
