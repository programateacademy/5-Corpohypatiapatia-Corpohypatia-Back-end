import {Router} from "express"
const router = Router()

import * as authCtrl from "../controller/auth.controller.js"
import * as authJwt from "../middlewares/authJwt.js";

router.post("/signup", [authJwt.verifyToken, authJwt.isAdmin], authCtrl.signUp);
router.post("/signin", authCtrl.signIn);

export default router;