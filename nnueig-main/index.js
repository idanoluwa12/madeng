$(document).ready(function() {
	
});

$(".overlay").click(function(event) {
	event.preventDefault();
	$(this).toggleClass('hide');
	$(".sidemenu").toggleClass('hide');
});

$(".sidemenu-close").click(function(event) {
	event.preventDefault();
	$(".overlay").toggleClass('hide');
	$(".sidemenu").toggleClass('hide');
});

$(".sidemenu-open").click(function(event) {
	event.preventDefault();
	$(".overlay").toggleClass('hide');
	$(".sidemenu").toggleClass('hide');
});

$(".dialog-btn").click(function(event) {
	event.preventDefault();
	$(".dialog").toggleClass('hide');
});