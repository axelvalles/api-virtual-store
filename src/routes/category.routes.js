const { Router } = require('express');
const router = Router();
const { getAll, findOne ,save, update, destroy } = require('../controllers/category.controller');
const  auth   = require('../middlewares/auth.middleware')

router.get('/', getAll);
router.get('/:id',auth, findOne)
router.post('/add',auth, save);
router.put('/update/:id', auth ,update);
router.delete('/delete/:id',auth, destroy)

module.exports = router;
