const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
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

module.exports = mongoose.model('data', dataSchema);