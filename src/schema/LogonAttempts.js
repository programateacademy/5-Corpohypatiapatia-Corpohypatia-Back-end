import { Schema, model } from "mongoose";


const logonAttemptsSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    counter: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("LogonAttempts", logonAttemptsSchema);
