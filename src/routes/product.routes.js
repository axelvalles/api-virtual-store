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
router.get('/', requestJson, findAll);
router.get('/:id', requestJson, auth, findOne);
router.post('/add', requestJson, auth, create);
router.put('/update/:id', requestJson, auth, update);
router.delete('/delete/:id', requestJson, auth, destroy);

module.exports = router;
