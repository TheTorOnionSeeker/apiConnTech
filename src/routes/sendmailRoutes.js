const { Router }=require('express');
const router=Router();
const { sendEmail }=require('../controllers/nodemailer.controllers.js').default;

router.post('/', sendEmail);