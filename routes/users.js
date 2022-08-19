const express = require('express')
const router = express.Router()
const { Movie, User} = require('../models')

// List of Users
let users = [
    {
        name: "Harry Potter",
        age: 20,
        email: "hp@hogwarts.com"
    },
    {
        name: "Dumbledore",
        age: 100,
        email: "D@hogwarts.com"
    },
    {
        name: "Severus Snape",
        age: 40,
        email: "SS@hogwarts.com"
    },
    {
        name: "Ron Weasly",
        age: 20,
        email: "RW@hogwarts.com"
    },
    {
        name: "dobby",
        age: 4,
        email: "young_D@hogwarts.com"
    }
]


//this is to get all the users
 router.get('/users', (req, res) => {
     res.status(200).send(users)
 })

 // this is to get one user
router.get('/users/:id', async (req, res) => {
    const data = await users.findByPk(req.params.id)
    if (!data) {
        res.status(404).send('there is no user with this id')
    }
    res.send(data)
    })



module.exports = router
