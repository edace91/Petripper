$(document).ready(function() {

	hideAll();
	$('#homepage').show();
	function hideAll(){

		$('#homepage').hide();
		// $('#mappage').hide();
		$('#input').hide();

	}
	$(".linkHomepage").on("click",function(){

		hideAll();
		$('#homepage').show();
	});

	$(".linkMappage").on("click",function(){

		hideAll();
		$('#mappage').show();
	});
	$(".linkInputpage").on("click",function(){

		hideAll();
		$('#input').show();
		$('#mappage').hide();
	});

	// $("#petNameinfo > li").append("<li>" + nameinput + "<li>"+ ageinput);

});