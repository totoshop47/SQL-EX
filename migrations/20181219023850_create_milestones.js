
exports.up = function(knex, Promise) {
  return knex.schema.createTable('famous_people_table', (table) => {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.date('birthdate');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('famous_people_table');
};
