const { Router } = require('express');
const router = Router();
const {getAll, getOne, create, update, destroy} = require('../controllers/product.controller')
const auth = require('../middlewares/auth.middleware')

router.get('/',auth, getAll);
router.get('/:id',auth,  getOne)
router.post('/',auth, create)
router.put('/update/:id',auth, update)
router.delete('/delete/:id',auth, destroy)

module.exports = router;
