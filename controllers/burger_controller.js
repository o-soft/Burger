var express = require("express");

var router = express.Router();

//Import model (burger.js) to use DB methods

// create all routes and set up logic within those routes when required
router.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burger: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res) {
	burger.create([
		"name", "devoured"
		], [
			req.body.name, req.body.devoured
		], function() {
			res.redirect("/");
	});
});

router.put(":id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.update({
		devoured: req.body.devoured
	}, condition, function() {
		res.redirect("/");
	});
});

// Export routes for server.js to import
module.exports = router;