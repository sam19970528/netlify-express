const express = require('express')
const serverless = require('serverless-http')
const cors = require('cors')
const app = express()
const router = express.Router()
app.use(cors())
const port = 3333
const data = require('../新竹美食.json')

router.get('/hsinchu_food', (req, res) => {
  res.send({
    success: true,
    status: 200,
    data
  })
  res.end()
})
app.use('/',router)

app.listen(port, () => {
  console.log(`welcome!! ${port}`)
})

app.use('/', router); 

module.exports = app;
module.exports.handler = serverless(app);