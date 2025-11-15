import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";

export async function POST(req) {
  await connectDB();
  const { ids } = await req.json();

  await Contact.deleteMany({ _id: { $in: ids } });

  return NextResponse.json({ success: true });
}
