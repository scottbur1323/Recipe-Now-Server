const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const meal = require('./routes/meal')
const grocer = require('./routes/grocer')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.use('/meal', meal)
// app.use('/grocer', grocer)

app.use((req, res, next) => {
    const err = new Error("Not Found")
    err.status = 404
    next(err)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
    })
})

module.exports = app
