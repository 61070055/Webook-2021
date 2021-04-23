const { Sequelize, DataTypes } = require("sequelize");

const Library = {
  last_page: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

module.exports = Library;
