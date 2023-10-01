const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3333
const data = require('./新竹美食.json')

app.get('/hsinchu_food', (req, res) => {
  res.send({
    success: true,
    status: 200,
    data
  })
  res.end()
})

app.listen(port, () => {
  console.log(`操雞掰 ${port}`)
})
