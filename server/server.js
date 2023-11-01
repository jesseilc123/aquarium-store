const express = require('express')
const app = express()

app.get("/", (req, res) => {
    console.log('Here')
    res.status(200).send("hi")
})

const exampleRouter = require('./routes/example')

app.use("/example", exampleRouter)

app.listen(5555)