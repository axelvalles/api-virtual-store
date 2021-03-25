const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
	res.send('products');
});
module.exports = router;
