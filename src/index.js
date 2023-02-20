import app from "./App.js";
import "./database/database.js"

// setting environment variables -- Port
import { config } from "dotenv";
config();

<<<<<<< HEAD
const PORT = process.env.PORT || 4000

=======
// const PORT = process.env.PORT || 3000
const PORT = process.env.PORT || 8000
>>>>>>> 6380b9e37b34d3f9774b9a77456250c8ed25dca4

app.listen(PORT);
console.log("server listen on port " + PORT);
