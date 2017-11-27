'use strict';

angular.
  module('kittyApp').
  config(['$locationProvider' ,'$routeProvider', '$resourceProvider',
    function config($locationProvider, $routeProvider, $resourceProvider) {
      $resourceProvider.defaults.stripTrailingSlashes = false;
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/kitties', {
          template: '<kitty-list></kitty-list>'
        }).
        // when('/kitties/:kittyId', {
        //   template: '<kitty-detail></kitty-detail>'
        // }).
        otherwise('/kitties');
    }
  ]);
