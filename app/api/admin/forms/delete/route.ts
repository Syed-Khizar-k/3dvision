import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";

export async function POST(req:any) {
  await connectDB();
  const { id } = await req.json();

  await Contact.findByIdAndDelete(id);

  return NextResponse.json({ success: true });
}
