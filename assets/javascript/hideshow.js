$(document).ready(function() {

	hideAll();
	$('#homepage').show();
	function hideAll(){

<<<<<<< HEAD
		$("#homepage").css("display", "none");
		$("#mappage").css("display", "none");
		$("#input").css("display", "none");
=======
		$('#homepage').hide();
		// $('#mappage').hide();
		$('#input').hide();

>>>>>>> mapping
	}

	$(".linkHomepage").on("click",function(){

<<<<<<< HEAD
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
=======
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
>>>>>>> mapping

});