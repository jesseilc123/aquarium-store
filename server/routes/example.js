const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("/example")
})

router.get("/ex", (req, res) => {
    res.send("example/ex")
})

module.exports = router