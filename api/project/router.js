// build your `/api/projects` router here
const express = require('express')
const { validateProject } = require('./middleware')

const router = express.Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
   Project.getAll()
    .then(projects => {
        projects.forEach(project => {
            if(project.project_completed === 0) {
                project.project_completed = false
                return project
            } else {
                project.project_completed = true
                return project
            }
        })
        res.json(projects)
    })
    .catch(err => {
        next(err)
    })
})

router.post('/', validateProject, async (req, res, next) => {
    const newProject = await Project.create(req.body)
    if(newProject.project_completed === 0) {
        newProject.project_completed = false
        res.json(newProject)
    } else {
        newProject.project_completed = true
        res.json(newProject)
    }
})

module.exports = router