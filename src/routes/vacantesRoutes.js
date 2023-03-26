const { Router }=require('express');
const router=Router();
const {GetAll}=require('../controllers/controllerVacantes.js');

router.get('/',GetAll);

module.exports = router;