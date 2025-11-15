import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import Payment from "@/app/models/payments";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const remaining = body.totalAmount - body.receivedAmount;

    const status =
      body.receivedAmount >= body.totalAmount
        ? "paid"
        : body.receivedAmount > 0
        ? "partial"
        : "pending";

    const payment = await Payment.create({
      projectName: body.projectName,
      startDate: body.startDate,
      totalAmount: body.totalAmount,
      receivedAmount: body.receivedAmount,
      status,
      notes: body.notes,
    });

    return NextResponse.json({ success: true, payment });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
