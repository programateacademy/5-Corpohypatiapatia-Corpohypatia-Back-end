import { Router } from "express";
import { viewUser, getProject } from "../controller/project.controller.js";

const router = Router();

router.get("/", viewUser);
router.get("/:id", getProject);

export default router;
