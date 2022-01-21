const projects = [
    {
        project_name: 'foo',
        project_description: 'bar',
    }
]

exports.projects = projects

exports.seed = function (knex) {
    return knex('projects').insert(projects)
}