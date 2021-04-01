const { Router } = require('express');
const router = Router();
const {
	userRequestLogin,
	userRequestRegister,
} = require('../requests/user.request');

const { login, resgister, auth } = require('../controllers/user.controller');

router.post('/login', userRequestLogin, login);

router.post('/register', userRequestRegister, resgister);

router.get('/auth', auth);

module.exports = router;
