const express = require('express')
const dataSchema = require('../schema/data')

const router = express.Router();

//get all data
router.get('/data', (req,res) => {
    dataSchema
    .find().then((data) => res.json(data))
    .catch((error) => res.json({message: error }))
});

//update data
router.put('/data/:id', (req,res) => {
    const {id} = req.params;
    const {entity_name, entity_adress, entity_webpage, entity_phone, contact_name, contact_phone, contact_email, legal_status, country, foundaion_year, registry_nit} = req.body
    dataSchema
    .updateOne({_id: id}, {$set:{entity_name, entity_adress, entity_webpage, entity_phone, contact_name, contact_phone, contact_email, legal_status, country, foundaion_year, registry_nit}}).then((data) => res.json(data))
    .catch((error) => res.json({message: error }))
});

//delete
router.delete('/data/:id', (req,res) => {
    const { id } = req.params;
    dataSchema
    .remove({_id: id}).then((data) => res.json(data))
    .catch((error) => res.json({message: error }))
});


module.exports = router;