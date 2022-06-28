import { NextResponse, NextRequest } from "next/server";
export async function middleware(req, ev) {
	const { pathname } = req.nextUrl;
	if (pathname == "/admin") {
		return NextResponse.redirect("https://admin-nayakayp-com.vercel.app");
	}
	return NextResponse.next();
}
