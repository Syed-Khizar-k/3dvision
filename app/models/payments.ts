import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema({
  projectName: { type: String, required: true },
  startDate: { type: Date, required: true },
  totalAmount: { type: Number, required: true },
  receivedAmount: { type: Number, default: 0 },
  status: {
    type: String,
    enum: ["pending", "partial", "paid"],
    default: "pending",
  },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Payment ||
  mongoose.model("Payment", paymentSchema);
