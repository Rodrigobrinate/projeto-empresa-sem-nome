const express = require('express')
const router = express.Router()
const IdexService = require('../services/index.service')


router.get('/', (req,res ) => {
    
    IdexService.index(req, res)
})

module.exports = router