//import instance of express
import express from 'express';

//import properties called from the controller
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controller/users.controller.js";


//const variable will contain the methods of the routes
const router = express.Router();
/**
 * @openapi
 * tags:
 *   name: Users
 *   description: User management
 */
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
 * /users/:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Un arreglo de objetos de usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/User"
 */
router.get('/', getAllUsers);
/**
 * @openapi
 * /users/{id}:
 *   get:
 *     summary: Obtener usuario por ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID para obtener
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Un arreglo de objetos de usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/User"
 */
router.get('/:id', getUser);

/**
 * @swagger
 * /users/:
 *   post:
 *     summary: Create a new user
 *     tags: 
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/User"
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: User created successfully  
 *       400:
 *         description: Bad request  
 */
router.post('/',createUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update an existing user
 *     tags: 
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/User"
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User updated successfully  
 *       400:
 *         description: Bad request  
 */
router.put('/:id', updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete an existing user
 *     tags: 
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID.
*     security:
*       - bearerAuth: []
*     responses:
*       200:
*         description: User deleted successfully  
*       400:
*         description: Bad request  
*/
router.delete('/:id', deleteUser);

export default router;