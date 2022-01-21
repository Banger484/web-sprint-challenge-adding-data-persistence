const Resource = require('./model')

function validateResource(req, res, next) {
    try {
        Resource.getByResourceName(req.body.resource_name)
            .then(match => {
            if(match) {
                res.status(400).json({
                    message: `${match.resource_name} already exists`
                })
            } else if (!match) {
                next()
            }
            })
            .catch(err => {
                next(err)
            })
    } catch (err) {
        next(err)
    }
}


module.exports = {
    validateResource,
}