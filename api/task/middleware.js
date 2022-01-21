const Task = require('./model')

async function validateTask(req, res, next) {
    try{
        const { 
            task_notes, 
            task_description, 
            task_completed,
            project_id,
            project_description,
        } = req.body
        
        if(!task_notes) {
            res.status(400).json({
                message: "task_notes are required"
            })
            next()
        } else if(!task_description) {
            res.status(400).json({
                message: "task_description is required"
            })
            next()
        } else if(!task_completed) {
            res.status(400).json({
                message: "task_completed is required"
            })
            next()
        } else if(!project_id) {
            res.status(400).json({
               
                message: "project_id is required"
            })
            next()
        } else if(!project_description) {
            res.status(400).json({
                message: "project_description is required"
            })
            next()
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