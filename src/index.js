import app from "./App.js";
import "./database/database.js"


// setting environment variables -- Port
import { config } from "dotenv";
config();

<<<<<<< HEAD
const PORT = process.env.PORT || 4000
=======
const PORT = process.env.PORT || 8000
>>>>>>> e55b3ea422ccbda8e5ad7a8527dbf09b634f3be4


app.listen(PORT);
console.log("server listen on port " + PORT);
