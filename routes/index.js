/*
 * GET home page.
 */

// mysql://2fd928bae5e3e9:c5a3b637@us-cdbr-east.cleardb.com/heroku_32d26bd36b64469?reconnect=true

var HOST;
var USERNAME;
var PASSWORD;
var DATABASE;

var connect_string_splitted = process.env.CLEARDB_DATABASE_URL.split(":");
USERNAME = connect_string_splitted[1].split("//")[1];
PASSWORD = connect_string_splitted[2].split("@")[0];
HOST = connect_string_splitted[2].split("@")[1].split("/")[0];
DATABASE = connect_string_splitted[2].split("@")[1].split("/")[1].split("?")[0];

var mysql = require('mysql');

var client = mysql.createClient({
  host: HOST,
  user: USERNAME,
  password: PASSWORD,
  database: DATABASE
});

exports.index = function(req, res){

  client.query('SELECT name, owner FROM pet', function(err, results, fields) {
    if (err) {
      throw err;
    }

    res.render('index', { title: 'PMAS Students!', fields: fields, pets: results });
  });

};


exports.add_pet = function(req, res){
  client.query('INSERT INTO pet SET name = ?, owner = ?', [req.param("name"), req.param("owner")], function() {

    client.query('SELECT name, owner FROM pet', function(err, results, fields) {
     if (err) {
       throw err;
     }

      res.render('index', { title: 'PMAS Students!', fields: fields, pets: results });
    });

  });

};
