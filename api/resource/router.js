// build your `/api/resources` router here
const express = require('express')
const { validateResource} = require('./middleware')

const router = express.Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
   Resource.getAll()
    .then(resources => {
        res.json(resources)
    })
    .catch(err => {
        next(err)
    })
})

router.post('/', validateResource, async (req, res, next) => {
    try{
        const newResource = await Resource.create(req.body)
        res.json(newResource)
        next()
    } catch (err) {
        next(err)
    }
})

module.exports = router