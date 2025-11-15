import { NextResponse } from "next/server";
import Payment from "@/app/models/payments";
import connectDB from "@/app/lib/mongodb";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { month, status } = await req.json();

    let query: any = {};

    if (month) {
      const [year, m] = month.split("-");
      const start = new Date(year, m - 1, 1);
      const end = new Date(year, m, 1);
      query.startDate = { $gte: start, $lt: end };
    }

    if (status) {
      query.status = status;
    }

    const payments = await Payment.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, payments });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
