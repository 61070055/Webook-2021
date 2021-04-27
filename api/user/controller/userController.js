const { Op } = require('sequelize')
const db = require('../../db')
const { hashPassword, genRandomString } = require('../../utils/hash')
const router = require('express').Router()

const models = db.models

router.get('/:id', async (req, res) => {
  try {
    let user = await models.user.findByPk(req.params.id, {
      attributes: { exclude: ['password', 'salt'] }
    })
    if (user) {
      res.send({
        statusCode: 200,
        message: 'OK',
        data: user
      })
    } else {
      res.sendStatus(404)
    }
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
})

router.post('/register', async (req, res) => {
  try {

    let userData = req.body
    let salt = genRandomString(10)

    userData.password = hashPassword(userData.password, salt)
    userData.salt = salt

    let user = await models.user.create(userData)

    res.send({
      statusCode: 201,
      message: 'Created',
      data: user
    })

  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
})

router.patch('/change-password/:id', async (req, res) => {
  try {
    let user = await models.user.findByPk(req.params.id)
    let salt = genRandomString(10)
    if (user.password === hashPassword(req.body.oldPassword, user.salt)) {
      await user.update(
        {
          password: hashPassword(req.body.newPassword, salt),
          salt: salt
        },
        {
          where: { id: req.params.id }
        }
      )
    } else {
      res.sendStatus(400)
      return 0
    }

    res.sendStatus(200)

  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
})

router.patch('/update/:id', async (req, res) => {
  try {
    let user = await models.user.update(req.body,
      {
        where: { id: req.params.id }
      }
    )

    if (user) {
      res.send({
        statusCode: 200,
        message: 'User updated',
        data: await models.user.findByPk(req.params.id, {
          attributes: { exclude: ['password', 'salt'] }
        })
      })
    } else {
      res.sendStatus(400)
    }
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    let isDeleted = await models.user.destroy({ where: { id: req.params.id } })
    if (isDeleted) {
      res.sendStatus(200)
    } else {
      res.sendStatus(404)
    }
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
})

module.exports = router