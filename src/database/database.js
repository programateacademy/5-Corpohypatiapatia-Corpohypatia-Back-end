import mongoose from "mongoose";

// setting environment variables -- database connection link
import { config } from "dotenv";
config();
const MONGODB_URI = process.env.MONGODB_URI

// setting connection options
const connectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
mongoose.set("strictQuery", false);

// database connection
mongoose
  .connect(MONGODB_URI, connectionOptions )
  .then((db) => console.log("Db is connected"))
  .catch((error) => console.log(error));
