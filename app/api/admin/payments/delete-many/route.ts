import { NextResponse } from "next/server";
import Payment from "@/app/models/payments";
import connectDB from "@/app/lib/mongodb";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { ids } = await req.json();
    await Payment.deleteMany({ _id: { $in: ids } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false });
  }
}
