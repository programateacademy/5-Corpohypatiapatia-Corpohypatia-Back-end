import { request, response } from "express";
import Project from "../schema/Project";

//Function to add project
export const addMovie = async (request, response) => {
    const project = request.body;

    const newProject = new Project(project);

    try {
        await newProject.save();
        response.status(201).json(newProject);
    } catch (e) {
        response.status(409).json({message: e.message});
    }
}

//Function to get a project
// export const getProject = async (request, response) =>{
//     try {
//         const projects = await Project.find({});
//         response.status(200).json(projects);
//     } catch (e) {
//         response.status(404).json({message: e.message});
//     }
// }

// //Function to get a project by id
// export const getProjects= async (request, response) => {
//     try {
//         const project = await Project.findById(request.params.id);
//         response.status(200).json(project);
//     } catch (e) {
//         response.status(404).json({message: e.message});
//     }
// }

// //Function to update a project
// export const editProject = async (request, response) => {
//     let project = request.body;
//     const editProject = new Movie(project);

//     try {
//         await Project.updateOne({_id: request.params.id}, editProject);
//         response.status(201).json(editProject);
//     } catch (e) {
//         response.status(409).json({message: e.message});
//     }
    
// }

// //Function to delete a project
// export const deleteProject = async (request, response) => {
//     try {
//         await Project.deleteProject({_id: request.params.id});
//         response.status(200).json({message: 'Proyecto borrado de manera exitosa'});
//     } catch (e) {
//         response.status(409).json({message: e.message});
//     }
// }