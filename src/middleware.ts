import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest): NextResponse => {
  const cookies = request.cookies;
  const urlPathname = request.nextUrl.pathname;

  // Check route cần đăng nhập
  if (urlPathname === "/profile" || urlPathname === "/admin") {
    if (!cookies.has("tokenuser") && !cookies.has("iduser")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // gắn header để lấy url hiện tại
  const headers = new Headers(request.headers);
  headers.set("x-current-path", request.nextUrl.pathname);

  return NextResponse.next({ headers });
};
