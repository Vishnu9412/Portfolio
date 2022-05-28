const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const port = process.env.PORT || 8000

const staticPath = path.join(__dirname, '/public')
const templatePath = path.join(__dirname, '/templates/views')
const partialsPath = path.join(__dirname, '/templates/partials')



app.set('views', templatePath)
app.set('view engine', 'hbs')
app.use(express.static(staticPath))


hbs.registerPartials(partialsPath)

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
    console.log(`Example app listening on port ${port}`)
})