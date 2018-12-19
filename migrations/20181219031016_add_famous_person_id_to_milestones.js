
exports.up = function(knex, Promise) {
  return knex.schema.table('famous_people_table', (table) => {
    table.integer('famous_person_id').unsigned();
    table.foreign('famous_person_id').references('famous_people.id').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('urls', (table) => {
    table.dropColumn('famous_person_id');
  });
};
