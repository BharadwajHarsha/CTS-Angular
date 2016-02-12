/**
 * http://usejsdoc.org/
 */

var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
	res.send('loading all products');
});

router.post("/", function(req, res) {
	res.send('saving a new product');
});

module.exports = router;