import { NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";
import Contact from "../../models/contact";

export const dynamic = "force-dynamic"; // IMPORTANT

export async function POST(req) {
 try {
  const body = await req.json();

  await connectDB();
  await Contact.create(body);

  return NextResponse.json(
   {
    success: true,
    msg: "Message sent successfully",
   },
   { status: 200 }
  );
 } catch (error) {
  console.log("API ERROR:", error);
  return NextResponse.json(
   { success: false, msg: "Failed to send message" },
   { status: 500 }
  );
 }
}
