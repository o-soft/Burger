//Set up MYSQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
port: 3000,
host: "localhost",
user: "root",
password: "",
database: "burger_db"
});

//Make connection
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
		console.log("connection as id " + connection.threadId);
})

//export connection for our ORM to use
module.exports = connection;