exports.up = async function (knex) {
    await knex.schema.createTable('tasks', table => {
        table.increments('task_id')
        table.string('task_description')
            .notNullable()
        table.string('task_notes')
        table.boolean('task_completed').defaultTo(false)
        table.integer('project_id').notNullable()
        table.foreign('project_id').references('project_id').inTable('projects')
    })
}
exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('tasks')
}