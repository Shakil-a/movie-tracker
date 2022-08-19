const { db } = require('../db')
const { Movie, seedMovies } = require('./movies')
const { User, seedUsers} = require('./users')


Movie.belongsToMany(User, {through: 'watched'})
User.belongsToMany(Movie, {through: 'watched'})

async function seed() {
    await db.sync ({force: true})
    for (let movies of seedMovies){
        await Movie.create(movies)
    }
    for (let users of seedUsers){
        await User.create(users)
    }
}

module.exports = {seed, User, Movie}
//