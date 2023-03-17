//routes method
//import instance of express
import express from "express";
// const upload = require('../libs/storage.js')
import upload from "../libs/storage.js";

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
  upload.single("imagePath"),
  addProject
);
// router.post('/add', upload.single('imagePath'), (req, res) => {
//     addProject
//     const imagePath = req.file.filename;
//     // save the data in the database or perform any other operation
//     res.send('¡Formulario enviado con éxito!');
// });


/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 * security:
 *   - bearerAuth: []
 */
/**
 * @openapi
 * /project:
 *   get:
 *     tags:
 *       - Projects admin
 *     description: Retrieve all projects
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Project'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized"
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Could not retrieve projects"
 */
router.get("", authJwt.verifyToken, getProjects);
router.get("/:id", authJwt.verifyToken, getProject);
router.put("/:id", authJwt.verifyToken, editProject);
router.delete("/:id", authJwt.verifyToken, deleteProject);

export default router;
