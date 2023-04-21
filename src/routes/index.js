const {Router}=require('express');
const router=Router();
const vacantsRouter=require('./vacantsRoutes');
const usersRouter = require('./usersRoutes');
const premiumRouter=require('./premiumRoutes');
const postulationRouter=require('./postulationRoutes');
const notificationRouter=require('./notificationRoutes');
const sendmailRouter=require('./sendmailRoutes');

router.use('/vacant', vacantsRouter);
router.use('/user', usersRouter);
router.use('/premium', premiumRouter);
router.use('/postulation', postulationRouter);
router.use('/notification', notificationRouter);
router.use('/send-email', sendmailRouter);

module.exports = router;