const db = require('../db');
db.sequelize.sync({ alter: true });