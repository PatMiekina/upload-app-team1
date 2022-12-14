const express = require("express")
const router = express.Router()
const path = require('path');

// routes below

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/start.html'))
})

router.get('/arrange-virtual-meeting', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/arrange-virtual-meeting.html'))
})

router.post('/arrange-virtual-meeting', (req, res) => {
    res.redirect('/virtual-meeting-time');
})

router.get('/arrange-face-to-face', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/arrange-face-to-face.html'))
})

router.post('/arrange-face-to-face', (req, res) => {
    res.redirect('/face-to-face-time');
})

router.get('/check-answers', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/check-answers.html'))
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

router.post('/what-is-your-ni-number', (req, res) => {
    res.redirect('/upload-photo-id');
})

router.post('/upload-photo-id', (req, res) => {
    res.redirect('/photo-confirmation');
})

router.get('/upload-photo-id', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/upload-photo-id.html'))
})

router.get('/photo-confirmation', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/photo-confirmation.html'))
})

router.post('/photo-confirmation', (req, res) => {
    res.redirect('/verify-documents');
})

router.get('/upload-a-video', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/upload-a-video.html'))
})

router.post('/upload-a-video-continue', (req, res) => {
    res.redirect('/contact-details');
})

router.get('/verify-documents', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/verify-documents.html'))
})

router.post('/verify-method-answer', function (req, res) {
    var verifyMethod = req.body['verify-documents']
    if (verifyMethod == "Upload a video"){
      res.redirect('/upload-a-video')
    } else if (verifyMethod == "Arrange a virtual meeting"){
        res.redirect('/arrange-virtual-meeting')
    } else {
      res.redirect('/arrange-face-to-face')
    }
})

router.get('/next-steps', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/next-steps.html'))
})

router.post('/next-steps', (req, res) => {
    res.redirect('/next-steps');
})
 
module.exports = router
