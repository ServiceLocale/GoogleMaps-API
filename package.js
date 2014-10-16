Package.describe({
  summary: 'Google maps for meteor',
  version: '0.9.4',
  name: 'servicelocale:googlemaps-api',
  git: 'https://github.com/ServiceLocale/GoogleMaps-API'
});

Npm.depends({'googlemaps':'0.1.20'});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2');
  api.use('underscore', 'server');
  api.export('GoogleMaps', 'server');
  api.addFiles('google-maps-server.js', 'server');
});


Package.onTest(function(api) {
  api.use('tinytest');
  api.use('servicelocale:googlemaps-api');
  api.addFiles('google-maps-server-test.js', 'server');
});
