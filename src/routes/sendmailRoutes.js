const { Router }=require('express');
const router=Router();
const { sendEmail }=require('../controllers/nodemailer.controllers.js');

router.post('/', sendEmail);

module.exports=router;