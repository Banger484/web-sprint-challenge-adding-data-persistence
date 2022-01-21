async function validateTask(req, res, next) {
    const {
        task_description,
        project_id
    } = req.body
    if(!project_id || !task_description) {
        res.status(400).json({
            message: 'Request is missing information.'
        })
    } else {
        next()
    }
}


module.exports = {
    validateTask,
}