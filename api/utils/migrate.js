const sequelize = require('../db');
sequelize.sync({ alter: true });