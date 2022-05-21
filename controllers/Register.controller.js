const LoginService = require('../services/Login.service')


 exports.register = (req, res) => {
    LoginService.registe(req, res)
}