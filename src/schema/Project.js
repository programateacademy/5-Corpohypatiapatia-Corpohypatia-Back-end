import mongoose from "mongoose";

/**
 * @openapi
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         project_title:
 *           type: string
 *           example: "Clean Water for Everyone"
 *         project_location:
 *           type: string
 *           example: "Nairobi, Kenya"
 *         project_duration:
 *           type: string
 *           example: "12 months"
 *         project_budget:
 *           type: string
 *           example: "USD 500,000"
 *         intervention_sector:
 *           type: string
 *           example: "Water and Sanitation"
 *         imagePath:
 *           type: string
 *           example: "http://localhost:8000/public/clean_water.jpg"
 *         problematic_summary:
 *           type: string
 *           example: "The project aims to provide clean drinking water to over 50,000 residents in Nairobi, Kenya who currently lack access to it."
 *         beneficiaries:
 *           type: string
 *           example: "50,000 residents in Nairobi, Kenya"
 *         executive_summary:
 *           type: string
 *           example: "The project will build and maintain water treatment plants and distribution networks, as well as conduct hygiene education and awareness campaigns."
 *         alignment:
 *           type: string
 *           example: "The project aligns with the United Nations Sustainable Development Goal 6: Clean Water and Sanitation."
 *         methodology_summary:
 *           type: string
 *           example: "The project will use a community-driven approach, involving local leaders and community members in decision making and implementation."
 *         general_objetive:
 *           type: string
 *           example: "To provide clean drinking water to over 50,000 residents in Nairobi, Kenya who currently lack access to it."
 *         specific_objectives:
 *          type: array
 *          items:
 *            - type: string
 *              example: "Construir y mantener plantas de tratamiento de agua y redes de distribución."
 *            - type: string
 *              example: "Realizar campañas de educación y concientización sobre higiene."
 *         results:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               result:
 *                 type: string
 *                 example: "50,000 habitantes de Nairobi, Kenia tienen acceso a agua potable limpia."
 *               percentage:
 *                 type: string
 *                 example: "100%"
 *               indicators:
 *                 type: array
 *                 items:
 *                   - type: string
 *                     example: "Número de plantas de tratamiento de agua construidas."
 *                   - type: string
 *                     example: "Número de hogares conectados a la red de distribución de agua."
 *         activities:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 example: "Construir una planta de tratamiento de agua en Kibera."
 *         completed:
 *           type: boolean
 *           example: true
 *         project_percentage:
 *           type: string
 *           example: "75%"
 *         experience:
 *           type: string
 *           example: "El equipo del proyecto tiene una amplia experiencia en la implementación de proyectos de agua y saneamiento en Kenia."
 *         sustainability:
 *           type: string
 *           example: "Como elementos de sostenibilidad del proceso están: el interés y conciencia de la comunidad sobre la importancia del agua potable, la capacitación de personal local y el mantenimiento de infraestructuras."
 *         exit_strategy:
 *           type: string
 *           example: "La Corporación Hypatia se compromete a dejar acuerdos interinstitucionales e intersectoriales que garanticen la sostenibilidad del proyecto a largo plazo."
 *         enabled:
 *           type: boolean
 *           example: false
 *        
 */




const projectSchema = mongoose.Schema({

    project_title: {
        type: String,
        required: true
    },
    project_location: {
        type: String,
        required: true
    },
    project_duration: {
        type: String,
        required: true
    },
    project_budget: {
        type: String,
        required: true
    },
    intervention_sector: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true,
    },
    problematic_summary: {
        type: String,
        required: true
    },
    beneficiaries: {
        type: String,
        required: true
    },
    executive_summary: {
        type: String,
        required: true
    },
    alignment: {
        type: String,
        required: true
    },
    methodology_summary: {
        type: String,
        required: true
    },
    general_objetive: {
        type: String,
        required: true
    },
    specific_objectives: [
        {
            type: String
        }
    ],
    results: [
        {
            result: {
                type: String
            },
            percentage: {
                type: String
            },
            indicators: [
                {
                    type: String
                }
            ],
            activities: [
                {
                    description: {
                        type: String
                    },
                    completed: {
                        type: Boolean
                    }
                }
            ]
        }
    ],
    project_percentage: {
        type: String
    },
    experience: {
        type: String,
        required: true
    },
    sustainability: {
        type: String,
        required: true
    },
    exit_strategy: {
        type: String,
        required: true
    },
    enabled: {
        type: Boolean
    }
});


const project = mongoose.model('project', projectSchema);

export default project;