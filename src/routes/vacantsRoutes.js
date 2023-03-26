const { Router }=require('express');
const router=Router();
const {GetAll ,getVacantByName, getVacantById,createVacant}=require('../controllers/vacant.controllers.js');

router.get('/',GetAll);
router.post('/new', createVacant);
router.get('/:name',getVacantByName);
router.get('/:id',getVacantById);

module.exports = router;