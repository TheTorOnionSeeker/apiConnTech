const { Router }=require('express');
const router=Router();
const {GetAll}=require('../controllers/user.controllers.js');

router.get('/',GetAll);

module.exports = router;