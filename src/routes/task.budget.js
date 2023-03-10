import express from 'express';
const router = express.Router();

router.put('/project/:id/task/:taskId', async (req, res) => {
    try {
        const project = await project.findById(req.params.id);
        const task = project.task.id(req.params.taskId);
        task.completed = req.body.completed;
        await project.save();
        res.json(task);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar la tarea');
    }
});

export default router;

//This code gets the project by its ID and the task by its task ID, updates the completed status of the task and saves the updated project. The response is the updated task.