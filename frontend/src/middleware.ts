import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const refreshToken = req.cookies.get("refreshToken")?.value;

  if (!refreshToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!login|register|api|_next/static|_next/image|favicon.ico).*)"],
};
