$(document).ready(function() {

	hideAll();
	$('#homePage').show();
	
	function hideAll(){

		$('#homePage').hide();
		$('#mapPage').hide();
		$('#inputPage').hide();
		// $('#cat').hide();

	};
	$(".linkHomepage").on("click",function(){

		hideAll();
		$('#homePage').show();
	});

	$(".linkMappage").on("click",function(){

		hideAll();
		// $('#cat').hide();
		$('#mapPage').show();
		// $('#mapPanel').show();
		// $('#map').show();
	});
	$(".linkInputpage").on("click",function(){

		hideAll();
		$('#inputPage').show();
	});

	// $("#petNameinfo > li").append("<li>" + nameinput + "<li>"+ ageinput);

});