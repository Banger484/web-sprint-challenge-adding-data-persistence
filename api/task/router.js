// build your `/api/tasks` router here
const express = require('express')
const { validateTask } = require('./middleware')

const router = express.Router()
const Task = require('./model')

router.get('/', (req, res, next) => {
   Task.getAll()
    .then(tasks => {
        tasks.forEach(task => {
            if(task.task_completed === 0) {
                task.task_completed = false
                return task
            } else {
                task.task_completed = true
                return task
            }
        })
        res.json(tasks)
    })
    .catch(err => {
        next(err)
    })
})

router.post('/', validateTask, async (req, res, next) => {
    try{
        const newTask = await Task.create(req.body)
        if(newTask.task_completed === 0) {
            newTask.task_completed = false
            res.json(newTask)
        } else {
            newTask.task_completed = true
            res.json(newTask)
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router