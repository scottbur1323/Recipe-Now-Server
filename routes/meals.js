const express = require('express')
const router = express.Router()

const queries = require('../queries')

router.get("/", (request, response, next) => {
    queries.list().then(meals => {
        response.json({meals})
    })
    .catch(next)
})

module.exports = router
