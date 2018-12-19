
const settings = require("./settings"); // settings.json
const command = process.argv[2];
const moment = require('moment');
const knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

knex.select().from('famous_people').where({first_name : command}).asCallback((err,res) => {
// knex('famous_people').where({first_name: command}).asCallback((err, res) => {
  if (err) throw err;

  console.log('Searching...');
  console.log(`Found ${res.length} person(s) by the name '${command}':`);

  res.forEach(function(each, i) {
    console.log(`- ${i + 1} ${each['first_name']} ${each['last_name']}, born '${moment(each.birthdate).format('YYYY-MM-DD')}'`);
  });
  knex.destroy();
});
