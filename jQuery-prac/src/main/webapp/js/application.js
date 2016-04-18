/**
 * jQuery prac
 */

jQuery(document).ready(function() {
	console.log($("h1").text());
	$("h1").text("Where to?");
	var price = $('<p>From $399</p>');
	// $("#vacations-wrapper").append(price);
	// $("#vacations-wrapper").prepend(price);
	//$("#vacations-wrapper").before(price);
	//$("#vacations-wrapper").after(price);
	price.appendTo('#vacations-wrapper');
	price.prependTo('#vacations-wrapper');
	price.insertAfter('#vacations-wrapper');
	price.insertBefore('#vacations-wrapper');
	
});