// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
    getAll,
    getById,
    create,
}

function getAll() {
    return db('projects')
}

function getById(id) {
    return db('projects').where('project_id', id).first()
}

async function create(project) {
    const [id] = await db('projects').insert(project)
    return getById(id)
}