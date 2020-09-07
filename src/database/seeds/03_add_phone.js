exports.seed = function (knex) {
    return knex('phone').insert([{
        name_os: 'Android',
        mark: 'Samsung',
        model: 'SM-G900P',
        price: 1000.99
    }])
}