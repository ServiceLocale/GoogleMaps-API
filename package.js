Package.describe({
  summary: 'Google maps for meteor',
  version: '0.0.1',
  name: 'servicelocale:google-maps-server',
  git: 'https://github.com/ServiceLocale/GoogleMaps-API'
});

Npm.depends({'googlemaps':'0.1.9'});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2');
  api.use('underscore', 'server');
  api.export('GoogleMaps', 'server');
  api.addFiles('google-maps-server.js', 'server');
});


Package.onTest(function(api) {
  api.use('tinytest');
  api.use('servicelocale:google-maps-server');
  api.addFiles('google-maps-server-test.js', 'server');
});
