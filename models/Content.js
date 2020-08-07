import mongoose from "mongoose";
const { Schema } = mongoose;

const ContentSchema = new Schema(
  {
    userId: { type: Number, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
  },
  { collection: "content" }
);

export default mongoose.model("Content", ContentSchema);
