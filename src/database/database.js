import mongoose from "mongoose";

import { config } from "dotenv";
config();
const MONGODB_URI = process.env.MONGODB_URI

const connectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose.set("strictQuery", false);

mongoose
  .connect(MONGODB_URI, connectionOptions )
  .then((db) => console.log("Db is connected"))
  .catch((error) => console.log(error));
