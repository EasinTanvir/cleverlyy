import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request) {
  const cookieStore = await cookies();

  const loginSession = cookieStore.get("next-auth.session-token");

  if (!loginSession) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/subjects",
    "/resources/:path*",
    "/progress",
    "/aichecking",
    "/notes",
    "/calender",
    "/forum",
  ],
};
