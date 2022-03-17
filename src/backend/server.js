const express = require('express')
const fixtures = require('./fixtures.json')
const app = express()
const port = 3001

app.get('/list', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.json(fixtures)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})