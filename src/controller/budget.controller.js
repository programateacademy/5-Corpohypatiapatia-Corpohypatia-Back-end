export async function displayBudget(req, res) {
    try {
        const project = await project.findById(req.params.id);
        const totalBudget = project.tasks.reduce((total, task) => total + task.cost, project.budget);
        res.render('project', { project, budget: totalBudget });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el presupuesto del proyecto');
    }
}

//The project is retrieved by its ID and the total budget is calculated. Then, the project view is displayed with the project information and the budget.