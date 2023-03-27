const { Router }=require('express');
const router=Router();
const {GetAll ,getVacantByName, getVacantById}=require('../controllers/vacant.controllers.js');

router.get('/',GetAll);
router.get('/name=:title',getVacantByName);
router.get('/:id',getVacantById);

module.exports = router;