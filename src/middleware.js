import { NextResponse } from "next/server";
import { STORAGE } from "./app/constants/storage";
import { methodToken } from "./app/utils/Token";
import PATH from "./app/constants/path";

export const middleware = async (request) => {
    const cookies = request.cookies;
    const urlPathname = request.nextUrl.pathname;
    const originPathname = request.nextUrl.origin;

    if (urlPathname === PATH.PROFILE) {
        if (!cookies.has(STORAGE.token) && !cookies.has(STORAGE.idUser)) {
            return NextResponse.redirect(originPathname + PATH.LOGIN);
        }
    }

    if (urlPathname === PATH.LOGIN || urlPathname === PATH.REGISTER) {
        if (!!cookies.has(STORAGE.token) && !!cookies.has(STORAGE.idUser)) {
            return NextResponse.redirect(originPathname + PATH.HOME);
        }
    }
    return NextResponse.next();
};

export const config = {
    matcher: [PATH.LOGIN, PATH.REGISTER],
};
