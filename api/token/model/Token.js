const { Sequelize, DataTypes } = require("sequelize");

const Token = {
  token: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
};

module.exports = Token;
