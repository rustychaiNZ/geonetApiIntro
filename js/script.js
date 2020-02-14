// Retrieving Geonet information
$(document).ready(function(){
	
	// accessing apiKey from config.json
	// apiKey = '[{"key" : "yourKeyGoesHere"}]';
	var myKey = JSON.parse(apiKey); // Convert JSON data into js object
	
	// Dynamically creating the script element
	var script = document.createElement('script');
	// Giving the src attribute to the google plug in from external json file
	script.src = 'https://maps.googleapis.com/maps/api/js?key=' + myKey[0].key + '&callback=initMap';
	// Appending to the body of index.html
	document.getElementsByTagName('body')[0].appendChild(script);

	var i;
	var k;
	// varibale for storing the users inputted end point
	var endPoint;

	// ajax file being retrieved from geonet
	$.ajax({
		url : 'https://api.geonet.org.nz/intensity?type=reported' ,
		type : 'GET' , 
		dataType : 'json' , 
		success : function(data){
			console.log(data);
			// Loops through the object with the arrays
			for(i = 0; i < data.features.length; i++){
				// Loops through coordinates
				for(k = 0; k < data.features[i].geometry.coordinates.length; k++){
					console.log(data.features[i].geometry.coordinates[k]);
				}
			}
		} , 
		error : function(){
			alert('You done goofed somewhere in your code');
		}
	});
});

function initMap() {
	// Creating the new map object
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 6,
		center: {lat: -41.010786, lng: 175.325764}  
	});

	//Associate the styled map with the MapTypeId and set it to display.
    // map.mapTypes.set('styled_map', styledMapType);
    // map.setMapTypeId('styled_map');
}