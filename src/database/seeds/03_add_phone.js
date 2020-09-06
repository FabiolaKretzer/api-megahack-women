exports.seed = function (knex) {
    return knex('phone').insert([{
        name_os: 'android',
        mark: 'samsung',
        model: '665AS',
        price: 1000.99
    }])
}