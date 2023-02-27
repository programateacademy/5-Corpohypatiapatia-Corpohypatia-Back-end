import mongoose from "mongoose";
// import {appConfig} from "../config"

const projectSchema = mongoose.Schema({

    project_title:{
        type: String,
        // required: true
    },
    project_location:{
        type: String,
        // required: true
    },
    project_duration:{
        type: String,
        // required: true
    },
    project_budget:{
        type: String,
        // required: true
    },
    intervention_sector:{
        type: String,
        // required: true
    },
    imagePath:{
        type: String,
        // required: true,
    },
    problematic_summary:{
        type: String,
        // required: true
    },
    beneficiaries:{
        type: String,
        // required: true
    },
    executive_summary:{
        type: String,
        // required: true
    },
    alignment:{
        type: String,
        // required: true
    },
    methodology_summary:{
        type: String,
        // required: true
    },
    general_objetive:{
        type: String,
        // required: true
    },
    specific_objectives:[
        {
            type:String
        }
    ],
    experience:{
        type: String
    },
    sustainability:{
        type: String
    },
    exit_strategy:{
        type: String
    }
});

// projectSchema.methods.setImagePath = function setImagePath (filename){
//     const host = 'http://localhost'
//     const port = 8000
//     this.imagePath = `${host}:${port}/public/${filename}`
// }

const project = mongoose.model('project', projectSchema);

export default project;