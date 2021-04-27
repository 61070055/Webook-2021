const { Op } = require("sequelize");
const db = require("../../db");
const router = require("express").Router();

const models = db.models;

router.get("", async (req, res) => {
  try {
    let books = await models.book.findAll({
      where: {
        name: {
          [Op.substring]: req.query.name || "",
        },
      },
      include: [models.genre],
    });

    if (books.length === 0) {
      res.sendStatus(404);
    } else {
      res.send({
        statusCode: 200,
        message: "OK",
        data: books,
      });
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let book = await models.book.findByPk(req.params.id, {
      include: [models.genre],
    });

    if (book === null) {
      res.sendStatus(404);
      return 0;
    }

    res.send({
      statusCode: 200,
      message: "OK",
      data: book,
    });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.post("/create", async (req, res) => {
  try {
    let book = await models.book.create(req.body.book);
    book.setGenres(req.body.genres);

    let result = await models.book.findByPk(book.id, {
      include: [models.genre],
    });

    res.send({
      statusCode: 201,
      message: "Created",
      data: result,
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    await models.book.update(
      {
        ...req.body.book,
      },
      {
        where: { id: req.params.id },
      }
    );

    let book = await models.book.findByPk(req.params.id, {
      include: [models.genre],
    });

    if (book === null) {
      res.sendStatus(404);
      return 0;
    }

    await book.setGenres(req.body.genres);

    res.send({
      statusCode: 200,
      message: "Book with given ID has been updated",
      data: await models.book.findByPk(req.params.id, {
        include: [models.genre],
      }),
    });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let isDeleted = await models.book.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (isDeleted) {
      res.send({
        statusCode: 200,
        message: "Book with given ID has been delete",
      });
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

module.exports = router;
