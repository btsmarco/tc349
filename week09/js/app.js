$(document).ready(function(){
	var myQuote = $('#my_quote');
	myQuote.hide();
	$('.button').click(function(){
		myQuote.show(500);
	});
});
