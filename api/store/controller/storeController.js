const { Op } = require('sequelize')
const db = require('../../db')
const router = require('express').Router()

const models = db.models

router.get('', async (req, res) => {
  try {
    let stores = await models.store.findAll({
      where: {
        name: {
          [Op.substring]: req.query.name || ''
        }
      },
      include: [
        {
          model: models.book,
          include: [models.genre]
        }
      ]
    })

    if (stores.length === 0) {
      res.sendStatus(404)
    } else {
      res.send({
        statusCode: 200,
        message: 'OK',
        data: stores
      })
    }

  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    let store = await models.store.findByPk(req.params.id, {
      include: [
        {
          model: models.book,
          include: [models.genre]
        }
      ]
    })

    if (store) {
      res.send({
        statusCode: 200,
        message: 'OK',
        data: store
      })
    } else {
      res.sendStatus(404)
    }

  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
})

router.post('/create', async (req, res) => {
  try {
    let store = await models.store.create(req.body)
    res.send({
      statusCode: 201,
      message: 'Created',
      data: store
    })
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

router.patch('/update/:id', async (req, res) => {
  try {
    let store = await models.store.update(
      req.body,
      { where: { id: req.params.id } }
    )
    if (!store) {
      res.sendStatus(404)
    } else {
      res.send({
        statusCode: 200,
        message: 'Store with given ID has been updated',
        data: await models.store.findByPk(req.params.id)
      })
    }
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    let isDeleted = await models.store.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    )
    if (isDeleted) {
      res.send({
        statusCode: 200,
        message: 'Store with given ID has been delete'
      })
    } else {
      res.sendStatus(404)
    }
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

module.exports = router