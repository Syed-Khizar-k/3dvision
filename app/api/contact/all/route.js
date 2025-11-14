import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import jwt from "jsonwebtoken";

export async function GET(req) {
  try {
    await connectDB();

    const token = req.cookies.get("admin_token")?.value;
    jwt.verify(token, process.env.JWT_SECRET);

    const data = await Contact.find().sort({ date: -1 });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }
}
