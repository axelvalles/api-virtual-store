const { Router } = require('express');
const router = Router();

const {getAll, create} = require('../controllers/product.controller')
const auth = require('../middlewares/auth.middleware')



router.get('/',auth, getAll);
router.post('/',auth, create)
module.exports = router;
