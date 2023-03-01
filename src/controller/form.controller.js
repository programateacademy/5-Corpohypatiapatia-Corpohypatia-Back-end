const express = require('express') 
const dataSchema = require('../schema/entity') 
 
const router = express.Router(); 
 
//create data 
router.post('/data', async(req,res) => { 
    const data = new dataSchema(req.body); 
    await data.save().then((data) => res.json(data)) 
    .catch((error) => res.json({message: error })) 
}); 
  
//get a data 
router.get('/data/:id', (req,res) => { 
    const {id} = req.params; 
    dataSchema 
    .findById(id).then((data) => res.json(data)) 
    .catch((error) => res.json({message: error })) 
}); 
 
module.exports = router;