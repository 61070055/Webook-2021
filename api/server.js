const express = require('express')
const bodyParser = require('body-parser')

// Controller
const userController = require('./user/controller/userController')
const genreController = require('./genre/controller/genreController')
const bookController = require('./book/controller/bookController')
const storeController = require('./store/controller/storeController')

const app = express()
const port = 3000

app.use(bodyParser.json())

app.use('/user', userController)
app.use('/genre', genreController)
app.use('/book', bookController)
app.use('/store', storeController)

app.get('/', (req, res) => {
  res.status(404).send('Sorry dude, not thing here')
})

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`)
})