const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log('hi there')
  res.send(process.env.MY_VAR)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})