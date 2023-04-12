const { Router }=require('express');
const router=Router();
const { PaymentIntent }=require('../controllers/payment.controllers.js');

router.post('/payment', PaymentIntent);