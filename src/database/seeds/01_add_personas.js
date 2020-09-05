exports.seed = function (knex) {
    return knex('personas').insert([{
        name: 'João da Silva',
        cpf: '98765432130',
        data_nsc: '25021975',
    }])
}