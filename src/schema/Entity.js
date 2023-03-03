import mongoose from "mongoose";
 
const dataSchema = mongoose.Schema({ 
    entity_name:{ 
        type: String, 
        required: true 
    }, 
    entity_adress:{ 
        type: String, 
        required: true 
    }, 
    entity_webpage:{ 
        type: String, 
        required: true 
    }, 
    entity_phone:{ 
        type: Number, 
        required: true 
    }, 
    contact_name:{ 
        type: String, 
        required: true 
    }, 
    contact_phone:{ 
        type: Number, 
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
    foundaion_year:{ 
        type: String, 
        required: true 
    }, 
    registry_nit:{ 
        type: Number, 
        required: true 
    } 
}) 
 
const entidad = mongoose.model("data", dataSchema);

export default entidad;