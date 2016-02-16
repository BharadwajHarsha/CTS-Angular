/**
 * http://usejsdoc.org/
 */

var orm = require("orm");

orm.connect("mysql://root:root@localhost/pm", function (err, db) {
	
	if(err){
		console.log('error..');
		return;
	}
	
	// Object
	var Product = db.define("products", {
		id                : Number,
		name              : String,
		price             : Number,
		description       : String,
		make              : Date
	});
	
	
	Product.find(function(err,products){
		if(err){
			console.log('error on finding products..');
		}
		products.forEach(function(product, i) {
			console.log(product.name);
		});
	});
	
	
});