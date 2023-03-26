const { Router }=require('express');
const router=Router();
const {GetAll,createVacant}=require('../controllers/vacant.controllers.js');

router.get('/',GetAll);
router.post('/new', createVacant)

module.exports = router;