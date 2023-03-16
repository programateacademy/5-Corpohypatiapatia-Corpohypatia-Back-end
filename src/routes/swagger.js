import swaggerJSDoc  from"swagger-jsdoc";
import swaggerUi  from "swagger-ui-express";

const options = {
  
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Corpohypatia Projects",
      version: "1.0.0"
    },
  },
  
  apis: [
      "src/routes/all.project.js", 
      "src/routes/project.routes.js", 
      "src/routes/auth.routes.js", 
      "src/schema/Project.js"]
}

//Docs JSON format
const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/projects/swagger/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/projects/swagger/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `📓 Version 1 Docs are available at http://localhost:${port}/projects/swagger/docs`
  );
};
export default swaggerDocs;
