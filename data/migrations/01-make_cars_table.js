exports.up = function (knex) {
  // SİHRİNİZİ GÖSTERİN
  return knex.schema.createTable("cars", (ct)=>{
    ct.increments();
    ct.string("vin").notNullable().unique();
    ct.string("make").notNullable();
    ct.string("model").notNullable();
    ct.integer("mileage").notNullable();
    ct.string("title");
    ct.string("transmission");
  })
  
};

exports.down = function (knex) {
  // SİHRİNİZİ GÖSTERİN
  return knex.schema.dropTableIfExists("cars");
};
