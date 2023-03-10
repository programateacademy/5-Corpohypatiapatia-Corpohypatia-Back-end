import express from "express";
import cors from "cors";

import { createRoles } from "./libs/initialSetup.js";
import taskBudget from "./routes/task.budget.js";
import totalBudget from "./routes/total.budget.js";
import authRoutes from "./routes/auth.routes.js";
import homeRoutes from "./routes/home.routes.js";
import projectRoutes from "./routes/project.routes.js";
import allProjects from "./routes/all.project.js";
import RoutesUsers from './routes/routeUser.js'
import entidadroutes from "./controller/form.controller.js"
const app = express();
await createRoles();


app.use(express.json({ exteng: true }));
app.use(express.urlencoded({ extended: false }));
app.use(
    cors({
        origin: "https://5-corpohypatiapatia-corpohypatia-front-end.vercel.app",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
        preflightContinue: false,
        optionsSuccessStatus: 204,
    })
);

app.use("/projects", allProjects);
app.use("/", homeRoutes);
app.use("/", authRoutes);
app.use("/project", projectRoutes);
app.use("/users/", RoutesUsers);
app.use("/form", entidadroutes);
app.use("/task", taskBudget);
app.use("/total", totalBudget);

export default app;
