//routes method
//import instance of express
import express from "express";

import * as authJwt from "../middlewares/authJwt.js";

//import properties called from the controller
import {
  addProject,
  getProjects,
  getProject,
  editProject,
  deleteProject,
} from "../controller/project.controller.js";

//const variable will contain the methods of the routes
const router = express.Router();

// router.post('/add', upload.upload, upload.uploadFile)
router.post(
  "/add",
  addProject
);

router.get("", authJwt.verifyToken, getProjects);
router.get("/:id", authJwt.verifyToken, getProject);
router.put("/:id", authJwt.verifyToken, editProject);
router.delete("/:id", authJwt.verifyToken, deleteProject);

export default router;
