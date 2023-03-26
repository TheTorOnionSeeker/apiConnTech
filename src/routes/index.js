const {Router}=require('express');
const router=Router();
const vacantsRouter=require('./vacantsRoutes');
const userRoutes=require('./userRoutes');

router.use('/vacant', vacantsRouter);
router.use('/user', userRoutes);

module.exports = router;