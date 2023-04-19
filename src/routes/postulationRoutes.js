const { Router }=require('express');
const router=Router();
const { createPostulation, getPostulationByUserId }=require('../controllers/postulation.controllers.js');

router.post('/new', createPostulation);
router.get('/postulationbyuser/:id', getPostulationByUserId)

module.exports=router;