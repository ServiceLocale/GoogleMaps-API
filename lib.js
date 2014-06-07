GoogleMaps = Npm.require("googlemaps");

GoogleMaps.getDistance = function(from, to) {
	var pattern = /[a-zA-Z]/

	var gDistance = Meteor._wrapAsync(GoogleMaps.distance.bind(GoogleMaps));

    var data = gDistance(from, to);
    
    var sdata = data.rows[0].elements[0];

	return {
		duration : sdata.duration.value,
		distance : sdata.distance.value
	}
}