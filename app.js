const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

app.use(express.json());

const routes = require('./routes/router')

app.use(express.json())
app.use(express.static(path.join(__dirname, './public')))

app.listen(port, () => {
console.log(`App running on port ${port} http://localhost:3000`)
})

app.use('/', routes)