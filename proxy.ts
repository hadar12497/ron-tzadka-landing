import { NextRequest, NextResponse } from "next/server";

const limorDomains = new Set([
  "limor-benjamin-workshop.vercel.app",
  "limor-tzadka-landing.vercel.app",
]);

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const { pathname } = request.nextUrl;

  if (limorDomains.has(host) && pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/limor";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
