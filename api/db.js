require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

//Model
const User = require('./user/model/User');

sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
});

sequelize.define('User', User)

module.exports = sequelize;

// sequelize.define('User', {
//     id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     password: {
//         type: DataTypes.TEXT,
//         allowNull: false
//     },
//     firstName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     lastName: {
//         type: DataTypes.STRING
//     }
// }, {
//     tableName: 'Users'
// });



