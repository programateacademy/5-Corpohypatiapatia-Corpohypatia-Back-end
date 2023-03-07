import { Router } from "express";
import { getProjectsUser, getProject } from "../controller/project.controller.js";

const router = Router();

router.get("/", getProjectsUser);
router.get("/:id", getProject);

export default router;
