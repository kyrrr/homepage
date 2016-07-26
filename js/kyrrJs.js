$( document ).ready(function(){
	var satellites = $(".satellite").length;
	console.log(satellites);

	setInterval( function() { 
		var random = Math.floor( ( Math.random() * 3 ) + 1)  - 1;
		var colors = ["salmon", "indianred", "white"];
		$(".satellite").css("background-color", colors[random]);

	 }, 500 );

	$( ".satellite" ).mouseover(function() {
 		$(".satellite").css("width", "500px");
 		$(".satellite").css("height", "500px");
	});


	setInterval(function(){
		$(".satellite").show("slow");
	}, 1300 );

	setInterval(function(){
		$(".satellite").hide("slow");
	}, 700 );
		
	/*for ( var i = 0; i < satellites; i += 1 ) {
			
		}*/

	/*$(document).mouseup(function (e)
	{
	    var container = $('.panel');

	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	        container.css("margin-top", "-300%");
	        
	    }

	});*/



});