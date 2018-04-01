const express = require('express')
const router = express.Router()

const queries = require('../queries')

router.get("/", (request, response, next) => {
    queries.listMeals().then(meals => {
        response.json({meals})
    }).catch(next)
})

router.get("/:id", (request, response, next) => {
    queries.readMeals(request.params.id).then(meals => {
        meals
            ? response.json({meals})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.createMeals(request.body).then(meals => {
        response.status(201).json({meals});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.deleteMeals(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.updateMeals(request.params.id, request.body).then(meals => {
        response.json({meals});
    }).catch(next);
});

module.exports = router
