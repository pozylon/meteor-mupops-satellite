Package.describe({
  name: 'kaso:devops-satellite',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Satellite package for version retrieval in mup-ops',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/pozylon/meteor-mupops-satellite.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use(
      [
        'coffeescript',
        'iron:router'
      ]);

  api.addFiles('lib/devops-satellite.coffee');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('kaso:devops-satellite');
  api.addFiles('devops-satellite-tests.js');
});
