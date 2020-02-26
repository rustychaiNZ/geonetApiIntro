console.log('blog');

$(document).ready(function(){

  var lat = 175;
  var lng = 40;

  var myKey = JSON.parse(apiKey); //convert JSON data into js object
   console.log (myKey[0].key);

   var script = document.createElement('script');
    script.src='https://maps.googleapis.com/maps/api/js?key='+ myKey[0].key;

    initMap();



	// $.ajax({
	//   url : 'https://api.geonet.org.nz/intensity?type=reported',
	// 	type :'GET',
	// 	dataType :'json',
	// 	success:function(data){
  //     console.log(data);
  //
  //     for (var i = 0; i < data.features.length; i++) {
  //       for (var j = 0; j < data.features[i].geometry.coordinates.length; j++) {
  //           if (j == 0) {
  //              lng = data.features[i].geometry.coordinates[j];
  //             console.log(lng);
  //           } else if (j == 1) {
  //              lat = data.features[i].geometry.coordinates[j];
  //             console.log(lat);
  //           }
  //
  //   			}
  //
  //         initMap();
  //
  //
  //
  //       console.log(i);
  //     }
  //
  //
  //
	// 	}, error:function(){
	// 		console.log('error');
	// 	}
  //
	// });//ajax

  // Initialize and add the map
  function initMap() {
    // The location of Uluru
    var uluru = {lat: lat, lng: lng};
    console.log(uluru);
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});

  }
}); //document ready



// <script async defer
// src="https://maps.googleapis.com/maps/api/js?key=" + myKey&callback=initMap">
// </script>
