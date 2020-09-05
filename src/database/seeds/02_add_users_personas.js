exports.seed = function (knex) {
    return knex('users_personas').insert([{
        user_id: 1,
        persona_id: 1
    }])
}