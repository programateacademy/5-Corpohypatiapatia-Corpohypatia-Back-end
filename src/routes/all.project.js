import { Router } from "express";
import { getProjects, getProject } from "../controller/project.controller.js";

const router = Router();

router.get("", getProjects);
router.get("/:id", getProject);

export default router;
