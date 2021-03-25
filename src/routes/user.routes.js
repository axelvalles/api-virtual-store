const { Router } = require('express')
const router = Router()

const {login,resgister,auth} = require('../controllers/user.controller')

app.post('/login', login)

app.post('/register', resgister)

app.get('/auth', auth)

module.exports = router
