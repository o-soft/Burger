// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
   
  //host: "localhost",
  // user: "root",
  // password: "bobross",
  // database: "burger_db",
  // port: 3306,
  // connectionLimit: 5 
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("MYSQL: error connecting: " + err.stack);
    return;
  }
  console.log("MYSQL: connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;