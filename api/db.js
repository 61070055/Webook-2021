require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

//Model
const UserModel = require("./user/model/User");
const BookModel = require("./book/model/Book");
const LibraryModel = require("./library/model/Library");
const GenreModel = require("./genre/model/Genre");
const CartModel = require("./cart/model/Cart");
const CardModel = require("./card/model/Card");
const StoreModel = require("./store/model/Store");
const TokenModel = require("./token/model/Token");

sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
});

const User = sequelize.define("User", UserModel);
const Book = sequelize.define("Book", BookModel);
const Library = sequelize.define("Library", LibraryModel, {
  timestamps: false,
});
const Genre = sequelize.define("Genre", GenreModel, { timestamps: false });
const Cart = sequelize.define("Cart", CartModel);
const Card = sequelize.define("Card", CardModel);
const Store = sequelize.define("Store", StoreModel);
const Token = sequelize.define("Token", TokenModel);

User.belongsToMany(Book, { through: Library });
Book.belongsToMany(User, { through: Library });

Genre.belongsToMany(Book, { through: "BookGenre" });
Book.belongsToMany(Genre, { through: "BookGenre" });

User.belongsToMany(Book, { through: "Wishlist" });
Book.belongsToMany(User, { through: "Wishlist" });

Cart.belongsToMany(Book, { through: "CartBook" });
Book.belongsToMany(Cart, { through: "CartBook" });

Cart.belongsTo(User);
User.hasOne(Cart);

Card.belongsTo(User);
User.hasMany(Card);

// User.hasOne(Store);
Store.hasMany(User);
Store.hasMany(Book);
User.hasOne(Token);
// Token.hasOne(User);

module.exports = sequelize;
