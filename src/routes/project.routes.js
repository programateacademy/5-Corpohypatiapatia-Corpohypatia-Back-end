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


/**
 * @openapi
 * /project/add:
 *   post:
 *     tags:
 *       - Projects admin
 *     description: create project
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Project"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Project"
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
// router.post('/add', upload.upload, upload.uploadFile)
router.post(
  "/add",
  addProject
);
// router.post('/add', upload.single('imagePath'), (req, res) => {
//     addProject
//     const imagePath = req.file.filename;
//     // guardar los datos en la base de datos o hacer cualquier otra operación
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
 *     summary: Obtener todos los proyectos
 *     tags: [Projects admin]
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

/**
 * @openapi
 * /project/{id}:
 *   get:
 *     summary: Obtener proyecto por ID
 *     tags: 
 *       - Projects admin
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         description: The ID of a project
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Project"
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Could not retrieve project"
 */
router.get("/:id", authJwt.verifyToken, getProject);

/**
 * @openapi
 * /project/{id}:
 *   patch:
 *     summary:  Update an existing project
 *     tags: 
 *       - Projects admin
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the project to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Project"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Project"
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
router.put("/:id", authJwt.verifyToken, editProject);

/**
 * @openapi
 * /project/{id}:
 *   delete:
 *     summary:  Delete an existing project
 *     tags: 
 *       - Projects admin
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the project to delete
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
router.delete("/:id", authJwt.verifyToken, deleteProject);

export default router;
