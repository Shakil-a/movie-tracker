const { db, DataTypes } = require('../db')


let Movie = db.define('Movies', {
    name: {
     type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
    rating: {
        type: DataTypes.INTEGER
    }

})

const seedMovies = 
    [
        {
            name: "Harry Potter and the philosphers stone",
            status: "something",
            rating: 5
    
        },
        {
            name: "Harry Potter and the chamber of secrets",
            status: "something",
            rating: 1
            
        },
        {
            name: "Harry Potter and the prisoner of Azkaban",
            status: "something",
            rating: 3
            
        },
        {
            name: "Harry Potter and the goblet of fire",
            status: "something",
            rating: 4
            
        },
        {
            name: "Harry Potter and the order of the phoenix",
            status: "something",
            rating: 4
            
        }
]



module.exports = { Movie, seedMovies}