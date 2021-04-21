const userController = require('./user/controller/userController')

const express = require('express')
const app = express()
const port = 3000

app.use('/user', userController)

app.get('/', (req, res) => {
  res.send('♥ This API is up and running ♥')
})

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`)
})