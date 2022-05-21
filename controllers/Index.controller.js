const IdexService = require('../services/index.service')


 exports.index = (req, res) => {
    IdexService.index(req, res)
}