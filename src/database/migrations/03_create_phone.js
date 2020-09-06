exports.up = function (knex) {
    return knex.schema.createTable('phone', table => {
        table.increments('id').primary()
        table.string('name_os').notNullable()
        table.string('mark').notNullable()
        table.string('model').notNullable()
        table.float('price').notNullable()
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('phone')
}