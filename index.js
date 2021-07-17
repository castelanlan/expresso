const express = require('express')
const app = express()
const favicon = require('serve-favicon')
const port = 42069

app.use(express.static('static'))
app.use(favicon('./static/assets/icon.png'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', function (req, res) {
    res.send('Got a POST request')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})