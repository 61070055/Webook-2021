let router = require('express').Router()

router.get('/test', function (req, res) {
    res.send({
        id: 1,
        name: 'shiba'
    })
})

module.exports = router