'use strict';

angular.
  module('core.kitty').
  factory('Kitty', ['$resource',
    function($resource) {
      return $resource('http://127.0.0.1:8000/kitties/:kittyId',
      {kittyId: '@id'},
      {
          'update': { method:'PUT' }
      });
      
    }
    
  ]);
  