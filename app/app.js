'use strict';

angular
  .module('myApp', [
    'ngRoute',
    'ngMaterial',
    'resume',
  ]).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/resume'});
  }]);
