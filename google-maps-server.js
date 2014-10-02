GoogleMaps = Npm.require("googlemaps");

/*
// Configure Settings like this
GoogleMaps.config({
  'google-private-key': null,
  'google-client-id': null,
  'stagger-time': 200,
  'encode-polylines': true,
  'secure': false,
  'proxy': null,
});
*/


/**
 * Get Distance / Duration from Google Maps API
 *   (simple version, only supports from and to)
 *
 * https://github.com/moshen/node-googlemaps/blob/master/lib/googlemaps.js#L136
 * https://developers.google.com/maps/documentation/distancematrix/
 *
 * @param mixed from - "from address"
 * @param string to - "to address"
 * @return object durationAndDistance
 */
GoogleMaps.getDistance = function(from, to) {
  var pattern = /[a-zA-Z]/;
  var api = Meteor.wrapAsync(GoogleMaps.distance.bind(GoogleMaps), GoogleMaps);
  var data = api(from, to);
  var sdata = data.rows[0].elements[0];
  return {
    duration : sdata.duration.value,
    duration_nice : sdata.duration.text,
    distance : sdata.distance.value,
    distance_nice : sdata.distance.text
  };
};


/**
 * Get Directions / Route information from Google Maps API
 *   (simple version, only supports from and to)
 *
 * https://github.com/moshen/node-googlemaps/blob/master/lib/googlemaps.js#L151
 * https://developers.google.com/maps/documentation/directions/
 *
 * @param mixed from - "from address"
 * @param string to - "to address"
 * @return object directions
 */
GoogleMaps.getDirections = function(from, to) {
  var pattern = /[a-zA-Z]/;
  var api = Meteor.wrapAsync(GoogleMaps.directions.bind(GoogleMaps));
  var data = api(from, to);
  return data;
};

/**
 * Get Directions / Route information from Google Maps API
 *   (full version, supports all arguments)
 *
 * https://github.com/moshen/node-googlemaps/blob/master/lib/googlemaps.js#L151
 * https://developers.google.com/maps/documentation/directions/
 *
 * @param object options (see defaults and docs for)
 * @return object directions
 *
 *
 * NOT WORKING RIGHT NOW... :/
 */
GoogleMaps.getDirectionsFull = function(options) {
  options = {
    origin: null,
    destination: null,
    callback: null,
    sensor: 'false',
    mode: null,
    waypoints: null,
    alternatives: null,
    avoid: null,
    units: null,
    language: null,
    departureTime: null,
    arrivalTime: null,
    region: null
  };

  if (typeof from == "object") {
    options = _.extend(options, options);
  }

  /*
   * tried this too, but didn't work for me
  var future = new Future;
  options.callback = Meteor.bindEnvironment(function(error, body) {
     if (error) {
       return future.error(error);
     }
     future.return(body);
  });
  */

  var api = Meteor.wrapAsync(GoogleMaps.directions.bind(GoogleMaps));
  var data = api(
    options.origin,
    options.destination,
    options.callback,
    options.sensor,
    options.mode,
    options.waypoints,
    options.alternatives,
    options.avoid,
    options.units,
    options.language,
    options.departureTime,
    options.arrivalTime,
    options.region
  );
  //console.log(data);
  //var data = future.wait();
  console.log(data);
  return data;
};




