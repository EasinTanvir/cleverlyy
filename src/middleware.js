import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { isTokenExpired } from "./utils/tokenExpire";

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (token) {
    if (isTokenExpired(token.token)) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/subjects",
    "/subjects/info",
    "/info/:path*",
    "/progress",
    "/aichecking",
    "/notes",
    "/calender",
    "/forum",
  ],
};
