// Retrieving Geonet information
$(document).ready(function(){
	
	// accessing apiKey from config.json
	// apiKey = '[{"key" : "yourKeyGoesHere"}]';
	// var myKey = JSON.parse(apiKey); // Convert JSON data into js object
	// console.log(myKey[0]);
	// myKey = myKey[0].key;
	
	// Dynamically creating the script element
	// var script = document.createElement('script');
	// Giving the src attribute to the google plug in from external json file
	// script.src = 'https://maps.googleapis.com/maps/api/js?key=' + myKey + '&callback=initMap';
	// Appending to the body of index.html
	// document.getElementsByTagName('body')[0].appendChild(script);

	var myKey = JSON.parse(apiKey); // Convert JSON data into js object

	// Dynamically creating the script element
	var script = document.createElement('script');
	// Giving the src attribute to the google plug in from external json file
	script.src = 'https://maps.googleapis.com/maps/api/js?key=' + myKey[0].key + '&callback=initMap';
	// Appending to the body of index.html
	document.getElementsByTagName('body')[0].appendChild(script);


	var i;
	var k;
	var long;
	var lat;
	// varibale for storing the users inputted end point
	var endPoint;

	// ajax file being retrieved from geonet
	$.ajax({
		url : 'https://api.geonet.org.nz/intensity?type=reported' ,
		type : 'GET' , 
		dataType : 'json' , 
		success : function(data){
			console.log(data);
			var markers = [];
			// Loops through the object with the arrays
			for(i = 0; i < data.features.length; i++){
				// Loops through coordinates
				for(k = 0; k < data.features[i].geometry.coordinates.length; k++){
					long = data.features[i].geometry.coordinates[0];
					lat = data.features[i].geometry.coordinates[1];
					console.log('latitude ' + lat + ' longditude ' + long);
				}
			}
			initMap(markers);
		} , 
		error : function(){
			alert('You done goofed somewhere in your code');
		}
	});
});

var map;
function initMap(allMarkers) {
	var marker = [];
	var Wellington = {lat: -41.2865, lng: 174.7762};
	// Creating the new map object
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 6,
		center: Wellington  
	});
	// var myIcon = {
	// 	url : 'http://maps.google.cim/mapfiles/kml/shapes/sailing.png' , 
	// 	scaledSize: new google.maps.Size(50, 50)
	// };



	//Associate the styled map with the MapTypeId and set it to display.
    // map.mapTypes.set('styled_map', styledMapType);
    // map.setMapTypeId('styled_map');
}