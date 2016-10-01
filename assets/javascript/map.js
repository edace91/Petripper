// $(document).ready(function() {

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

      var map;
      var infowindow;

      function initMap() {
        var pyrmont = {lat: 30.3800, lng: -97.7412};

console.log("initMap running");
console.log(google.maps);

        map = new google.maps.Map(document.getElementById('map'), {
          center: pyrmont,
          zoom: 14
        });


        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: pyrmont,
          radius: 2000,
          type: ['veterinary_care']
          // type: ['pet_store']
          
        }, callback);
      }

      function callback(results, status) {
        console.log(results);

// $('#mappanel').html(yourHtmlHere);
// $('#mappanel').trigger('create');
// $('#mappanel').trigger('updatelayout');

        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
            // console.log("storename :",results[i].name);
            // console.log("place_id :",results[i].place_id);
            // console.log("address :",results[i].vicinity);
            // console.log("rating :",results[i].rating);
            //pull details by getDetails
            request={placeId: results[i].place_id};
            var infowindow = new google.maps.InfoWindow();
            var service = new google.maps.places.PlacesService(map);

            service.getDetails(request, function(place, status) {
              // console.log(status);
              // console.log(request);
            // console.log(place);

            console.log("storename :",place.name);
            console.log("address :",place.formatted_address);
            console.log("phone_number :",place.formatted_phone_number);
            console.log("rating :",place.reviews);
            console.log("website:",place.website);

            $('#mappanel').append(place.name);
            });

          }
        }
        
      }

      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }
// });


