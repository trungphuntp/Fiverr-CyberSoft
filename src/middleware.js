import { NextResponse } from "next/server";
import { STORAGE } from "./app/constants/storage";
import { methodToken } from "./app/utils/Token";
import PATH from "./app/constants/path";

export const middleware = async (request) => {
    const cookies = request.cookies;
    const urlPathname = request.nextUrl.pathname;
    const originPathname = request.nextUrl.origin;

    // // Kiểm tra route người dùng đang truy cập
    // if (pathname === "/profile") {
    //     // Trang profile chỉ cho phép truy cập nếu đã đăng nhập
    //     if (!tokenUser) {
    //         return redirect(PATH.LOGIN);
    //     }
    // }

    if (urlPathname === PATH.LOGIN || urlPathname === PATH.REGISTER) {
        // Trang đăng nhập và đăng ký chỉ cho phép truy cập nếu chưa đăng nhập
        if (!!cookies.has(STORAGE.token)) {
            return NextResponse.redirect(originPathname + PATH.HOME);
        }
    }
    return NextResponse.next();
};

export const config = {
    matcher: [PATH.LOGIN, PATH.REGISTER],
};
