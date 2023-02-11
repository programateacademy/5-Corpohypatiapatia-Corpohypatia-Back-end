import {Router} from "express"
const router = Router()

import * as authCtrl from "../controller/auth.controller.js"
import * as authJwt from "../middlewares/authJwt.js";

// create and protect routes
router.post("/signup", [authJwt.verifyToken, authJwt.isAdmin], authCtrl.signUp);
router.post("/signin", authCtrl.signIn);
router.post("/send-password-link", authCtrl.sendPasswordLink);
router.post("/change-password", [authJwt.verifyToken, authJwt.isAdmin], authCtrl.changePassword);

export default router;