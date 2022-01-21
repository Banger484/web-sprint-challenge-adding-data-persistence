// build your `Resource` model here
const db = require('../../data/dbConfig')

module.exports = {
    getAll,
    getById,
    create,
    getByResourceName,
}

function getAll() {
    return db('resources')
}

function getById(id) {
    return db('resources').where('resource_id', id).first()
}

async function create(resource) {
    await db('resources').insert(resource)
    return resource
}

function getByResourceName(name) {
    const resource = db('resources').where('resource_name', name).first()
    return resource
}