import { NextResponse } from "next/server";

export const middleware = async (request) => {
    const cookies = request.cookies;
    const urlPathname = request.nextUrl.pathname;
    const originPathname = request.nextUrl.origin;

    if (urlPathname === "/profile" || urlPathname === "/admin") {
        if (!cookies.has("tokenuser") && !cookies.has(iduser)) {
            return NextResponse.redirect(originPathname + "/login");
        }
    }
    if (urlPathname === "/login" || urlPathname === "/register") {
        if (!!cookies.has("tokenuser") && !!cookies.has(iduser)) {
            return NextResponse.redirect(originPathname + "/");
        }
    }
    return NextResponse.next();
};

export const config = {
    matcher: ["/profile", "/login", "/register", "/admin"],
};
