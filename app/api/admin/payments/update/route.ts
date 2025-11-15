import connectDB from "@/app/lib/mongodb"; // your existing DB connection file
import Payment from "@/app/models/payments"; // your payment model
import { NextResponse } from "next/server";

export async function POST(req:any) {
 try {
  await connectDB();

  const body = await req.json();
  const {
   _id,
   projectName,
   startDate,
   totalAmount,
   receivedAmount,
   status,
   notes,
  } = body;

  if (!_id) {
   return NextResponse.json(
    { success: false, message: "Payment ID is required" },
    { status: 400 }
   );
  }

  const updated = await Payment.findByIdAndUpdate(
   _id,
   {
    projectName,
    startDate,
    totalAmount,
    receivedAmount,
    status,
    notes,
   },
   { new: true }
  );

  if (!updated) {
   return NextResponse.json(
    { success: false, message: "Payment not found" },
    { status: 404 }
   );
  }

  return NextResponse.json({
   success: true,
   message: "Payment updated successfully",
   payment: updated,
  });
 } catch (error) {
  console.error("UPDATE PAYMENT ERROR:", error);
  return NextResponse.json(
   { success: false, message: "Server Error", error: error },
   { status: 500 }
  );
 }
}
