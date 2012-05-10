
/*
 * GET home page.
 */

var mysql = require('mysql');
var DATABASE = "heroku_32d26bd36b64469";

var client = mysql.createClient({
  host: "us-cdbr-east.cleardb.com",
  user: '1fd928bae5e3e9',
  password: 'c5a3b637'
});


// If no callback is provided, any errors will be emitted as `'error'`
// events by the client
client.query('USE '+DATABASE);

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
