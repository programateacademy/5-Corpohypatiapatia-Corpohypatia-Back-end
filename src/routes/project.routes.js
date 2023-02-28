//routes method
//import instance of express
import express from 'express';
// const upload = require('../libs/storage.js')
import upload from '../libs/storage.js'


//import properties called from the controller
import { addProject, getProjects, getProject, editProject, deleteProject} from '../controller/project.controller.js';

//const variable will contain the methods of the routes
const router = express.Router();

// router.post('/add', upload.upload, upload.uploadFile)
router.post('/add', upload.single('imagePath'), addProject);
// router.post('/add', upload.single('imagePath'), (req, res) => {
//     addProject
//     const imagePath = req.file.filename;
//     // guardar los datos en la base de datos o hacer cualquier otra operación
//     res.send('¡Formulario enviado con éxito!');
// });
router.get('', getProjects);
router.get('/:id', getProject);
router.put('/:id', editProject);
router.delete('/:id', deleteProject)

export default router;