$(document).ready(function() {

	hideAll();
	$('#homepage').show();
	
	function hideAll(){

		$('#homepage').hide();
		// $('#mapPage').hide();
		$('#input').hide();

	};
	$(".linkHomepage").on("click",function(){

		hideAll();
		$('#homepage').show();
	});

	$(".linkMappage").on("click",function(){

		hideAll();
		$('#mappage').show();
		// $('#mappanel').show();
		// $('#map').show();
	});
	$(".linkInputpage").on("click",function(){

		hideAll();
		$('#mappage').hide();
		$('#input').show();
	});

	// $("#petNameinfo > li").append("<li>" + nameinput + "<li>"+ ageinput);

});
