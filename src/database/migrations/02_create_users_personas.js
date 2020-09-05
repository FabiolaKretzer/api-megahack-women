exports.up = function (knex) {
    return knex.schema.createTable('users_personas', table => {
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        table.integer('persona_id')
            .notNullable()
            .references('id')
            .inTable('personas')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable()

        table.primary(['user_id', 'persona_id'])
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('users_personas')
}