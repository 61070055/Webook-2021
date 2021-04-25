const db = require('../../db')
const router = require('express').Router()

const models = db.models

router.get('', async (req, res) => {
  try {
    let genres = await models.genre.findAll();
    res.send({
      statusCode: 200,
      message: 'OK',
      data: genres
    })
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
    let genre = await models.genre.findByPk(req.params.id);

    if (genre === null) {
      res.send({
        statusCode: 404,
        message: 'Genre Not Found',
      })
      return 0;
    }

    res.send({
      statusCode: 200,
      message: 'OK',
      data: genre
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
    let genre = await models.genre.create(req.body)
    res.send({
      statusCode: 201,
      message: 'Created',
      data: genre
    })
  } catch (e) {
    console.error(e)
    res.send({
      statusCode: 500,
      message: 'Internal Server Error'
    })
  }
})

router.patch('/update/:id', async (req, res) => {
  try {
    await models.genre.update(
      {
        name: req.body.name
      },
      {
        where: {
          id: req.params.id
        }
      }
    )

    let genre = await models.genre.findByPk(req.params.id)

    res.send({
      statusCode: 200,
      message: 'Genre has been updated',
      data: genre
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
    let isDeleted = await models.genre.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    )

    if (isDeleted) {
      res.send({
        statusCode: 200,
        message: 'Genre with given ID has been deleted'
      })
    } else {
      res.send({
        statusCode: 404,
        message: 'There is no such genre with given ID'
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