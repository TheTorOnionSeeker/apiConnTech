const { Router }=require('express');
const router=Router();
const {GetAll}=require('../controllers/vacant.controllers.js');

router.get('/',GetAll);

module.exports = router;