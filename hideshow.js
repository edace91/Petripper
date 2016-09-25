$(document).ready(function() {

	hideAll();
	$('#homepage').show();
	
	function hideAll(){

		$('#homepage').hide();
		$('#map').hide();
		$('#input').hide();

	}
	$(".linkHomepage").on("click",function(){

		hideAll();
		$('#homepage').show();
	})

	$(".linkMappage").on("click",function(){

		hideAll();
		$('#mappage').show();
	})
	$(".linkInputpage").on("click",function(){

		hideAll();
		$('#inputpage').show();
	})

});