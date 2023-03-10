router.get('/project/:id/budget', async (req, res) => {
    try {
        const project = await project.findById(req.params.id);
        const totalBudget = project.tasks.reduce((total, task) => total + task.cost, project.budget);
        res.json({ budget: totalBudget });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el presupuesto del proyecto');
    }
});

//This code gets the project by its ID and then calculates the total budget by adding the cost of all the tasks of the project and the initial budget of the project. The response is a JSON object with the budget value.