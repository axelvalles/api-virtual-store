const { Router } = require('express');
const router = Router();
const {
	userRequestLogin,
	userRequestRegister,
} = require('../requests/user.request');
const requestJson = require('../middlewares/request.middleware');
const { login, resgister, auth } = require('../controllers/user.controller');

router.post('/login', requestJson, userRequestLogin, login);

router.post('/register', requestJson, userRequestRegister, resgister);

router.get('/auth', auth);

module.exports = router;
