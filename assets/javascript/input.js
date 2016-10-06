
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDKjGS5SrSZ4ChDoi2F3wXCvaR6jYuW-k4",
    authDomain: "petripper-be46b.firebaseapp.com",
    databaseURL: "https://petripper-be46b.firebaseio.com",
    storageBucket: "petripper-be46b.appspot.com",
    messagingSenderId: "790872853827"
  };
  firebase.initializeApp(config);

var database = firebase.database();
// user input
$(".btn").on("click",function(){
	var petname = $("#nameinput").val().trim();
	var petage = $("#ageinput").val().trim();
	var chip = $("#chipinput").val().trim();
	var ownerinfo = $("#ownerinput").val().trim();
	var species = $("input[name=species]:checked", "#speciesbtn").val();
	//var gender = $("#genderId :selected").text();
	var gender = $("input[name=Gender]:checked", "#genderbtn").val();
	console.log("species " + species+" gender "+ gender);

	var errorMsg = checkFields(petname, petage, ownerinfo, species);

	if(errorMsg != ''){
		alert(errorMsg);
	}
	else{ // if there are missing fields don't send info to database

		// create an object
		var newProfile ={
			name: petname,
			age: petage,
			chip: chip,
			info: ownerinfo,
			species: species,
			gender: gender 

		}
		/*uploads new profile to the database*/
		database.ref().push(newProfile);

		// log everything to console
		console.log(newProfile.name);
		console.log(newProfile.age);
		console.log(newProfile.chip);
		console.log(newProfile.info);
		console.log(newProfile.species);
		console.log(newProfile.gender);

		// clear each text box
		$("#nameinput").val("");
		$("#ageinput").val("");
		$("#chipinput").val("");
		$("#ownerinput").val("");
		$(".animal").prop("checked", false);
		$(".gender").prop("checked", false);
		//$('select option:first-child').attr("selected", "selected");

	 	$("petNameinfo").empty();
  
		var list = $("#petNameinfo").append('<ul></ul>').find('ul');
		list.append('<li>'+ newProfile.name + '</li>');
		list.append('<li>'+ newProfile.age + '</li>');
	}

	// Prevents moving to new page
  	return false;
});
// Create Firebase event for adding into into to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey){
  console.log(childSnapshot.val());
// stores everything into a variable
  var petname = childSnapshot.val().name;
  var petage = childSnapshot.val().age;
  var chip = childSnapshot.val().chip;
  var ownerinfo = childSnapshot.val().info;
  var species = childSnapshot.val().species;
  var gender = childSnapshot.val().gender;

  console.log(petname);
  console.log(petage);
  console.log(chip);
  console.log(ownerinfo);
  console.log(species);
  console.log(gender);

//   ref.on("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });


  $("#userProfile > p").append(petname + petage + chip + ownerinfo + species + gender);


});

function checkFields(petname, petage, ownerinfo, species){
	var errorMsg = "Please fill in the blank fields:\n\n";
	//var petname = $("#nameinput").val();
	//var petage = $("#ageinput").val();

	var nameBlank = false;
	var ageBlank = false;
	var ownerInfoBlank = false;
	var speciesBlank = false;

	if (petname == ''){
		nameBlank = true;
		errorMsg += "Pets Name\n";
	}
	if(petage == ''){
		ageBlank = true;
		errorMsg += "Pets Age\n";
	}
	if(ownerinfo == ''){
		ownerInfoBlank = true;
		errorMsg += "Owner info\n";
	}
	if(species == ''){
		speciesBlank = true;
		errorMsg += 'Species';
	}
	if(!nameBlank && !ageBlank && !ownerInfoBlank && !speciesBlank){
		errorMsg = '';
	}
	return errorMsg;
}






