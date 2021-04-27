const { request, response } = require("express");
const { Op } = require("sequelize");
const db = require("../../db");
const { hashPassword, genRandomString } = require("../../utils/hash");
const router = require("express").Router();

const models = db.models;

router.get("/:id", async (req, res) => {
  try {
    let cart = await models.cart.findAll({
      where: {
        UserId: req.params.id,
      },
      include: [models.book],
    });
    if (cart.length === 0) {
      res.sendStatus(404);
    } else {
      res.send({
        statusCode: 200,
        message: "Cart Found",
        data: cart,
      });
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.post("/:id/add", async (req, res) => {
  try {
    let [all, created] = await models.cart.findOrCreate({
      where: {
        id: req.params.id,
      },
      defaults: {
        totalPrice: 0,
        UserId: req.params.id,
      },
    });
    console.log(created);
    if (created) {
      all.setBooks(req.body.book);
      res.send({
        statusCode: 200,
        message: "Book Add",
        data: all,
      });
    } else {
      all.setBooks(req.body.book);
      res.send({
        statusCode: 200,
        message: "Book Add",
        data: all,
      });
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.delete("/:id/delete", async (req, res) => {
  try {
    let isDeleted = await models.cart.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (isDeleted) {
      res.send({
        statusCode: 200,
        message: "User Cart has been cleaned",
      });
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.patch("/:id/delete/:BookId", async (req, res) => {
  try {
    let cart = await models.cart.findOne({
      where: {
        id: req.params.id,
      },
    });
    console.log(cart);
    if (cart === null) {
      res.send({
        statusCode: 404,
        message: "Cart not found",
      });
    } else {
      await cart.removeBook(req.params.BookId);
      res.send({
        statusCode: 200,
        message: "Selected Book has been remove",
      });
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

module.exports = router;
