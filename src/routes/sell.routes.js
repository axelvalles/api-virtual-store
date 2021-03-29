const { Router } = require('express');
const router = Router();
const { findAll, findOne, create, destroy } = require('../controllers/sell.controller');
const  auth   = require('../middlewares/auth.middleware')

router.get('/',auth, findAll);
router.get('/:id',auth, findOne)
router.post('/add',auth, create);
router.delete('/delete/:id',auth, destroy)

module.exports = router;
