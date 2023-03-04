//import instance of express
import express from 'express';

//import properties called from the controller
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controller/UsersController.js";


//const variable will contain the methods of the routes
const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/',createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;