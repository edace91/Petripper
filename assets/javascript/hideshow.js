$(document).ready(function() {

	hideAll();
	$("#homepage").css("display", "block");
	
	function hideAll(){

		$("#homepage").css("display", "none");
		$("#mappage").css("display", "none");
		$("#input").css("display", "none");
	}

	$(".linkHomepage").on("click",function(){

		$("#homepage").css("display", "block");
		$("#mappage").css("display", "none");
		$("#input").css("display", "none");

		//hideAll();
		//$('#homepage').show();

	})

	$(".linkMappage").on("click",function(){

		$("#mappage").css("display", "block");
		$("#input").css("display", "none");
		$("#homepage").css("display", "none");
		//hideAll();
		//$('#mappage').show();
	})
	$(".linkInputpage").on("click",function(){

		$("#input").css("display", "block");
		$("#mappage").css("display", "none");
		$("#homepage").css("display", "none");
		//hideAll();
		//$('#input').show();
	})

});