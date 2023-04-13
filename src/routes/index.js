const {Router}=require('express');
const router=Router();
const vacantsRouter=require('./vacantsRoutes');
const usersRouter = require('./usersRoutes');
const premiumRouter=require('./premiumRoutes');
const postulationRouter=require('./postulationRoutes');

router.use('/vacant', vacantsRouter);
router.use('/user', usersRouter);
router.use('/premium', premiumRouter);
router.use('/postulation', postulationRouter);
router.use('/notification')

module.exports = router;