/**
 * http://usejsdoc.org/
 */

/*
 * 2 types of objects
 * 
 * --> native --> host
 * 
 */
//
//document.addEventListener('DOMContentLoaded',function(event){
//	
//	var box = document.querySelector('.jumbotron');
//	var showBtn = document.querySelector('.btn-success');
//	var hideBtn = document.querySelector('.btn-danger');
//
//	showBtn.addEventListener('click', function(event) {
//		box.style.display = 'block';
//	});
//	hideBtn.addEventListener('click', function(event) {
//		box.style.display = 'none';
//	});
//	
////	document.querySelector('#inp')
////	.addEventListener('keyup', function(e) {
////	console.log(e.type);	
////	});
//	
//});



// using jQuery



$(document).ready(function(){
	var box=$('.jumbotron');
	$(".btn-success").click(function(){
		box.show();
	});
	$(".btn-danger").click(function(){
		box.hide();
	});
});















