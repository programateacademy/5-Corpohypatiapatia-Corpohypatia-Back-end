import {Router} from "express";
const router = Router()

import * as homeCtrl from "../controller/home.controller.js";
import * as authJwt from "../middlewares/authJwt.js";

// create and protect the routes for the home page
router.get("/home", authJwt.verifyToken, homeCtrl.getHome);

export default router;