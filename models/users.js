const { db, DataTypes } = require('../db')


let User = db.define('Users', {
    name: {
     type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    }

})

const seedUsers = 
    [{
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


module.exports = {User, seedUsers}