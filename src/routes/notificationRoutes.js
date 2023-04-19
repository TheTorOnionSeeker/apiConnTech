const { Router }=require('express');
const router=Router();
const { createNotification, getNotificationByUserId }=require('../controllers/notification.controllers.js');

router.post('/new', createNotification);
router.get('/notificationbyuser/:id', getNotificationByUserId);

module.exports=router;