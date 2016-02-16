/**
 * http://usejsdoc.org/
 */

var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool = mysql.createPool({
	connectionLimit : 10,
	host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'pm'
});

router.get("/", function(req, resp) {
	pool.getConnection(function(err, connection) {
		connection.query('SELECT * from PRODUCTS', function(err, rows, fields) {
			if (err) {
				throw err;
			}
			resp.json(rows);
			connection.release();
		});
	});
});

module.exports=router;