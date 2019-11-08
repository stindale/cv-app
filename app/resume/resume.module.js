'use strict';

angular
  .module('resume', [
    'ngRoute',
    'ngMaterial'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/resume', {
      template: '<resume-layout/>'
    });
  }])
