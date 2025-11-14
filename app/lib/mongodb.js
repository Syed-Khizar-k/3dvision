import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "test"   // You can specify your DB name here
      });
      console.log("MongoDB Connected");
    }
  } catch (error) {
    console.log("MongoDB Connection Error:", error);
  }
};

export default connectDB;
