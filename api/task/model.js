// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
    getAll,
    getById,
    create,
}

async function getAll() {
    const rows = await db('tasks')
    .join('projects', 'tasks.project_id', 'projects.project_id')
    .select(
        'tasks.task_notes',
        'tasks.task_description',
        'tasks.task_completed',
        'projects.project_name',
        'projects.project_description',
    )
    return rows
}

function getById(id) {
    return db('tasks').where('task_id', id).first()
}

async function create(task) {
    const [id] = await db('tasks').insert(task)
    .join('projects', 'tasks.project_id', 'projects.project_id')
    
    return getById(id)
    
}
