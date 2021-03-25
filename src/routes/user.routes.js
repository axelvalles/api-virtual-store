const { Router } = require('express')
const router = Router()

const {login,resgister,auth} = require('../controllers/user.controller')

router.post('/login', login)

router.post('/register', resgister)

router.get('/auth', auth)

module.exports = router
