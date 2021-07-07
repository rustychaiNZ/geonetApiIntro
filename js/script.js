// console.log('log 1');
// $.ajax({
// 	url : 'https://api.geonet.org.nz/intensity?type=reported' ,
// 	type : 'GET' , 
// 	dataType : 'json' , 
// 	success : function(data){
// 		// console.log(data);
// 		console.log('log 2');
// 	} , 
// 	error : function(){
// 		alert('You done goofed somewhere in your code');
// 	}

// });
// console.log('log 3');








// Retrieving Geonet information
$(document).ready(function(){
	
	// accessing apiKey from config.json
	// apiKey = '[{"key" : "yourKeyGoesHere"}]';
	// var myKey = JSON.parse(apiKey); // Convert JSON data into js object
	// console.log(myKey[0]);
	// myKey = myKey[0].key;

	var myKey = JSON.parse(apiKey);
	console.log(myKey[0]);
	myKey = myKey[0].key;
	
	//dynamically creating script tag and appending to the html body including the apikey
	var script = document.createElement('script');
	script.src = 'https://maps.googleapis.com/maps/api/js?key='+ myKey + '&callback=getGeo' ;
	document.getElementsByTagName('body')[0].appendChild(script);
	
	// Dynamically creating the script element
	// var script = document.createElement('script');
	// Giving the src attribute to the google plug in from external json file
	// script.src = 'https://maps.googleapis.com/maps/api/js?key=' + myKey + '&callback=initMap';
	// Appending to the body of index.html
	// document.getElementsByTagName('body')[0].appendChild(script);



	var i;
	var markers = [];
	// variable for storing the users inputted endpoint
	var endPoint;

}); // Document ready ends






// ajax file being retrieved from geonet

	function getGeo(){
		// console.log('here');
		$.ajax({
			url : 'https://api.geonet.org.nz/intensity?type=reported' ,
			type : 'GET' , 
			dataType : 'json' , 
			success : function(data){
				console.log(data);
				var markers = [];
				var i;
				// Loops through the object with the arrays
				for(i = 0; i < data.features.length; i++){
					// Loops through coordinates and displays them in the console
					// for(k = 0; k < data.features[i].geometry.coordinates.length; k++){
						// console.log(data.features[i].geometry.coordinates[k]);
						// long = data.features[i].geometry.coordinates[0];
						// latt = data.features[i].geometry.coordinates[1];
						// console.log('latitude ' + latt + ' longditude ' + long);
					// }
					var obj = {};
					// stores coordinates in an object
					obj.lat = JSON.parse(data.features[i].geometry.coordinates[1]);
					obj.lng = JSON.parse(data.features[i].geometry.coordinates[0]);

					// Pushes long and lattitude into the obj object
					markers.push(obj);
				}
				console.log(markers);
					initMap(markers);
			} , 
			error : function(){
				alert('You done goofed somewhere in your code');
			}

		});

// Ajax ends

	};

// Adds map markers based on cooridinates
function initMap(allMarkers) {
	console.log(allMarkers);
	var marker = [];
	// The center point of the map, Wellington
	var Wellington = {lat: -41.2865, lng: 174.7762};
	// Creating the new map object
	var map = new google.maps.Map(
		document.getElementById('map'), {zoom: 6, center: Wellington});
	// var i;
	var myIcon = {
		url : 'http://maps.google.com/mapfiles/kml/shapes/sailing.png' , 
		scaledSize: new google.maps.Size(50, 50)
	};

	var k;
	for(k = 0; k < allMarkers.length; k++){
		var latLng = {lat:allMarkers[k].lat , lng:allMarkers[k].lng};
		
		marker = new google.maps.Marker({
			position: latLng,
			map: map
		});
	}
};

