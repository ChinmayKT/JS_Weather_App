const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 3001

app.use(express.static('src'))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/index.html'))
})

app.listen(port, (req, res) => console.log('SERVER STARTED'))