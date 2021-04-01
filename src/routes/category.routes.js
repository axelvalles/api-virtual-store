const { Router } = require('express');
const router = Router();
const categoryRequest = require('../requests/category.request');
const {
	findAll,
	findOne,
	create,
	update,
	destroy,
} = require('../controllers/category.controller');
const auth = require('../middlewares/auth.middleware');
const requestJson = require('../middlewares/request.middleware');

router.get('/', requestJson, findAll);
router.get('/:id', requestJson, auth, findOne);
router.post('/add', requestJson, auth, categoryRequest, create);
router.put('/update/:id', requestJson, auth, categoryRequest, update);
router.delete('/delete/:id', requestJson, auth, destroy);

module.exports = router;
