/**
 * http://usejsdoc.org/
 */

var mysql = require('mysql');

// var con = mysql.createConnection({
// host : 'localhost',
// user : 'root',
// password : 'root',
// database : 'pm'
// });

// con.connect(function(err) {
// if (err) {
// console.log(err);
// console.log('error on connection');
// return;
// }
// console.log('connected...');
// });

var pool = mysql.createPool({
	connectionLimit : 10,
	host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'pm'
});

// select

//
// pool.getConnection(function(err, connection) {
// connection.query('SELECT * from PRODUCTS', function(err, rows, fields) {
// if (err) {
// throw err;
// }
// // console.log(rows);
// rows.forEach(function(row, i) {
// console.log(row);
// });
// connection.release();
// });
// });

// insert

// pool.getConnection(function(err, connection) {
//	
// var product={id:212313,name:'New Product',price:2000,description:'bla
// bla',make:null};
//	
// connection.query('insert into PRODUCTS SET ?',product,function(err,result){
// if(err){
// console.log(err);
// connection.release();
// return;
// }
// console.log(result);
// connection.release();
// });
//	
//	
//
// });

// update

// pool.getConnection(function(err, connection) {
//
//
// connection.query('update PRODUCTS SET price=? where
// id=?',[0,212313],function(err,result){
// if(err){
// console.log(err);
// connection.release();
// return;
// }
// console.log('updated....');
// connection.release();
// });
//
// });

// Delete

//pool.getConnection(function(err, connection) {
//
//	connection.query('DELETE from PRODUCTS where id=?', [ 212313 ], function(err, result) {
//		if (err) {
//			console.log(err);
//			connection.release();
//			return;
//		}
//		console.log('Deleted....');
//		connection.release();
//	});
//
//});


