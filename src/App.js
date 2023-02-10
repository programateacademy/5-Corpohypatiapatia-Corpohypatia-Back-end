import express from "express";
import cors from "cors";

import { createRoles } from "./libs/initialSetup.js";

import authRoutes from "./routes/auth.routes.js";
import homeRoutes from "./routes/home.routes.js";
import projectRoutes from "./routes/project.routes.js";

const app = express();
await createRoles();

app.use(express.json({ exteng: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", homeRoutes);
app.use("/", authRoutes);
app.use("/", projectRoutes)

export default app;
