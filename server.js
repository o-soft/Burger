var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use('/assets', express.static(process.cwd() + "/public/assets"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=PUT
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

// app.use("/", express.static('public'));
app.use("/", routes);

app.listen(PORT, function() {
    console.log("You are connected on port: " + PORT)
});