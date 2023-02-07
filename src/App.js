import express from "express";
import cors from "cors";

import { createRoles } from "./libs/initialSetup.js";

import authRoutes from "./routes/auth.routes.js";
import homeRoutes from "./routes/home.routes.js";

const app = express();
await createRoles();

app.use(express.json({ exteng: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", homeRoutes);
app.use("/", authRoutes);

export default app;
