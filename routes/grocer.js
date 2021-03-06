const express = require('express')
const router = express.Router()

const queries = require('../queries')

router.get("/", (request, response, next) => {
    queries.listgrocers().then(grocers => {
        response.json({grocers})
    }).catch(next)
})

router.get("/:id", (request, response, next) => {
    queries.readgrocers(request.params.id).then(grocers => {
        grocers
            ? response.json({grocers})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.creategrocers(request.body).then(grocers => {
        response.status(201).json({grocers});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.deletegrocers(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.updategrocers(request.params.id, request.body).then(grocers => {
        response.json({grocers});
    }).catch(next);
});

module.exports = router
