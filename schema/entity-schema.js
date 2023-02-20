import mongoose from "mongoose";

const entitySchema = mongoose.Schema({
    entity_name:{
        type: String,
        required: true
    },
    entity_adress:{
        type: String,
        required: true
    },
    entity_web_page:{
        type: String,
        required: false
    },
    entity_phone:{
        type: String,
        required: true
    },
    contact_name:{
        type: String,
        required: true
    },
    contact_phone:{
        type: String,
        required: true
    },
    contact_email:{
        type: String,
        required: true
    },
    legal_status:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    foundation_year:{
        type: String,
        required: true
    },
    registry_number:{
        type: String,
        required: true
    },
    // type_registry:{
    //     type: String,
    //     required: true
    // },
});

const project = mongoose.model('entity', entitySchema);

export default project;