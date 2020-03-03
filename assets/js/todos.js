// Check Off Specific Todos By Clicking
$("li").click(function(){
	//if li is gray turn it black
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("span").click(function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});