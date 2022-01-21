// build your `/api/tasks` router here
const express = require('express')
const { validateTask } = require('./middleware')

const router = express.Router()
const Task = require('./model')

router.get('/', (req, res, next) => {
   Task.getAll()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(err => {
        next(err)
    })
})

router.post('/', validateTask, async (req, res, next) => {
    try{
        const newTask = await Task.create(req.body)
        res.json(newTask)
        next()
    } catch (err) {
        next(err)
    }
})

module.exports = router