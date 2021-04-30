const { Op } = require("sequelize");
const db = require("../../db");
const { isWishlist } = require("../../library/model/Library");
const { hashPassword, genRandomString } = require("../../utils/hash");
const router = require("express").Router();

const models = db.models;

router.get("/:id", async (req, res) => {
  try {
    let user = await models.user.findByPk(req.params.id, {
      attributes: { exclude: ["password", "salt"] },
    });
    if (user) {
      res.send({
        statusCode: 200,
        message: "OK",
        data: user,
      });
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.post("/register", async (req, res) => {
  try {
    let userData = req.body;
    let salt = genRandomString(10);

    userData.password = hashPassword(userData.password, salt);
    userData.salt = salt;

    let user = await models.user.create(userData);

    res.send({
      statusCode: 201,
      message: "Created",
      data: user,
    });
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
});

router.post('/login', async () => {
  try {
    let { email, password } = req.body
    
    let user = await models.user.findOne({
      where: {
        email: email
      }
    })

    if (user.password === hashPassword(password, user.salt)) {
      res.sendStatus(200)
    } else {
      res.sendStatus(400)
    }

  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
})

router.patch("/change-password/:id", async (req, res) => {
  try {
    let user = await models.user.findByPk(req.params.id);
    let salt = genRandomString(10);
    if (user.password === hashPassword(req.body.oldPassword, user.salt)) {
      await user.update(
        {
          password: hashPassword(req.body.newPassword, salt),
          salt: salt,
        },
        {
          where: { id: req.params.id },
        }
      );
    } else {
      res.sendStatus(400);
      return 0;
    }

    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    let user = await models.user.update(req.body, {
      where: { id: req.params.id },
    });

    if (user) {
      res.send({
        statusCode: 200,
        message: "User updated",
        data: await models.user.findByPk(req.params.id, {
          attributes: { exclude: ["password", "salt"] },
        }),
      });
    } else {
      res.sendStatus(400);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let isDeleted = await models.user.destroy({ where: { id: req.params.id } });
    if (isDeleted) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

//Taggy Part

router.get("/:id/wishlist", async (req, res) => {
  try {
    let user = await models.user.findOne({
      include: [
        {
          model: models.book,
          through: {
            where: {
              isWishlist: true,
            },
          },
        },
      ],
    });

    if (user) {
      res.send({
        statusCode: 200,
        message: "OK",
        data: user,
      });
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.post("/:id/wishlist/add/:BookId", async (req, res) => {
  try {
    let user = await models.user.findOne({
      where: {
        id: req.params.id,
      },
    });
    await user.addBook(req.params.BookId, { through: { isWishlist: false } });
    let data = await models.user.findOne({
      where: {
        id: req.params.id,
      },
      include: [models.book],
      attributes: { exclude: ["password", "salt"] },
    });
    if (user) {
      res.send({
        statusCode: 200,
        message: "OK",
        data: data,
      });
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.patch("/:id/wishlist/delete/:BookId", async (req, res) => {
  try {
    let user = await models.user.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (user) {
      await user.removeBook(req.params.BookId);
      let data = await models.user.findOne({
        where: {
          id: req.params.id,
        },
        include: [models.book],
        attributes: { exclude: ["password", "salt"] },
      });
      res.send({
        statusCode: 200,
        message: "Success remove selected book",
        data: data,
      });
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

router.patch("/:id/library/add/:BookId", async (req, res) => {
  try {
    let user = await models.user.findOne({
      include: [
        {
          model: models.book,
          through: {
            where: {
              BookId: req.params.BookId,
            },
          },
        },
      ],
    });
    let book = await models.book.findOne({
      where: {
        id: req.params.BookId,
      },
    });
    let isHas = await user.hasBook(book);
    // console.log(isHas);
    // console.log(user);
    if (isHas === false) {
      let use = await models.user.findOne({
        where: {
          id: req.params.id,
        },
        include: [models.book],
      });
      await use.addBook(book, {
        through: {
          isWishlist: false,
        },
      });
      console.log(use);
      res.send({
        statusCode: 200,
        message: "Library Add",
        data: await models.user.findOne({
          where: {
            id: req.params.id,
          },
          include: [models.book],
        }),
      });
    } else if (isHas === true) {
      let use = await models.user.findOne({
        where: {
          id: req.params.id,
        },
        include: [models.book],
      });
      await use.setBooks(book, {
        through: {
          isWishlist: true,
        },
      });
      console.log(use);
      res.send({
        statusCode: 200,
        message: "Change Wishlist book to Purchased",
        data: await models.user.findOne({
          where: {
            id: req.params.id,
          },
          include: [models.book],
        }),
      });
    } else {
      res.send({
        statusCode: 200,
        message: "U R FKING IDIOT",
      });
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

module.exports = router;
