const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.use(express.static(path.join(__dirname, './public')))

app.listen(port, () => {
console.log(`App running on port ${port} http://localhost:3000`)
})