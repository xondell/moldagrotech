import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  const first = request.nextUrl.pathname.split("/").filter(Boolean)[0];
  headers.set("x-moldagrotech-locale", first === "ru" || first === "en" ? first : "ro");
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
