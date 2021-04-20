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

router.get('/', findAll);
router.get('/:id', auth, findOne);
router.post('/add', auth, categoryRequest, create);
router.put('/update/:id', auth, categoryRequest, update);
router.delete('/delete/:id',auth, destroy);

module.exports = router;
