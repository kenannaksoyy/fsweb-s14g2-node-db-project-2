// ESNEK
const cars = [
    {
      vin: '123',
      make: 'Toyata',
      model: 'Supra',
      mileage: 250000,
      title: 'JDM Legend',
      transmission: 'CVT',
    },
    {
      vin: '22222222222222222',
      make: 'Ford',
      model: 'Mustang',
      mileage: 120000,
      title: 'American Muscle',
      transmission: 'manual',
    },
    {
      vin: '33333333333333333',
      make: 'Nissan',
      model: 'Silvya',
      mileage: 220000,
      title: 'JDM BEST r32',
      transmission: 'automatic',
    },
  ]

exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("cars").truncate();
    await knex("cars").insert(cars);
};
//npm install -g knex