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
        db = getDb()
    }
})

// routes
app.get("/livestocks", (req, res) => {
    let livestocks = []

    db.collection("livestocks")
        .find()
        .forEach(livestock => livestocks.push(livestock))
        .then(() => {
            res.status(200).json(livestocks)
        })
        .catch(() => {
            res.status(500).json({error: "Could not fetch livestock"})
        })
})
app.get("/", (req, res) => {
    res.json({message: "HELLO!"})
})