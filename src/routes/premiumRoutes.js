const { Router }=require('express');
const router=Router();
const { PaymentIntent, setPremium }=require('../controllers/payment.controllers.js');

router.post('/payment', PaymentIntent);
router.post('/setpremium', setPremium);

module.exports=router;