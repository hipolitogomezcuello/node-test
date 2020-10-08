const express = require('express')
const app = express()
const port = 8080
const ip= '0.0.0.0'

app.get('/', (req, res) => {
    res.send('Hola Open Shift!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://${ip}:${port}`)
})