const { request } = require("express");
const { Op } = require("sequelize");
const db = require("../../db");
const { hashPassword, genRandomString } = require("../../utils/hash");
const router = require("express").Router();

const models = db.models;

router.post("/create", async (req, res) => {
  try {
    let card = await models.card.create(req.body);
    res.send({
      statusCode: 201,
      message: "Created",
      data: card,
    });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    let cards = await models.card.findAll({
      where: {
        UserId: req.params.id,
      },
    });
    if (cards.length === 0) {
      res.sendStatus(404);
    } else {
      res.send({
        statusCode: 200,
        message: "Card Found",
        data: cards,
      });
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let card = await models.card.findByPk(req.params.id);
    if (card === null) {
      res.sendStatus(404);
    } else {
      res.send({
        statusCode: 200,
        message: "Card Found",
        data: card,
      });
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let isDeleted = await models.card.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (isDeleted) {
      res.send({
        statusCode: 200,
        message: "Card with given ID has been delete",
      });
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    let card = await models.card.update(req.body, {
      where: { id: req.params.id },
    });
    if (card === null) {
      res.sendStatus(404);
    } else {
      res.send({
        statusCode: 200,
        message: "Card Update Complete",
        data: await models.card.findByPk(req.params.id),
      });
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

module.exports = router;
