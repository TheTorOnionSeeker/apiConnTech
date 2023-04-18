const {Router}=require('express');
const router=Router();
const vacantsRouter=require('./vacantsRoutes');
const usersRouter = require('./usersRoutes');
const premiumRouter=require('./premiumRoutes');
const postulationRouter=require('./postulationRoutes');
const notificationRouter=require('./sendmailRoutes');
const sendmailRouter=require();

router.use('/vacant', vacantsRouter);
router.use('/user', usersRouter);
router.use('/premium', premiumRouter);
router.use('/postulation', postulationRouter);
router.use('/notification', notificationRouter);
router.use('/sendmail', sendmailRouter)

module.exports = router;