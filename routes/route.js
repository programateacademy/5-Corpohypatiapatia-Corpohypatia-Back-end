//routes method

//import instance of express
import express from 'express';

//import properties called from the controller
import { addProject, getProjects, getProject, editProject, deleteProject} from '../controller/project-controller.js';


//const variable will contain the methods of the routes
const router = express.Router();

router.post('/add',addProject);
router.get('', getProjects);
router.get('/:id', getProject);
router.put('/:id', editProject);
router.delete('/:id', deleteProject);


export default router;