const { Sequelize, DataTypes } = require("sequelize");

const Library = {
  last_page: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  isWishlist: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
};

module.exports = Library;
