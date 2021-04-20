const { Router } = require('express');
const router = Router();
const {
	findAll,
	findOne,
	create,
	update,
	destroy,
} = require('../controllers/product.controller');
const auth = require('../middlewares/auth.middleware');
const requestJson = require('../middlewares/request.middleware');
router.get('/',  findAll);
router.get('/:id',  auth, findOne);
router.post('/add', auth, create);
router.put('/update/:id',  auth, update);
router.delete('/delete/:id',  auth, destroy);

module.exports = router;
