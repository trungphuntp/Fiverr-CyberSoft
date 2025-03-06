import { NextResponse } from "next/server";

export const middleware = async (request) => {
    const cookies = request.cookies;
    const urlPathname = request.nextUrl.pathname;

    if (urlPathname === "/profile" || urlPathname === "/admin") {
        if (!cookies.has("tokenuser") && !cookies.has("iduser")) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }
    // if (urlPathname === "/login" || urlPathname === "/register") {
    //     if (cookies.has("tokenuser") && cookies.has("iduser")) {
    //         return NextResponse.redirect(new URL("/", request.url));
    //     }
    // }
    return NextResponse.next();
};

export const config = {
    matcher: ["/profile", "/login", "/register", "/admin", "/"],
};
