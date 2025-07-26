import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: String,
      required: true,
    }, // Clerk user ID
    receivedId: {
      type: String,
      required: true,
    }, // Clerk user ID
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // createdAt, updatedAt
);

export const Message = mongoose.model("Message", messageSchema);
