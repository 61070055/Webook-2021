const { Op } = require('sequelize')
const db = require('../../db')
const router = require('express').Router()

const models = db.models

router.get('', async (req, res) => {
  try {
    let books = await models.book.findAll({
      where: {
        name: {
          [Op.substring]: req.query.name
        }
      },
      include: [ models.genre ]
    });

    if (books.length === 0) {
      res.send({
        statusCode: 404,
        message: 'Not Found',
      })
    } else {
      res.send({
        statusCode: 200,
        message: 'OK',
        data: books
      })
    }

  } catch (e) {
    console.error(e)
    res.send({
      statusCode: 500,
      message: 'Internal Server Error'
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    let book = await models.book.findByPk(req.params.id, {
      include: [models.genre]
    })

    if (book === null) {
      res.send({
        statusCode: 404,
        message: 'No book with given ID',
      })
      return 0;
    }

    res.send({
      statusCode: 200,
      message: 'OK',
      data: book
    })

  } catch (e) {
    console.error(e)
    res.send({
      statusCode: 500,
      message: 'Internal Server Error'
    })
  }
})

router.post('/create', async (req, res) => {
  try {
    let book = await models.book.create(req.body.book)
    book.setGenres(req.body.genres)

    let result = await models.book.findByPk(book.id, {
      include: [
        models.genre
      ]
    })

    res.send({
      statusCode: 201,
      message: 'Created',
      data: result
    })

  } catch (e) {
    console.log(e)
    res.send({
      statusCode: 500,
      message: 'Internal Server Error'
    })
  }
})

router.patch('/update/:id', async (req, res) => {
  try {
    await models.book.update(
      {
        ...req.body.book
      },
      {
        where: { id: req.params.id }
      }
    )

    let book = await models.book.findByPk(req.params.id, {
      include: [models.genre]
    })

    await book.setGenres(req.body.genres)

    res.send({
      statusCode: 200,
      message: 'Book has been updated',
      data: await models.book.findByPk(req.params.id, {
        include: [models.genre]
      })
    })

  } catch (e) {
    console.error(e)
    res.send({
      statusCode: 500,
      message: 'Internal Server Error'
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    let isDeleted = await models.book.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    )

    if (isDeleted) {
      res.send({
        statusCode: 200,
        message: 'Book with given ID has been delete'
      })
    } else {
      res.send({
        statusCode: 404,
        message: 'There is no such book with give ID'
      })
    }

  } catch (e) {
    console.error(e)
    res.send({
      statusCode: 500,
      message: 'Internal Server Error'
    })
  }
})

module.exports = router