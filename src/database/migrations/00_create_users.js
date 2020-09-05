exports.up = function (knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('cpf').notNullable()
        table.string('data_nsc').notNullable()
        table.string('token').notNullable()
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('users')
}