// STRETCH
const cars = [
    {
        vin: '111111111',
        make: "toyota",
        model: 'prius',
        mileage: 25000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '111111112',
        make: "dodge",
        model: 'ram',
        mileage: 200000,
        title: 'salvage',
        transmission: 'automatic',
    },
    {
        vin: '111111113',
        make: "chevy",
        model: 'corvette',
        mileage: 50000,
        transmission: 'automatic',
    }
]

exports.seed = function(knex) {
    return knex('cars')
    .truncate().then(() => {
        return knex('cars').insert(cars)
    })
}