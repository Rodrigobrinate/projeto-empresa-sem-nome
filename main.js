const express = require('express')
const app = express()
const port = 3000
const controller = require('./controllers/Index.controller')

app.use(controller)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})