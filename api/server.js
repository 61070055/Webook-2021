const sequelize = require('./db');

// Controller
const userController = require('./user/controller/userController');

const app = require('express')();
const port = 3000;

sequelize.sync({ alter: true });
console.log(sequelize.models);

app.use('/user', userController)

app.get('/', (req, res) => {
  res.send('♥ This API is up and running ♥')
})

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`)
})