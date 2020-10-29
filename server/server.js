const express = require('express')
const app = express()
const port = 5000

app.get('/api/getMsg', (req, res) => {
    res.send('Hello cooking fans!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})