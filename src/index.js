import app from "./App.js";
import "./database/database.js"

// setting environment variables -- Port
import { config } from "dotenv";
config();

const PORT = process.env.PORT || 8000


app.listen(PORT);
console.log("server listen on port " + PORT);
