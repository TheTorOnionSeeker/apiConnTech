const {Router}=require('express');
const router=Router();
const vacantsRouter=require('./vacantsRoutes');

router.use('/vacant', vacantsRouter);

module.exports = router;