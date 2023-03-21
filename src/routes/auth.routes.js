import { Router } from "express";
const router = Router();

import * as authCtrl from "../controller/auth.controller.js";
import * as authJwt from "../middlewares/authJwt.js";

// create and protect routes

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

router.post("/signup", [authJwt.verifyToken, authJwt.isAdmin], authCtrl.signUp);
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
 * /signin:
 *   post:
 *     summary: Iniciar sesión
 *     description: Iniciar sesión en la aplicación
 *     tags:
 *       - Autenticación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *                 example: password123
 *               role:
 *                 type: string
 *                 enum: ["admin", "moderator", "user"]
 *                 description: Rol del usuario. Si no se especifica, se asume que el rol es "user".
 *                 example: "admin"
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso. Se devuelve un token de sesión.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Token'
 *       400:
 *         description: Datos de inicio de sesión inválidos o incompletos.
 *       401:
 *         description: Credenciales de inicio de sesión incorrectas.
 */
router.post("/signin", authCtrl.signIn);
router.post("/send-password-link", authCtrl.sendPasswordLink);
router.post(
  "/change-password",
  [authJwt.verifyToken, authJwt.isAdmin],
  authCtrl.changePassword
);

export default router;
