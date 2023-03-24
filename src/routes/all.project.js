import { Router } from "express";
import { viewUser, getProjectUser } from "../controller/project.controller.js";

const router = Router();
//view all projects to non register users

/**
 * @openapi
 * /projects/:
 *   get:
 *     tags:
 *       - Projects User
 *     description: Retrieve all projects
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a project
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
 *                   example: "Could not retrieve projects"
 */

router.get("/", viewUser);

/**
 * @openapi
 * /projects/{id}:
 *   get:
 *     tags:
 *       - Projects User
 *     description: Retrieve all projects
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         description: The mode of a project
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
 *                   example: "Could not retrieve projects"
 */
router.get("/:id", getProjectUser );

export default router;
