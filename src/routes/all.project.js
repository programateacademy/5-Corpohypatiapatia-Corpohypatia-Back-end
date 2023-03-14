import { Router } from "express";
import { viewUser, getProjectUser } from "../controller/project.controller.js";

const router = Router();
//view all projects to non register users
router.get("/", viewUser);
router.get("/:id", getProjectUser );

export default router;
