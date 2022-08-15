const express = require("express")
const router = express.Router()
const path = require('path');

// routes below

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/start.html'))
})

router.get('/check-answers', (req, res) => {
    res.send("Check answers")
})

router.get('/contact-details', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/contact-details.html'))
})

router.post('/contact-details', (req, res) => {
    res.redirect('/check-answers');
})

router.get('/face-to-face-time', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/face-to-face-time.html'))
})

router.post('/face-to-face-time', (req, res) => {
    res.redirect('/contact-details');
})

router.get('/virtual-meeting-time', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/virtual-meeting-time.html'))
})

router.post('/virtual-meeting-time', (req, res) => {
    res.redirect('/contact-details');
})


router.get('/upload-photo-ID', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/upload-photo-ID.html'))
})

router.get('/what-is-your-name', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/what-is-your-name.html'))
})

router.post('/what-is-your-name', (req, res) => {
    res.redirect('/what-is-your-ni-number');
})

router.get('/what-is-your-name', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/what-is-your-name.html'))
})

router.get('/what-is-your-ni-number', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/what-is-your-ni-number.html'))
})

module.exports = router
