const { Router } = require('express');
const router = Router();
const { getAll, save, update } = require('../controllers/category.controller');
router.get('/', getAll);
router.post('/add', save);
router.put('/update/:id', update);

module.exports = router;
