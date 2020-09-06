exports.seed = function (knex) {
    return knex('personas').insert([{
        name: 'João da Silva',
        cpf: '84043959001',
        data_nsc: '25021975',
        type: 'MARRIED'
    }])
}