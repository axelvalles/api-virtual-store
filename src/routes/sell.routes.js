const { Router } = require('express');
const router = Router();
const {
	findAll,
	findOne,
	create,
	destroy,
} = require('../controllers/sell.controller');
const auth = require('../middlewares/auth.middleware');
const requestJson = require('../middlewares/request.middleware');
router.get('/', requestJson, auth, findAll);
router.get('/:id', requestJson, auth, findOne);
router.post('/add', requestJson, auth, create);
router.delete('/delete/:id', requestJson, auth, destroy);

module.exports = router;
