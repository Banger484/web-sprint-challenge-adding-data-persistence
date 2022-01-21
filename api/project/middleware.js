
async function validateProject(req, res, next) {
    try{
        const { project_name } = req.body
        if(!project_name) {
            res.status(400).json({
                message: "project_name is required"
            })
        } else {
            next()
        }
        
    } catch (err) {
        next(err)
    }
}



module.exports = {
    validateProject,
}