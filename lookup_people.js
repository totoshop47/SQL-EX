const pg = require("pg");
const settings = require("./settings"); // settings.json
const command = process.argv[2];
const moment = require("moment");
const client = new pg.Client(settings);

function listPeople(db) {
  db.query(`SELECT * FROM famous_people WHERE first_name = '${command}'`, (err, res) => {
    const info = res.rows;

    if(err) throw err;
    console.log('Searching...');
    console.log(`Found ${info.length} person(s) by the name '${command}':`);

    info.forEach(function(each, i) {
      console.log(`- ${i + 1} ${each['first_name']} ${each['last_name']}, born '${moment(each.birthdate).format('YYYY-MM-DD')}'`);
    });
    db.end();
  });
}

client.connect((err) => {
  if(err) throw err;
  listPeople(client);
});
