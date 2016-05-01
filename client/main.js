import angular from 'angular';
import angularMeteor from 'angular-meteor';
import '../imports/startup/accounts-config.js';

angular.module('kenko-app', [
  angularMeteor,
  'accounts.ui'
]);

function onReady() {
  angular.bootstrap(document, ['kenko-app']);
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}