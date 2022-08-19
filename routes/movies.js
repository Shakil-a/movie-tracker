const express = require('express')
const router = express.Router()
const {Movie, User} = require('../models')


// this is to get all the movies
router.get('/', async (req, res) => {
    const data = await movies.findAll()
     res.status(200).send(data)
 })

 // this is to get one movie
router.get('/:id', async (req, res) => {
    const data2 = await User.findByPk(req.params.id)
    if (!data2) {
        res.status(404).send('there is no show with this id')
    }
    res.send(data2)
    })




module.exports = router
