Package.describe({
  summary: "Google maps for meteor"
});

Npm.depends({"googlemaps":"0.1.9"});

Package.on_use(function (api) {
	api.export('GoogleMaps', ['server']);
	api.add_files(
	[
		'lib.js'
	], ['server'] );
});