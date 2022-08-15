const express = require("express")
const router = express.Router()
const path = require('path');

// routes below

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'))
})

router.get('/start', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/start.html'))
})

router.get('/what-is-your-name', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/what-is-your-name.html'))
})

module.exports = router