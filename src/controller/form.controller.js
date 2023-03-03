import express  from 'express';
import  dataSchema from '../schema/Entity.js'; 
 
const router = express.Router(); 
 
//create data 
router.post('/data', async(req,res) => { 
    const data = new dataSchema(req.body); 
    await data.save().then((data) => res.json(data)) 
    .catch((error) => res.json({message: error })) 
}); 
 
//get all data 
router.get('/data', (req,res) => { 
    dataSchema 
    .find().then((data) => res.json(data)) 
    .catch((error) => res.json({message: error })) 
}); 
 
//get a data 
router.get('/data/:id', (req,res) => { 
    const {id} = req.params; 
    dataSchema 
    .findById(id).then((data) => res.json(data)) 
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

export default router;