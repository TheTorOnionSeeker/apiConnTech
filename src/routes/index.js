const {Router}=require('express');
const router=Router();
const vacantsRouter=require('./vacantsRoutes');
const usersRouter = require('./usersRoutes');
const premiumRouter=require('./premiumRoutes')

router.use('/vacant', vacantsRouter);
router.use('/user', usersRouter);
router.use('/premium', premiumRouter);

module.exports = router;