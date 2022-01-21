const Task = require('./model')

async function validateTask(req, res, next) {
    try{
        const { 
            task_notes, 
            task_description, 
            task_completed,
            project_name,
            project_description,
        } = req.body
        if(!task_notes) {
            res.status(400).json({
                message: "task_notes are required"
            })
        } else if(!task_description) {
            res.status(400).json({
                message: "task_description is required"
            })
            
        } else if(!task_completed) {
            res.status(400).json({
                message: "task_completed is required"
            })
        } else if(!project_name) {
            res.status(400).json({
                message: "project_name is required"
            })
        } else if(!project_description) {
            res.status(400).json({
                message: "project_description is required"
            })
        } else {
            next()
        }
        
    } catch (err) {
        next(err)
    }
}


module.exports = {
    validateTask,
}