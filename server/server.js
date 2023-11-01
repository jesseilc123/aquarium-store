const express = require('express')
const { connectToDb, getDb } = require('./db')

// init app & middleware
const app = express()

//db connection 
let db

connectToDb((err) => {
    if(!err) {
        app.listen(5555, () => {
            console.log("listening on port 5555")
        })
    }
    db = getDb()
})



app.get("/", (req, res) => {
    console.log('Here')
    res.status(200).send("hi")
})

const exampleRouter = require('./routes/example')

app.use("/example", exampleRouter)

