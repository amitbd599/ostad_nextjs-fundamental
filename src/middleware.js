import { NextRequest, NextResponse } from "next/server";

export default function middleware(req, res) {
  if (req.nextURL.pathName.startsWith("/app/product")) {
    console.log("middleware");
  } else if (req.nextURL.pathName.startsWith("/app/product")) {
    console.log("middleware");
  }
}

export const config = {
  matcher: ["/api/:path*"],
};
