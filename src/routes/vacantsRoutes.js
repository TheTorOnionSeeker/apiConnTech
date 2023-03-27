const { Router }=require('express');
const router=Router();
const {GetAll ,getVacantByName, getVacantById, createVacant}=require('../controllers/vacant.controllers.js');

router.get('/',GetAll);
router.get('/name=:title',getVacantByName);
router.get('/:id',getVacantById);
router.post('/new', createVacant);

module.exports = router;