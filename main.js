const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const port = process.env.PORT || 8000

const staticPath = path.join(__dirname, '/public')
console.log(path.join(__dirname, '/views'))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'hbs')
app.use(express.static(staticPath))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
    console.log(`Example app listening on port ${port}`)
})