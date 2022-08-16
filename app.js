const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

const routes = require('./routes/router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
 extended: true
}))

app.use(express.static(path.join(__dirname, './public')))

app.listen(port, () => {
console.log(`App running on port ${port} http://localhost:3000`)
})

app.use('/', routes)