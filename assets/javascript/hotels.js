$(document).ready(function() {
	var hotelPanel=
	var queryURL = "http://terminal2.expedia.com:80/x/nlp/results?q=pet%20friendly%20and%20hotel%20in%20Austin&apikey=5dTnLH3PqgOJ4eGr7WLZBbtVJOkyWAWw";

	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
	     console.log(response);
	     console.log(response.result.hotels.length);
	     var count=response.result.hotels.length;
	     console.log(count);

     for (var i=0; i<count;i++){
	     console.log("Hotel name: ",response.result.hotels[i].name);
	     //recommend hotel for pet friendliness


	 }

	}); 

	// $("#hotel").onclick(populateHotels() {
	// 	alert("You have clicked the HOTEL icon.")

	});


	// var count=response.result.hotels.length;


	var queryURL2="http://terminal2.expedia.com:80/x/activities/search?location=Austin%2C%20Texas&startDate=2015-08-08&endDate=2015-08-18&apikey=5dTnLH3PqgOJ4eGr7WLZBbtVJOkyWAWw";
	

	$.ajax({url: queryURL2, method: 'GET'}).done(function(response) {
	     console.log(response);

	     //Recommend activities

	     for (var i=0; i<11; i++){
				console.log("activities: ",response.activities[i].title);
				console.log("price: ",response.activities[i].fromPrice);
				console.log("activity duration: ",response.activities[i].duration);
	     }
	});
});
