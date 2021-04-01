const { Router } = require('express');
const router = Router();
const userRequest = require('../requests/users.request');

const { login, resgister, auth } = require('../controllers/user.controller');

router.post('/login', userRequest, login);

router.post('/register', resgister);

router.get('/auth', auth);

module.exports = router;
