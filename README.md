# Wrapper for googlemaps

A Meteor packaged wrapper for node-googlemaps.

## Credit

This is a wrapper for [moshen/node-googlemaps](https://github.com/moshen/node-googlemaps)

## Install

`meteor add servicelocale:googlemaps-api`

## Usage

You can get to any of the
[node-googlemaps methods](https://github.com/moshen/node-googlemaps/blob/master/lib/googlemaps.js),
with an async callback... like so:

```
GoogleMaps.distance(
    "100 East Main Street, Louisville KY, 40202",
    "1500 Bardstown Rd, Louisville, KY 40205",
    function (error, data) {
      console.log('transit');
      if (error) {
        console.log(error);
      }
      console.log(data.rows[0].elements[0]);
      /* expect = {
        distance: { text: '5.4 km', value: 5447 },
        duration: { text: '9 mins', value: 552 },
        status: 'OK'
      } */
    },
    'false',
    'transit'
);
GoogleMaps.distance(
    "100 East Main Street, Louisville KY, 40202",
    "1500 Bardstown Rd, Louisville, KY 40205",
    function (error, data) {
      console.log('walking');
      if (error) {
        console.log(error);
      }
      console.log(data.rows[0].elements[0]);
      /* expect = {
        distance: { text: '5.0 km', value: 5026 },
        duration: { text: '1 hour 4 mins', value: 3845 },
        status: 'OK'
      } */
    },
    'false',
    'walking'
);
```

Or you can use one of the handy wrapper methods provided

### GoogleMaps.getDistance()

```
var result = GoogleMaps.getDistance("Melbourne", "Sydney");
console.log(result);

// from tests

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

// from tests

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
```

### GoogleMaps.getDirections()

```
var result = GoogleMaps.getDirections("Melbourne", "Sydney");
console.log(result);

// from tests

  var result = GoogleMaps.getDirections(
    "Louisville KY, 40202",
    "Houston TX, 77099"
  );

  var expect = {
    "routes":[
    {
      "bounds":{
        "northeast":{
          "lat":38.2560702,
          "lng":-85.7438597
        },
        "southwest":{
          "lat":38.2538432,
          "lng":-85.7518102
        }
      },
      "copyrights":"Map data ©2014 Google",
      "legs":[
      {
        "distance":{
          "text":"0.6 mi",
          "value":1036
        },
        "duration":{
          "text":"2 mins",
          "value":140
        },
        "end_address":"500 East Main Street, Louisville, KY 40202, USA",
        "end_location":{
          "lat":38.2552239,
          "lng":-85.7438597
        },
        "start_address":"100 East Main Street, Louisville, KY 40202, USA",
        "start_location":{
          "lat":38.2560158,
          "lng":-85.7510808
        },
        "steps":[
        {
          "distance":{
            "text":"144 ft",
            "value":44
          },
          "duration":{
            "text":"1 min",
            "value":3
          },
          "end_location":{
            "lat":38.2560702,
            "lng":-85.7515844
          },
          "html_instructions":"Head <b>west</b> on <b>E Main St</b> toward <b>S 1st St</b>",
          "polyline":{
            "points":"c{nhFfgkjOIbB"
          },
          "start_location":{
            "lat":38.2560158,
            "lng":-85.7510808
          },
          "travel_mode":"DRIVING"
        },
        {
          "distance":{
            "text":"0.1 mi",
            "value":156
          },
          "duration":{
            "text":"1 min",
            "value":18
          },
          "end_location":{
            "lat":38.2546819,
            "lng":-85.7518102
          },
          "html_instructions":"Take the 1st <b>left</b> onto <b>S 1st St</b>",
          "polyline":{
            "points":"m{nhFjjkjOtGl@"
          },
          "start_location":{
            "lat":38.2560702,
            "lng":-85.7515844
          },
          "travel_mode":"DRIVING"
        },
        {
          "distance":{
            "text":"0.4 mi",
            "value":681
          },
          "duration":{
            "text":"2 mins",
            "value":98
          },
          "end_location":{
            "lat":38.2538432,
            "lng":-85.7440871
          },
          "html_instructions":"Take the 1st <b>left</b> onto <b>E Market St</b>",
          "polyline":{
            "points":"wrnhFxkkjODu@L_CNuCf@qKFiANcCTeEZeGFcAHkA"
          },
          "start_location":{
            "lat":38.2546819,
            "lng":-85.7518102
          },
          "travel_mode":"DRIVING"
        },
        {
          "distance":{
            "text":"0.1 mi",
            "value":155
          },
          "duration":{
            "text":"1 min",
            "value":21
          },
          "end_location":{
            "lat":38.2552239,
            "lng":-85.7438597
          },
          "html_instructions":"Turn <b>left</b> onto <b>S Jackson St</b>",
          "maneuver":"turn-left",
          "polyline":{
            "points":"omnhFp{ijOqEc@aAI"
          },
          "start_location":{
            "lat":38.2538432,
            "lng":-85.7440871
          },
          "travel_mode":"DRIVING"
        }
        ],
          "via_waypoint":{
          }
      }
      ],
        "overview_polyline":{
          "points":"c{nhFfgkjOIbBtGl@RuDnAuVbA{QsGm@"
        },
        "summary":"E Market St",
        "warnings":{
        },
        "waypoint_order":{
        }
    }
    ],
      "status":"OK"
  }
```

# Contributors

 - ZeroAsterisk (https://github.com/zeroasterisk)
 - Akhatri (https://github.com/akhatri)
