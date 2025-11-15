import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";

export async function POST(req) {
  await connectDB();
  const { from, to } = await req.json();

  let filter = {};

  // Apply date filter only if provided
  if (from && to) {
    filter.date = {
      $gte: new Date(from),
      $lte: new Date(to),
    };
  }

  const forms = await Contact.find(filter).sort({ date: -1 });

  return NextResponse.json({
    success: true,
    forms,
  });
}
