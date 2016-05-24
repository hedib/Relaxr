$(document).ready(function(){
$(".readmore").click(showMore)
function showMore(){
	$(".hide").slideDown();
}
 $(".readless").click(showLess);
 function showLess(){
 	$(".hide").slideUp()
 }

$(".learnmore").click(learnMore)
function learnMore(){
	$(".hide").slideDown();
}

 })

