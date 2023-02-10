import { Schema, model } from "mongoose";

const projectSchema = new Schema(
    {
        project_title:{
            type: String,
            required: true
        },
        project_location:{
            type: String,
            required: true
        },
        project_duration:{
            type: String,
            required: true
        },
        project_budget:{
            type: String,
            required: true
        },
        intervention_sector:{
            type: String,
            required: true
        },
        imagePath:{
            type: String,
            required: true,
            default:'https://fondolunaria.org/wp-content/uploads/2019/01/Corporacion-Hypatia-web.jpg'
        },
        problematic_summary:{
            type: String,
            required: true
        },
        beneficiaries:{
            type: String,
            required: true
        },
        executive_summary:{
            type: String,
            required: true
        },
        alignment:{
            type: String,
            required: true
        },
        methodology_summary:{
            type: String,
            required: true
        },
        general_objetive:{
            type: String,
            required: true
        },
        specific_objectives:{
            type: Array,
            required: true
        },
        experience:{
            type: String
        },
        sustainability:{
            type: String
        },
        exit_strategy:{
            type: String
        }
    }
);

export default model("Project", projectSchema);