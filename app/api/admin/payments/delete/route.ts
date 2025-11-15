import { NextResponse } from "next/server";
import Payment from "@/app/models/payments";
import connectDB from "@/app/lib/mongodb";

export async function POST(req: Request) {
 try {
  await connectDB();
  const { id } = await req.json();
  await Payment.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
 } catch (err) {
  return NextResponse.json({ success: false });
 }
}
