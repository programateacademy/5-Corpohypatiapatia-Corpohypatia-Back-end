import mongoose from "mongoose";

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
            percentage:{
                type: String
            },
            indicators:[
                {
                    type:String
                }
            ],
            activities: [
                {
                    description: {
                        type: String
                    },
                    completed :{
                        type: Boolean
                    }
                }
            ]
        }
    ],
    project_percentage:{
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
    enabled:{
        type: Boolean
    }
});


const project = mongoose.model('project', projectSchema);

export default project;