const express = require('express')
const router = express.Router()
const IndexController = require('./controllers/Index.controller')
const LoginController = require('./controllers/Login.controller')
const RegisterController = require('./controllers/Register.controller')

router.get('/', IndexController.index)
router.post('/login', LoginController.login)
router.post('/register', RegisterController.register)

module.exports = router