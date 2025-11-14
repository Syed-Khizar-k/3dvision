import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    company: String,
    projectType: String,
    message: String,
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);
