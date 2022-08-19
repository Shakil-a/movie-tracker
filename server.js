const express = require('express')
const users = require('./routes/users')
const movies = require('./routes/movies')
const { seed } = require('./models')
const app = express()

app.use (express.json())
app.use('/users', users)
app.use('/movies', movies)


async function main (port) {
    await seed()
    app.listen(port, () => {
        console.log(`listening on ${port}.`
    )})
}
main(3000)



