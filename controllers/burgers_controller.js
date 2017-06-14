var express = require("express");
var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var served = [];
        var devoured = [];
        for (var i=0; i<data.length; i++) {
            if (data[i].devoured) {
                devoured.push(data[i]);
            } else {
                served.push(data[i]);
            }
        };
        var hbsObject = {
            served: served,
            devoured: devoured
        };
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    burger.insertOne([
        "burger", "devoured"
    ], [
        req.body.addBurger, 0
    ], function() {
        res.redirect("/");
    })
});

router.put("/:id", function(req,res) {
    burger.updateOne({
        devoured: 1
    }, "id=" + req.params.id, function() {
        res.redirect("/");
    })
});

// Export routes for server.js to use.
module.exports = router;