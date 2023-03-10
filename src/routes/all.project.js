import { Router } from "express";
import { viewUser, getProject } from "../controller/project.controller.js";

const router = Router();
//view all projects to non register users
router.get("/", viewUser);
router.get("/:id", getProject);

export default router;
