Tinytest.add('api-init', function (test) {
  test.equal(typeof GoogleMaps, 'object', 'We do not have GoogleMaps defined');
});

Tinytest.add('api-distance', function (test) {
  var result = GoogleMaps.getDistance(
    "100 East Main Street, Louisville KY, 40202",
    "500 East Main Street, Louisville KY, 40202"
  );
  var expect = {
    duration: 139,
    duration_nice: "2 mins",
    distance: 1036,
    distance_nice: "1.0 km"
  }
  test.equal(result, expect, 'distance and duration should match "known" for 100 - 500 East Main St. Louisville, KY');

  var result = GoogleMaps.getDistance(
    "Louisville KY, 40202",
    "Houston TX, 77099"
  );
  var expect = {
    duration: 52076,
    duration_nice: "14 hours 28 mins",
    distance: 1555382,
    distance_nice: "1,555 km"
  }
  test.equal(result, expect, 'distance and duration should match "known" for Louisville, KY to Houston, TX');
});

Tinytest.add('api-directions', function (test) {
  var result = GoogleMaps.getDirections(
    "100 East Main Street, Louisville KY, 40202",
    "500 East Main Street, Louisville KY, 40202"
  );
  var expect = JSON.parse('{"routes":[{"bounds":{"northeast":{"lat":38.2560702,"lng":-85.7438597},"southwest":{"lat":38.2538432,"lng":-85.7518102}},"copyrights":"Map data ©2014 Google","legs":[{"distance":{"text":"0.6 mi","value":1036},"duration":{"text":"2 mins","value":140},"end_address":"500 East Main Street, Louisville, KY 40202, USA","end_location":{"lat":38.2552239,"lng":-85.7438597},"start_address":"100 East Main Street, Louisville, KY 40202, USA","start_location":{"lat":38.2560158,"lng":-85.7510808},"steps":[{"distance":{"text":"144 ft","value":44},"duration":{"text":"1 min","value":3},"end_location":{"lat":38.2560702,"lng":-85.7515844},"html_instructions":"Head <b>west</b> on <b>E Main St</b> toward <b>S 1st St</b>","polyline":{"points":"c{nhFfgkjOIbB"},"start_location":{"lat":38.2560158,"lng":-85.7510808},"travel_mode":"DRIVING"},{"distance":{"text":"0.1 mi","value":156},"duration":{"text":"1 min","value":18},"end_location":{"lat":38.2546819,"lng":-85.7518102},"html_instructions":"Take the 1st <b>left</b> onto <b>S 1st St</b>","polyline":{"points":"m{nhFjjkjOtGl@"},"start_location":{"lat":38.2560702,"lng":-85.7515844},"travel_mode":"DRIVING"},{"distance":{"text":"0.4 mi","value":681},"duration":{"text":"2 mins","value":98},"end_location":{"lat":38.2538432,"lng":-85.7440871},"html_instructions":"Take the 1st <b>left</b> onto <b>E Market St</b>","polyline":{"points":"wrnhFxkkjODu@L_CNuCf@qKFiANcCTeEZeGFcAHkA"},"start_location":{"lat":38.2546819,"lng":-85.7518102},"travel_mode":"DRIVING"},{"distance":{"text":"0.1 mi","value":155},"duration":{"text":"1 min","value":21},"end_location":{"lat":38.2552239,"lng":-85.7438597},"html_instructions":"Turn <b>left</b> onto <b>S Jackson St</b>","maneuver":"turn-left","polyline":{"points":"omnhFp{ijOqEc@aAI"},"start_location":{"lat":38.2538432,"lng":-85.7440871},"travel_mode":"DRIVING"}],"via_waypoint":[]}],"overview_polyline":{"points":"c{nhFfgkjOIbBtGl@RuDnAuVbA{QsGm@"},"summary":"E Market St","warnings":[],"waypoint_order":[]}],"status":"OK"}');
  test.equal(result, expect, 'directions should match for known, short trip');
});

/*
 * CURRENTLY FAILING
 *   code not functional
 *
Tinytest.add('api-directions-full', function (test) {
  var result = GoogleMaps.getDirectionsFull({
    origin: "100 East Main Street, Louisville KY, 40202",
    destination: "500 East Main Street, Louisville KY, 40202",
    sensor: 'false',
    mode: 'DRIVING',
    waypoints: null,
    alternatives: null,
    avoid: null,
    units: null,
    language: null,
    departureTime: null,
    arrivalTime: null,
    region: null
  });
  var expect = JSON.parse('{"routes":[{"bounds":{"northeast":{"lat":38.2560702,"lng":-85.7438597},"southwest":{"lat":38.2538432,"lng":-85.7518102}},"copyrights":"Map data ©2014 Google","legs":[{"distance":{"text":"0.6 mi","value":1036},"duration":{"text":"2 mins","value":140},"end_address":"500 East Main Street, Louisville, KY 40202, USA","end_location":{"lat":38.2552239,"lng":-85.7438597},"start_address":"100 East Main Street, Louisville, KY 40202, USA","start_location":{"lat":38.2560158,"lng":-85.7510808},"steps":[{"distance":{"text":"144 ft","value":44},"duration":{"text":"1 min","value":3},"end_location":{"lat":38.2560702,"lng":-85.7515844},"html_instructions":"Head <b>west</b> on <b>E Main St</b> toward <b>S 1st St</b>","polyline":{"points":"c{nhFfgkjOIbB"},"start_location":{"lat":38.2560158,"lng":-85.7510808},"travel_mode":"DRIVING"},{"distance":{"text":"0.1 mi","value":156},"duration":{"text":"1 min","value":18},"end_location":{"lat":38.2546819,"lng":-85.7518102},"html_instructions":"Take the 1st <b>left</b> onto <b>S 1st St</b>","polyline":{"points":"m{nhFjjkjOtGl@"},"start_location":{"lat":38.2560702,"lng":-85.7515844},"travel_mode":"DRIVING"},{"distance":{"text":"0.4 mi","value":681},"duration":{"text":"2 mins","value":98},"end_location":{"lat":38.2538432,"lng":-85.7440871},"html_instructions":"Take the 1st <b>left</b> onto <b>E Market St</b>","polyline":{"points":"wrnhFxkkjODu@L_CNuCf@qKFiANcCTeEZeGFcAHkA"},"start_location":{"lat":38.2546819,"lng":-85.7518102},"travel_mode":"DRIVING"},{"distance":{"text":"0.1 mi","value":155},"duration":{"text":"1 min","value":21},"end_location":{"lat":38.2552239,"lng":-85.7438597},"html_instructions":"Turn <b>left</b> onto <b>S Jackson St</b>","maneuver":"turn-left","polyline":{"points":"omnhFp{ijOqEc@aAI"},"start_location":{"lat":38.2538432,"lng":-85.7440871},"travel_mode":"DRIVING"}],"via_waypoint":[]}],"overview_polyline":{"points":"c{nhFfgkjOIbBtGl@RuDnAuVbA{QsGm@"},"summary":"E Market St","warnings":[],"waypoint_order":[]}],"status":"OK"}');
  test.equal(result, expect, 'directions should match for known, short trip');
});
*/

/*
 * CURRENTLY FAILING
 *   code functional, but the test is failing due to async and testing :(
 *
Tinytest.add('api-direct-call', function (test) {
  GoogleMaps.distance(
    "100 East Main Street, Louisville KY, 40202",
    "1500 Bardstown Rd, Louisville, KY 40205",
    Meteor.bindEnvironment(function (error, data) {
      console.log('transit');
      if (error) {
        console.log(error);
      }
      test.equal(
        data.rows[0].elements[0],
        {
          distance: { text: '5.4 km', value: 5447 },
          duration: { text: '9 mins', value: 552 },
          status: 'OK'
        },
        'core functionality, transit distance'
      );
    }),
    'false',
    'transit'
  );
  GoogleMaps.distance(
    "100 East Main Street, Louisville KY, 40202",
    "1500 Bardstown Rd, Louisville, KY 40205",
    Meteor.bindEnvironment(function (error, data) {
      console.log('walking');
      if (error) {
        console.log(error);
      }
      test.equal(
        data.rows[0].elements[0],
        {
          distance: { text: '5.0 km', value: 5026 },
          duration: { text: '1 hour 4 mins', value: 3845 },
          status: 'OK'
        },
        'core functionality, walking distance'
      );
    }),
    'false',
    'walking'
  );
});
*/


