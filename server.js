var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var port = 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false}));

//overide with Post having ?_method=DELETE
app.use(methodOverride("_method"));

//Set handlers
var exphbs = require("express-handlebars");

app.engine("handlesbars", exhbs({ defaultLayout: "main.handlesbars"}));
app.set("view engine", "handlesbars");

//Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");

app.use("/", routes);

app.listen(port);