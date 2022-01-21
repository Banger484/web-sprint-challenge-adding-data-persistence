exports.up = async function (knex) {
    await knex.schema.createTable('project_resources', table => {
        table.increments('project_resource_id')
        table.string('project_name')
        table.foreign('project_name')
            .references('project_name').inTable('projects')
        table.string('project_description')
        table.foreign('project_name')
            .references('project_name').inTable('projects')
        table.string('resource_name')
        table.foreign('resource_name')
            .references('resource_name').inTable('resources')
        table.string('resource_description')
        table.foreign('resource_name')
            .references('resource_name').inTable('resources')
    })
}
exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('project_resources')
}