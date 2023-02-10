import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    // project_title:String,
    // project_location:String,
    // project_duration:String,
    // project_budget:String,
    // intervention_sector:String,
    // imagePath:String,
    // problematic_summary:String,
    // beneficiaries:String,
    // executive_summary:String,
    // alignment:String,
    // methodology_summary:String,
    // general_objetive:String,
    // specific_objectives:Array,
    // experience:String,
    // sustainability:String,
    // exit_strategy:String

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
});

const project = mongoose.model('project', projectSchema);

export default project;