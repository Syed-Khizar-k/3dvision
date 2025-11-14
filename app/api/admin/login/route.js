import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json({ success: false });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  const response = NextResponse.json({ success: true });

  const isProd = process.env.NODE_ENV === "production";

  response.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: isProd,         // ❗ FALSE on localhost, TRUE on Vercel
    sameSite: isProd ? "none" : "lax", // ❗ NONE for Vercel, LAX for localhost
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}
