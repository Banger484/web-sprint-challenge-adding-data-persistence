// build your `/api/projects` router here
const express = require('express')
const { validateProject} = require('./middleware')

const router = express.Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
   Project.getAll()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => {
        next(err)
    })
})

router.post('/', validateProject, async (req, res, next) => {
    const newProject = await Project.create(req.body)
    res.json(newProject)
})

module.exports = router