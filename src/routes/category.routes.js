const { Router } = require('express');
const router = Router();
const { getAll, save, update } = require('../controllers/category.controller');
const  auth   = require('../middlewares/auth.middleware')

router.get('/', getAll);
router.post('/add', auth, save);
router.put('/update/:id', auth ,update);

module.exports = router;
