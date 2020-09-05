exports.seed = function (knex) {
    return knex('users').insert([{
        name: 'Maria da Silva',
        cpf: '12345678930',
        data_nsc: '28051975',
        token: 'abcd'
    }])
}