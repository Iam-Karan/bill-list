const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("you are on my homepage!")
})

app.listen(port, () => {
    console.log(`Running at https://locoalhost:${port}`)
})