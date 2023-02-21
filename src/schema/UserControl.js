
import { Schema, model } from "mongoose";

const userControlSchema = new Schema(
  {
    user: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("UserControl", userControlSchema);