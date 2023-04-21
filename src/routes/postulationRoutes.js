const { Router }=require('express');
const router=Router();
const { createPostulation, getPostulationById }=require('../controllers/postulation.controllers.js');

router.post('/new', createPostulation);
router.get('/postulationbyid/:id', getPostulationById)

module.exports=router;